import React, { ComponentType } from "react";
export const _functor = Symbol('functor')
export const _contravariant = Symbol('contravariant')
export const _applicative = Symbol('applicative')

export interface Functor<F> {
    [_functor]: true,
    fmap: <A,B>(f:(a:A) => B) => (fa: F) => F
}
export interface Contravariant<F> {
    [_contravariant]: boolean,
    contramap: <A,B>(f:(a:A) => B) => (fa: F) => F
}

export interface HOCFunctorImpl extends Functor<ComponentType>{
    fmap:<A,B,>(f:(a:A) => B) => (CA: ComponentType<A>) => ComponentType<B>
}


