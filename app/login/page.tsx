"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    identifier: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onLogin = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/user");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("Login failed", err.response?.data.error || err.message);
        toast.error(err.response?.data.error || err.message);
        setError(err.response?.data.error || err.message);
      } else {
        console.error(err);
        toast.error("An unexpected error occurred");
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.identifier.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="bg-bkg w-full h-full fixed inset-0 flex items-center justify-center backdrop-blur-2xl">
      <div className="star-layers fixed 2xl:translate-x-[10%]">
        <div id="stars" className="max-md:invisible" />
        <div id="stars2" />
        <div id="stars3" />
      </div>

      <div className="max-w-md w-full mx-6 md:mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center mb-4">
          Login to Artiset Hackathon
        </h2>
        <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="identifier">Username or Email</Label>
            <Input
              id="identifier"
              type="text"
              value={user.identifier}
              onChange={(e) => setUser({ ...user, identifier: e.target.value })}
              placeholder="Username or Email"
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
            disabled={buttonDisabled || loading}
            className={`bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] transition-transform duration-300 ease-in-out`}
          >
            {loading ? 'Loading...' : 'Log In'}
            <BottomGradient />
          </button>
        </form>

        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        <p className="text-neutral-600 text-md mt-4 text-center dark:text-neutral-300">
          Don&apos;t have an account?&nbsp;
          <a href="/signup" className="font-medium text-primary transition-all duration-200 hover:underline">
            Sign Up
          </a>
        </p>
      </div>

      {/* <MultiStepLoader loading={loading} /> */}
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

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default LoginPage;
