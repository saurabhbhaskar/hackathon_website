"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";

const SignupPage = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const onSignup = async (e:any) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError(""); // Reset error state
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            toast.success("Signup successful!");
            router.push("/login");
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const errorMessage = err.response?.data.error || err.message;
                console.log("Signup failed", errorMessage);
                toast.error(errorMessage);
                setError(errorMessage);
            } else {
                console.error("An unexpected error occurred:", err);
                toast.error("An unexpected error occurred");
                setError("An unexpected error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-bkg w-full h-full fixed inset-0 flex items-center justify-center backdrop-blur-2xl">
            <div className="star-layers fixed 2xl:translate-x-[10%]">
                <div id="stars" className="max-md:invisible" />
                <div id="stars2" />
                <div id="stars3" />
            </div>

            <div className="max-w-md w-full mx-6 md:mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center mb-4">
                    Sign Up for Artiset Hackathon
                </h2>
                <form onSubmit={onSignup}>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            type="text"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            placeholder="Username"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder="Email"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="Password"
                        />
                    </LabelInputContainer>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] transition-transform duration-300 ease-in-out`}
                    >
                        {loading ? 'Loading...' : 'Sign Up'}
                        <BottomGradient />
                    </button>
                </form>

                {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

                <p className="text-neutral-600 text-md mt-4 text-center dark:text-neutral-300">
                    Already have an account?&nbsp;
                    <a href="/login" className="font-medium text-primary transition-all duration-200 hover:underline">
                        Log In
                    </a>
                </p>
            </div>
        </div>
    );
};

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({ children, className }:any) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default SignupPage;
