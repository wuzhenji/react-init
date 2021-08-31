import { Effect, Reducer } from '@@/plugin-dva/connect'

export interface IBaseModel<T> {
    namespace: string;
    state: T;
    effects: {
        initData: Effect;
        [effectAction: string]: Effect;
    };
    reducers: {
        saveState: Reducer<T>;
        [reducerAction: string]: Reducer<T>;
    }
}