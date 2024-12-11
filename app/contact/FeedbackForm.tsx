"use client"

import React, { useState } from "react"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const FeedbackForm: React.FC = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address", {
        description: "Please enter a valid email address.",
      })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/send-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      })

      if (response.ok) {
        const data = await response.json()
        if (data.success) {
          toast.success("Feedback Sent", {
            description: "Thank you for your feedback!",
          })
          setEmail("")
          setMessage("")
        } else {
          throw new Error(data.error || "Failed to send feedback")
        }
      } else {
        throw new Error("Failed to send feedback")
      }
    } catch (error) {
      toast.error("Failed to send feedback", {
        description:
          error instanceof Error ? error.message : "Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl space-y-6 px-6 pb-6"
    >
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-[var(--text)]"
        >
          Email
          <span className="text-red-400"> *</span>
        </label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-[8px] bg-[var(--background)] text-[var(--text)]"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-[var(--text)]"
        >
          Message
          <span className="text-red-400"> *</span>
        </label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="w-full rounded-[8px] bg-[var(--background)] text-[var(--text)]"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-fit rounded-[8px] border border-[var(--text)] bg-[var(--background)] text-[var(--text)]"
      >
        {isSubmitting ? "Sending..." : "Send Feedback"}
      </Button>
    </form>
  )
}

export default FeedbackForm