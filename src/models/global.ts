import { IBaseModel } from '@/pages/index.d'
import { checkStatusCode } from '@/utils/request'
import { queryCurrentUser } from '@/services/user'

interface IModelState {
    userInfo: {
        avatar?: string;
        name?: string;
        userid?: string;
    } | undefined
}
const Model: IBaseModel<IModelState> = {
    namespace: 'global',
    state: {
        userInfo: undefined
    },
    effects: {
        * initData({ payload }, { put, call, select, take }) {
            const response = yield queryCurrentUser(payload)
            if (checkStatusCode(response)) {
                const userInfo = response.data || { }
                yield put({
                    type: 'saveState',
                    payload: {
                        userInfo
                    }
                })
            }
        }
    },
    reducers: {
        saveState(state, action) {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

export default Model