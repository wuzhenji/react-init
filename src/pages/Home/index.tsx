import { history } from 'umi'
import { Button } from 'antd'
import styles from './index.less'
import React, { useEffect } from 'react'
import Iconfont from '@/components/Iconfont'
import useModelHelp from '@/hooks/useModelHelp'

const Home: React.FC = () => {

    const [modelState, { dispatch, setState, loadings }] = useModelHelp({ namespace: 'home' })
    const { name = 'ccc', userInfo } = modelState
    const actions = {
        initData: 'home/initData'
    }

    useEffect(() => {
    }, [])

    return <div className={styles.Home}>
        <Button type="primary" onClick={() => {
            dispatch({
                type: actions.initData,
                payload: { }
            })
        }}>获取用户</Button>
        &nbsp;&nbsp;&nbsp;
        <Iconfont iconName="icon-wode_me" size="20" color="black" />
        &nbsp;
        用户名：{userInfo.name}
    </div>
}

export default Home