import { Dispatch, useDispatch, useSelector } from 'umi'
import { useCallback } from 'react'

export interface IProps {
    namespace: string;
    saveStateName?: string;
}
interface IMethods {
    dispatch: Dispatch;
    loadings: any;
    setState: (payload: any) => void
}

const useModelHelp = (props: IProps): [modelState: any, methods: IMethods] => {

    const { namespace, saveStateName = 'saveState' } = props

    const dispatch = useDispatch()

    const loadings = useSelector((state: any) => state.loading)

    const setState = useCallback((payload: any) => {
        dispatch({
            type: `${namespace}/${saveStateName}`,
            payload
        })
    }, [namespace, saveStateName])

    const modelState: any = useSelector((state: any) => state[namespace])

    return [modelState, { dispatch, loadings, setState }]
}

export default useModelHelp