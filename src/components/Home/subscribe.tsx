"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import Lottie from "lottie-react";
import  subscribe from "public/Animation/Subscribe.json"

const Subscribe = () => {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")

            // TODO: Replace with your actual API endpoint
            // const response = await fetch("/api/subscribe", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ email }),
            // })

    }

    return (
        <section className="my-14 px-4">
            <div className="mx-auto container max-w-5xl">
                <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-purple-300 rounded-2xl px-10 py-3 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        {/* Left Content */}
                        <div className="flex-1 w-full">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                Subscribe to Our Newsletter
                            </h2>
                            <p className="text-gray-600 text-lg mb-6">
                                Get exclusive deals, new arrivals, and special offers delivered to your inbox!
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        required
                                        disabled={status === "loading"}
                                        className="flex-1 h-12 text-base"
                                    />
                                    <Button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="h-12 px-8 gap-2 whitespace-nowrap"
                                    >
                                        {status === "loading" ? (
                                            "..."
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </Button>
                                </div>

                                {status === "success" && (
                                    <p className="text-green-600 text-sm font-medium flex items-center gap-2">
                                        <span className="inline-block w-2 h-2 bg-green-600 rounded-full"></span>
                                        Successfully subscribed! Check your email for confirmation.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="text-red-600 text-sm font-medium flex items-center gap-2">
                                        <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                                        Something went wrong. Please try again.
                                    </p>
                                )}
                            </form>

                            <p className="text-xs text-gray-500 mt-3">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>

                        {/* Right Image/Illustration */}
                        <Lottie
                            animationData={subscribe}
                            loop={true}
                            autoplay={true}
                            style={{ width: 400, height: 400 }}

                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe