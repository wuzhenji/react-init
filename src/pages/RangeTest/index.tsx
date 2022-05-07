import React, { useRef } from "react";
import styles from './index.less'
import useRangeHelp from "@/hooks/useRangeHelp";
import { Button, Space } from "antd";

const RangeTest:React.FC = () => {

  const EditBox = useRef<HTMLDivElement>(null)

  const [range, position, {cursorPitch, insertText}] = useRangeHelp({container: EditBox})

  return <div className={styles.RangeTest}>
    <div
      ref={EditBox}
      contentEditable
      // suppressContentEditableWarning={true}
      className={styles.EditBox}
    />
    <Space style={{marginTop: 20}}>
      <Button onClick={cursorPitch}>定位丢失的光标</Button>
      <Button onClick={() => insertText("=>😊<=")}>插入内容</Button>
      <Button>光标坐标{JSON.stringify(position)}</Button>
    </Space>
  </div>
}

export default RangeTest
