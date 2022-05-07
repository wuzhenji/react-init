import {useCallback, useEffect, useState, EffectCallback, DependencyList} from 'react'
import {Dispatch} from "@@/plugin-dva/connect";

interface IProps {
  container: {current: HTMLDivElement | null}
}
interface IMethods {
  cursorPitch: () => void;
  insertText: (text: string) => void;
}
const useRangeHelp = (props: IProps): [range: Range | null, position: DOMRectReadOnly | null, methods: IMethods] => {
  const {container} = props
  const [range, setRange] = useState<Range | null>(null)
  const [position, setPosition] = useState<DOMRectReadOnly | null>(null)


  useEffect(() => {
    if(container && container.current) {
      container.current.onclick = () => {
        console.log("onclick")
        const selection = document.getSelection()
        setRange(selection?.getRangeAt(0) ?? null)
      }
      container.current.onkeyup = () => {
        const selection = document.getSelection()
        const newRange = document.createRange()
        const offset = range?.startOffset || 0
        console.log(range, offset)
        newRange.setStart(container.current?.firstChild!, offset)
        setRange(newRange ?? null)
      }
    }
  }, [container])

  useEffect(() => {
    console.log("range", range)
    if(range) {
      setPosition(range.getBoundingClientRect())
    } else {
      setPosition(null)
    }
  }, [range])

  // 定位丢失的光标
  const cursorPitch = () => {
    const selection = document.getSelection()
    selection?.removeAllRanges()
    if(range) {
      selection?.addRange(range)
    } else {
      if(container.current) {
        container.current.focus()
      }
    }
  }

  // 插入内容
  const insertText = (text: string) => {
    const selection = document.getSelection()
    selection?.removeAllRanges()
    if(range) {
      selection?.addRange(range)
      if(selection) {
        const newRange = selection.getRangeAt(0)
        const startOffset = newRange.startOffset
        const textNode = document.createTextNode(text)
        newRange.insertNode(textNode)
        newRange.collapse(false);
        selection.addRange(newRange)
      }
    } else {
      if(container.current){
        container.current.innerText = text
        const newRange = document.createRange()
        newRange.setStart(container.current.firstChild!, text.length)
        selection?.addRange(newRange)
        setRange(newRange)
      }
    }
  }

  return [range, position, { cursorPitch, insertText }]
}

export default useRangeHelp
