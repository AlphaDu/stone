import React, {ReactElement} from "react"

// lift hook to context https://bytedance.feishu.cn/wiki/wikcnyykkd1w2fDas322o1CIBLm
// copy and optimize generic function compatibility from "@byted/hooks/es/createModel"

const EMPTY: unique symbol = Symbol()

export type ModelProviderProps<State> = {
    children: React.ReactNode
} & State

export interface Model<Value, State = void> {
    Provider: React.ComponentType<ModelProviderProps<State>>
    useContext: () => Value
}


export default function createContainer<T extends (...args: any[]) => any, Value=ReturnType<T>, State=Parameters<T>[0]>(
    useHook:T
): Model<Value, State> {
    let HooksContext = React.createContext<Value | typeof EMPTY>(EMPTY)

    function Provider(props: ModelProviderProps<State>) {
        let value = useHook(props)
        return <HooksContext.Provider value={value}>{props.children}</HooksContext.Provider>
    }

    function useContext(): Value {
        let value = React.useContext(HooksContext)
        if (value === EMPTY) {
            throw new Error("Component must be wrapped with <Model.Provider>")
        }
        return value
    }

    return { Provider, useContext }
}
