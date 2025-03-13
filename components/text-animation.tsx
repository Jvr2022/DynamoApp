"use client"

import { useEffect, useState, useRef } from "react"

export function TextAnimation({ loop = false }) {
  const [text, setText] = useState("Skype")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const words = ["Skype", "Dynamo"]
  const pauseDuration = 2000
  const resetsBeforeSwitch = 2
  const initialText = useRef("Skype")

  useEffect(() => {
    let timer
    if (loopNum < resetsBeforeSwitch) {
      timer = setTimeout(() => {
        handleType()
      }, typingSpeed)
    } else if (loopNum === resetsBeforeSwitch) {
      setText("")
      setIsDeleting(true)
      timer = setTimeout(() => {
        handleType()
      }, typingSpeed)
    }

    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  const handleType = () => {
    const i = 1;
    const fullText = words[i]

    if (isDeleting) {
      setText(fullText.substring(0, text.length - 1))
      setTypingSpeed(75)
    } else {
      setText(fullText.substring(0, text.length + 1))
      setTypingSpeed(150)
    }

    if (!isDeleting && text === fullText) {
      setTimeout(() => {
        setIsDeleting(true)
      }, pauseDuration)
    } else if (isDeleting && text === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
    }
  }

  return (
    <span className="text-[#00AFF0] inline-block min-w-[180px]">
      {text}
      <span className="animate-blink">|</span>
    </span>
  )
}
