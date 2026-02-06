"use client";

import { X } from "lucide-react";
import { useSigninStoreModal } from "@/store/useSigninStoreModal";

export default function SigninModal() {
  const { isOpen, closeSigninModal } = useSigninStoreModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={closeSigninModal}
      />

      {/* Modal */}
      <div className="relative lg:w-full lg:max-w-md w-[90%] bg-bg-primary rounded shadow-lg z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-emerald-700 text-white rounded-t">
          <h2 className="font-semibold text-lg">Log In</h2>
          <button
            onClick={closeSigninModal}
            className="hover:opacity-80"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="
                w-full rounded border border-border
                bg-[var(--color-input-bg)]
                px-3 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-secondary
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              Password
            </label>

            <div className="flex">
              <input
                type="password"
                className="
                  flex-1 rounded-l border border-border
                  bg-[var(--color-input-bg)]
                  px-3 py-2 text-sm
                  focus:outline-none
                "
              />
              <button
                type="button"
                className="
                  px-4 border border-l-0 border-border
                  rounded-r text-xs font-medium
                  bg-muted-action text-text-secondary
                "
              >
                SHOW
              </button>
            </div>

            <a href="#" className="block text-xs text-blue-600 mt-2">
              Forgot your password?
            </a>
          </div>

          {/* Magic link */}
          <button
            type="button"
            className="
              w-full flex items-center justify-center gap-2
              py-2 rounded
              bg-gray-200 text-blue-600 text-sm
              hover:opacity-90
            "
          >
            ✨ Send login link by email
          </button>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <button
              className="
                px-6 py-2 rounded
                bg-yellow-500 text-white
                font-semibold text-sm
                hover:opacity-90
              "
            >
              LOG IN
            </button>

            <a href="#" className="text-xs text-blue-600">
              Notice of Collection
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
