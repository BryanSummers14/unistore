// T - Wrapped component props
// S - Wrapped component state
// K - Store state
// I - Injected props to wrapped component

declare module "unistore/preact" {
	import * as Preact from "preact";
	import { ActionCreator, StateMapper, Store } from "unistore";

	export function connect<T, S, K, I>(
		mapStateToProps: string | Array<string> | StateMapper<T, K, I>,
		actions?: ActionCreator<K> | object
	): (Child: ((props: T & I) => Preact.VNode) | (new (props?: T & I, context?: any) => Preact.Component<T & I, S>)) => Preact.ComponentConstructor<T, S>;

	export interface ProviderProps<T> {
		store: Store<T>;
	}

	export class Provider<T> extends Preact.Component<ProviderProps<T>, {}> {
		render(props: ProviderProps<T>, {}): Preact.VNode;
	}
}
