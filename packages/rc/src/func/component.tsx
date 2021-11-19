import React, {ComponentType} from "react";
import {_contravariant, Contravariant} from "./index";

const ContravariantImpl = {
    [_contravariant]: true,
    contramap: <A,B>(f: (a: A) => B) => (Component: ComponentType<B>): ComponentType<A> => {
        const ReturnComponent: ComponentType<A> = props => {
            const b = f(props)
            return <Component {...b}/>
        }
        return ReturnComponent
    },
}
type Assert = (typeof ContravariantImpl) extends Contravariant<ComponentType<unknown>>
    ? true : false



