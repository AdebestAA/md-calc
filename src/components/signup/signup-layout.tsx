import { ReactNode } from "react";

export default function SignupLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT PANEL */}
      <aside className="hidden lg:flex flex-col justify-between bg-[#053A3A] text-primary-foreground p-10">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <div className="h-10 w-10 rounded-lg bg-emerald-400 flex items-center justify-center font-bold text-[#053A3A]">
              MD+
            </div>
            <span className="font-semibold text-lg">Calc</span>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Signing up is easy.</h2>

          <p className="text-sm  leading-relaxed max-w-sm">
            Sign up is simple, free and effortless. Gain access to clinical
            tools trusted by millions for treating hundreds of millions of
            patients worldwide.
          </p>

          <ul className="mt-10 space-y-6 text-sm">
            <li className="flex gap-3">
              <span>⭐</span>
              <div>
                <p className="font-medium">Favorite Your Most Used Tools</p>
                <p className="">Save your top tools for quick access</p>
              </div>
            </li>

            <li className="flex gap-3">
              <span>🔄</span>
              <div>
                <p className="font-medium">Sync Across Devices</p>
                <p className="">
                  Access your favorites and recents on any platform
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <span>📋</span>
              <div>
                <p className="font-medium">Copy & Paste Results</p>
                <p className="">Copy inputs and results to add to your EHR</p>
              </div>
            </li>

            <li className="flex gap-3">
              <span>❤️</span>
              <div>
                <p className="font-medium">Personalized Experience</p>
                <p className="">
                  See the most relevant tools in your specialty
                </p>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      {/* RIGHT PANEL */}
      <main className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
