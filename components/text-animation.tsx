"use client"

import { useEffect, useState } from "react"

export function TextAnimation({ loop = false }) {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const words = ["Skype", "Dynamo"]
  const pauseDuration = 2000

  useEffect(() => {
    const timer = setTimeout(() => {
      handleType()
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  const handleType = () => {
    const i = loopNum % words.length
    const fullText = words[i]

    if (isDeleting) {
      setText(fullText.substring(0, text.length - 1))
      setTypingSpeed(75)
    } else {
      setText(fullText.substring(0, text.length + 1))
      setTypingSpeed(150)
    }

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), pauseDuration)
    } else if (isDeleting && text === "") {
      setIsDeleting(false)
      setLoopNum(loop ? (loopNum + 1) % words.length : loopNum + 1)

      if (!loop && loopNum >= words.length) {
        setTypingSpeed(9999999)
      } else if (loop) {
        setText("")
        setIsDeleting(false)
      }
    }
  }

  return (
    <span className="text-[#00AFF0] inline-block min-w-[180px]">
      {text}
      <span className="animate-blink">|</span>
    </span>
  )
}
