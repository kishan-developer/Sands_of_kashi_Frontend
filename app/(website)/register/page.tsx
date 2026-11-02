"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  password: string;
  confirmPassword: string;
  otp: string;
}

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [canResendOtp, setCanResendOtp] = useState(true);

  // Countdown timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0 && !canResendOtp) {
      setCanResendOtp(true);
    }
    return () => clearInterval(interval);
  }, [countdown, canResendOtp]);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const totalSteps = 3;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validateStep1 = () => {
    if (!formData.fullName.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Invalid email format");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Phone number is required");
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Phone number must be 10 digits");
      return false;
    }
    if (formData.phone.startsWith('0')) {
      setError("Phone number cannot start with 0");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.password) {
      setError("Password is required");
      return false;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return false;
    }
    if (!/[A-Z]/.test(formData.password)) {
      setError("Password must contain at least one uppercase letter");
      return false;
    }
    if (!/[a-z]/.test(formData.password)) {
      setError("Password must contain at least one lowercase letter");
      return false;
    }
    if (!/[0-9]/.test(formData.password)) {
      setError("Password must contain at least one number");
      return false;
    }
    if (!/[!@#$%^&*]/.test(formData.password)) {
      setError("Password must contain at least one special character");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSendOtp = async () => {
    if (!validateStep1()) return;

    setLoading(true);
    setError("");
    setCanResendOtp(false);

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:2000/api/v1";
      const response = await fetch(`${backendUrl}/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: formData.email,
          purpose: 'registration'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("OTP sent to your email");
        setCountdown(60); // Start 60-second countdown
        setStep(2);
      } else {
        setError(data.message || "Failed to send OTP");
        setCanResendOtp(true); // Re-enable if failed
      }
    } catch {
      setError("Failed to send OTP. Please try again.");
      setCanResendOtp(true); // Re-enable if failed
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (step === 1) {
      handleSendOtp();
    } else if (step === 2) {
      if (validateStep2()) {
        setStep(3);
      }
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (!formData.otp || formData.otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:2000/api/v1";
      const response = await fetch(`${backendUrl}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess("Account created successfully! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      } else {
        setError(data.message || "Registration failed");
      }
    } catch {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      title: "Personal Information",
      description: "Enter your basic details",
    },
    {
      title: "Security",
      description: "Create a secure password",
    },
    {
      title: "Verification",
      description: "Verify your email with OTP",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-block mb-6">
            <Image src="/logo.png" alt="Sands of Kashi" width={180} height={64} className="h-16 w-auto mx-auto" priority />
          </Link>
          <h2 className="text-3xl font-bold text-white font-serif">Create Account</h2>
          <p className="mt-2 text-gray-400">Join Sands of Kashi for exclusive benefits</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between px-4">
          {steps.map((s, index) => (
            <div key={index} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    step > index + 1
                      ? "bg-[#b5946a] border-[#b5946a] text-white"
                      : step === index + 1
                      ? "bg-[#b5946a] border-[#b5946a] text-white"
                      : "border-gray-600 text-gray-600"
                  }`}
                >
                  {step > index + 1 ? <Check size={20} /> : index + 1}
                </div>
                <div className="mt-2 text-center">
                  <p
                    className={`text-xs font-medium ${
                      step >= index + 1 ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {s.title}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 transition-all ${
                    step > index + 1 ? "bg-[#b5946a]" : "bg-gray-600"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
          {/* Error/Success Messages */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm">
              {success}
            </div>
          )}

          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#b5946a] transition"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#b5946a] transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-shrink-0">
                    <select
                      name="countryCode"
                      value={formData.countryCode || "+91"}
                      onChange={handleChange}
                      className="pl-3 pr-8 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#b5946a] transition appearance-none cursor-pointer"
                    >
                      <option value="+91" className="bg-gray-900">+91</option>
                      <option value="+1" className="bg-gray-900">+1</option>
                      <option value="+44" className="bg-gray-900">+44</option>
                      <option value="+61" className="bg-gray-900">+61</option>
                      <option value="+971" className="bg-gray-900">+971</option>
                    </select>
                  </div>
                  <div className="relative flex-1">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#b5946a] transition"
                      placeholder="1234567890"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">10-digit number without leading 0</p>
              </div>
            </div>
          )}

          {/* Step 2: Password */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#b5946a] transition"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#b5946a] transition"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Password Requirements */}
              <div className="space-y-2 text-sm">
                <p className="text-gray-400 font-medium">Password must contain:</p>
                <ul className="space-y-1 text-gray-500">
                  <li className={formData.password.length >= 8 ? "text-green-400" : ""}>
                    {formData.password.length >= 8 ? "✓" : "○"} At least 8 characters
                  </li>
                  <li className={/[A-Z]/.test(formData.password) ? "text-green-400" : ""}>
                    {/[A-Z]/.test(formData.password) ? "✓" : "○"} One uppercase letter
                  </li>
                  <li className={/[a-z]/.test(formData.password) ? "text-green-400" : ""}>
                    {/[a-z]/.test(formData.password) ? "✓" : "○"} One lowercase letter
                  </li>
                  <li className={/[0-9]/.test(formData.password) ? "text-green-400" : ""}>
                    {/[0-9]/.test(formData.password) ? "✓" : "○"} One number
                  </li>
                  <li className={/[!@#$%^&*]/.test(formData.password) ? "text-green-400" : ""}>
                    {/[!@#$%^&*]/.test(formData.password) ? "✓" : "○"} One special character
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Step 3: OTP Verification */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-gray-300 mb-2">
                  Enter the 6-digit OTP sent to your email
                </p>
                <p className="text-[#b5946a] font-medium">{formData.email}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  OTP Code
                </label>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  maxLength={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-center text-2xl tracking-widest placeholder-gray-500 focus:outline-none focus:border-[#b5946a] transition"
                  placeholder="000000"
                />
              </div>

              <button
                type="button"
                onClick={handleSendOtp}
                disabled={loading || !canResendOtp}
                className={`w-full text-sm transition ${
                  canResendOtp 
                    ? "text-[#b5946a] hover:text-[#b5946a]/80" 
                    : "text-gray-500 cursor-not-allowed"
                }`}
              >
                {loading 
                  ? "Sending..." 
                  : !canResendOtp 
                    ? `Resend OTP in ${countdown}s` 
                    : "Resend OTP"
                }
              </button>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={step === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                step === 1
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-white hover:bg-white/5"
              }`}
            >
              <ArrowLeft size={20} />
              Previous
            </button>

            {step < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={loading}
                className="flex items-center gap-2 px-6 py-3 bg-[#b5946a] text-white rounded-lg font-medium hover:bg-[#705c49] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : step === 1 ? "Send OTP" : "Next"}
                <ArrowRight size={20} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="flex items-center gap-2 px-6 py-3 bg-[#b5946a] text-white rounded-lg font-medium hover:bg-[#705c49] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating Account..." : "Create Account"}
                <Check size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-[#b5946a] hover:text-[#b5946a]/80 font-medium transition">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
