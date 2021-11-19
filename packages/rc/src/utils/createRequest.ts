import {_functor, Functor} from "../func";
import {PromiseFunction} from "../type";
import createContainer, {Model} from "./createContainer";

const FunctorImpl = {
    [_functor]: true,
    fmap: <P,R>(pf:PromiseFunction<P, R>):Model<P,R> => createContainer(pf)
}

