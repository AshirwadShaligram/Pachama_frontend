"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/redux/hooks/authHooks";
import { registerUser } from "@/redux/slice/authSlice";
import { RegisterFormData } from "@/types/authTypes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, Loader } from "reicon-react";
import { toast } from "sonner";

const Register = () => {
  const [userData, setUserData] = useState<RegisterFormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const passwordMatch =
    userData.confirmPassword === "" ||
    userData.password === userData.confirmPassword;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await dispatch(
        registerUser({
          email: userData.email,
          password: userData.password,
        }),
      ).unwrap();

      toast.success(result.message);
      router.push("/login");
    } catch (error: any) {
      toast.error("Registration failed. Please try again.");
      console.error("Register error: ", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col bg-emerald-50 lg:flex-row">
      <div className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" />
      </div>

      {/* Form panel */}
      <div className="relative z-10 flex flex-1 flex-col px-6 py-8 sm:px-12 lg:px-16">
        <div className="flex justify-end">
          <Link
            href="/login"
            className="rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur transition-colors hover:bg-emerald-600 hover:text-white"
          >
            Log in instead
          </Link>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm rounded-3xl bg-white/80 p-8 shadow-xl ring-1 ring-emerald-100 backdrop-blur-sm sm:p-10"
          >
            <div className="mb-8 flex flex-col items-center text-center">
              <h1 className="bg-linear-to-r from-emerald-600 to-emerald-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
                Join NexPlay
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Create your gaming account
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  onBlur={() => setEmailTouched(true)}
                  className={`rounded-xl border-slate-200 transition-colors focus-visible:ring-emerald-500 ${
                    emailTouched && !userData.email.trim()
                      ? "border-red-400 focus-visible:ring-red-400"
                      : ""
                  }`}
                />
                {emailTouched && !userData.email.trim() && (
                  <p className="text-xs text-red-500">Email is required</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="********"
                    value={userData.password}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    onBlur={() => setPasswordTouched(true)}
                    className={`rounded-xl border-slate-200 pr-10 transition-colors focus-visible:ring-emerald-500 ${
                      passwordTouched && !userData.password.trim()
                        ? "border-red-400 focus-visible:ring-red-400"
                        : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-emerald-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {passwordTouched && !userData.password.trim() && (
                  <p className="text-xs text-red-500">Password is required</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-slate-700"
                >
                  Confirm password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="********"
                    value={userData.confirmPassword}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        confirmPassword: e.target.value,
                      }))
                    }
                    className={`rounded-xl border-slate-200 pr-10 transition-colors focus-visible:ring-emerald-500 ${
                      !passwordMatch
                        ? "border-red-400 focus-visible:ring-red-400"
                        : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-emerald-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
                {!passwordMatch && (
                  <p className="text-xs text-red-500">Passwords do not match</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full rounded-xl bg-linear-to-r from-emerald-600 to-emerald-500 py-5 font-semibold text-white shadow-md transition-all hover:from-emerald-700 hover:to-emerald-600 hover:shadow-lg disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader className="h-4 w-4 animate-spin" />
                    Creating account...
                  </span>
                ) : (
                  "Create account"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Image panel */}
      <div className="relative hidden flex-1 lg:block">
        <Image
          src="/image2.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
        <div className="absolute inset-0 " />
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <p className="text-2xl font-semibold leading-snug">
            Level up with a community built for players.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
