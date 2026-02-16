"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignupFormValues,
  signupSchema,
} from "@/lib/validations/signup-schema";
import { useSigninStoreModal } from "@/store/useSigninStoreModal";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const { openSigninModal } = useSigninStoreModal();
  const onSubmit = (data: SignupFormValues) => {
    console.log(data);
  };

  return (
    <>
      {/* Top right login */}
      <div className="text-right text-sm mb-4">
        Already have an account?{" "}
        <button
          onClick={openSigninModal}
          className="text-emerald-600 font-medium cursor-pointer"
        >
          Log in
        </button>
      </div>

      {/* Progress bar */}
      <div className="flex gap-2 mb-8">
        <div className="h-2 flex-1 rounded-full bg-emerald-600" />
        <div className="h-2 flex-1 rounded-full bg-emerald-100" />
      </div>

      <h1 className="text-2xl font-semibold mb-1">Welcome to MDCalc</h1>
      <p className="text-sm text-gray-500 mb-6">
        Just tell us a few things about yourself and we&apos;ll take care of the
        rest.
      </p>

      {/* NPI SECTION */}
      <div className="mb-6">
        <label className="text-xs font-medium text-gray-600">
          NPI# - Skip to the end of the registration by providing your NPI
          Number.
        </label>

        <div className="flex gap-2 mt-1">
          <input
            {...register("npi")}
            placeholder="1234567890"
            className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="button"
            className="px-4 rounded-md bg-emerald-100 text-emerald-700 text-sm font-medium"
          >
            Enter
          </button>
        </div>

        <p className="text-xs mt-2">
          Can&apos;t find NPI?{" "}
          <a href="#" className="text-emerald-600">
            Search for my NPI →
          </a>
        </p>

        {errors.npi && (
          <p className="text-xs text-red-500 mt-1">{errors.npi.message}</p>
        )}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">Or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-sm font-medium">First Name</label>
          <input
            {...register("firstName")}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          />
          {errors.firstName && (
            <p className="text-xs text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Last Name</label>
          <input
            {...register("lastName")}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          />
          {errors.lastName && (
            <p className="text-xs text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Country</label>
          <select
            {...register("country")}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="NG">Nigeria</option>
          </select>
          {errors.country && (
            <p className="text-xs text-red-500">{errors.country.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">Occupation</label>
          <select
            {...register("occupation")}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          >
            <option value="">Select Occupation</option>
            <option value="doctor">Doctor</option>
            <option value="student">Medical Student</option>
          </select>
          {errors.occupation && (
            <p className="text-xs text-red-500">{errors.occupation.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 rounded-md bg-emerald-200 text-emerald-800 py-2 font-medium disabled:opacity-50"
        >
          Continue
        </button>
      </form>
    </>
  );
}
