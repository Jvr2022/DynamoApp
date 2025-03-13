"use client"

import { useEffect, useState } from "react"

export function TextAnimation() {
  const [text, setText] = useState("Skype")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = ["Skype", "Dynamo"]

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
      if (i === 0) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else {
        setTypingSpeed(9999999)
      }
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
