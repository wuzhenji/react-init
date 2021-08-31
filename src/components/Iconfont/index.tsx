import styles from './index.less'
import React from 'react'
import { } from 'umi'
import { } from 'antd'
import classNames from 'classnames'

interface Iprops {
    iconName: string;
    className?: string;
    size?: number | string;
    color?: string;
    zstyle?: any;
}
const Iconfont: React.FC<Iprops> = (props) => {
    const { iconName, className, size, color, zstyle } = props
    const style = { fontSize: `${size}px`, color, ...zstyle }

    return <i className={classNames('iconfont', iconName, className, styles.Iconfont)} style={style} />
}

export default Iconfont