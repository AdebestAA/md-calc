import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* TOP DARK SECTION */}
      <div className="bg-[#053A3A] text-primary-foreground px-6 lg:px-16 pt-20 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 min-w-10 rounded-lg bg-emerald-400 flex items-center justify-center font-bold text-[#053A3A] px-4">
                DxRx™
              </div>
              {/* <span className="font-semibold text-lg">Calc</span> */}
            </div>

            <h2 className="text-2xl lg:text-3xl font-semibold leading-snug max-w-md">
              DxRx™ is utilized by millions of clinicians to treat hundreds of
              millions of patients worldwide.
            </h2>

            {/* App buttons */}
            {/* <div className="flex gap-4 mt-8">
              <Image
                src="/app-store.svg"
                alt="Download on the App Store"
                width={140}
                height={42}
              />
              <Image
                src="/google-play.svg"
                alt="Get it on Google Play"
                width={140}
                height={42}
              />
            </div> */}
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:col-span-3">
            {/* Tools */}
            <div>
              <p className="font-semibold mb-4">Tools</p>
              <ul className="space-y-2 text-sm text-primary-foreground">
                <li>
                  <Link href="#">All Calculators</Link>
                </li>
                <li>
                  <Link href="#">Newest</Link>
                </li>
                <li>
                  <Link href="#">Favorites</Link>
                </li>
                <li>
                  <Link href="#">Specialty</Link>
                </li>
                <li>
                  <Link href="#">Guidelines</Link>
                </li>
                <li>
                  <Link href="#">DxRx™ EHR</Link>
                </li>
              </ul>
            </div>

            {/* Education */}
            <div>
              <p className="font-semibold mb-4">Education</p>
              <ul className="space-y-2 text-sm text-primary-foreground">
                <li>
                  <Link href="#">CME</Link>
                </li>
                <li>
                  <Link href="#">Stroke CME</Link>
                </li>
                <li>
                  <Link href="#">Physicians Guide</Link>
                </li>
                <li>
                  <Link href="#">EBM Guide</Link>
                </li>
                <li>
                  <Link href="#">EMRA Guide</Link>
                </li>
                <li>
                  <Link href="#">Peds EMRA Guide</Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <p className="font-semibold mb-4">About</p>
              <ul className="space-y-2 text-sm text-primary-foreground">
                <li>
                  <Link href="#">About DxRx™</Link>
                </li>
                <li>
                  <Link href="#">DxRx™ on Race</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
                <li>
                  <Link href="#">For Partners</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Team */}
            <div>
              <p className="font-semibold mb-4">Team</p>
              <ul className="space-y-2 text-sm text-primary-foreground">
                <li>
                  <Link href="#">Join Us</Link>
                </li>
                <li>
                  <Link href="#">Community</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Contributors</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DISCLAIMER */}
        <p className="max-w-7xl mx-auto text-xs text-primary-foreground mt-16 leading-relaxed">
          Calculations must be re-checked and should not be used alone to guide
          patient care, nor should they substitute for clinical judgment. See
          our{" "}
          <Link href="#" className="underline">
            full disclaimer
          </Link>
          .
        </p>
      </div>

      {/* BOTTOM WHITE BAR */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-600">
            All Rights Reserved ·{" "}
            <Link href="#" className="underline">
              Terms of Use
            </Link>{" "}
            ·{" "}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link href="#" className="underline">
              Cookie Policy
            </Link>{" "}
            ·{" "}
            <Link href="#" className="underline">
              Cookies Preferences
            </Link>
          </p>

          {/* Right icons */}
          <div className="flex items-center gap-4 text-emerald-600">
            <button className="text-sm font-medium">EN</button>
            <span>✕</span>
            <span>f</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
