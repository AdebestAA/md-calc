"use client";

import { useState } from "react";
import { UploadCloud, HelpCircle, UserPlus, Smartphone } from "lucide-react";

export default function ContactPage() {
  const [fileName, setFileName] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl text-sm">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Contact MDCalc
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Have questions or feedback? Get in touch with the MDCalc team.
            Please read our
            <span className="ml-1 text-blue-600 underline cursor-pointer">
              Notice of Collection →
            </span>
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="">
              <form className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="mt-1 w-full rounded-md border px-3 py-1 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email address *
                  </label>
                  <input
                    type="email"
                    placeholder="janesmith@email.com"
                    className="mt-1 w-full rounded-md border px-3 py-1 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    How can we help? *
                  </label>
                  <select className="mt-1 w-full rounded-md border px-3 py-1 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                    <option>Choose one</option>
                    <option>General question</option>
                    <option>Technical issue</option>
                    <option>Feedback</option>
                    <option>Partnership</option>
                  </select>
                </div>

                {/* Comments */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Comments *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please provide any additional information"
                    className="mt-1 w-full rounded-md border px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Attachment (Optional)
                  </label>

                  <label className="mt-2 flex cursor-pointer items-center gap-2 text-sm text-blue-600 hover:underline">
                    <UploadCloud size={18} />
                    Upload a Photo
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>

                  {fileName && (
                    <p className="mt-1 text-xs text-gray-500">
                      Selected: {fileName}
                    </p>
                  )}

                  <p className="mt-1 text-xs text-gray-500">
                    File formats supported are jpg, png, gif, and/or PDF. Max
                    file upload size is 2mb.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="rounded-md bg-emerald-600 px-5 py-2 text-sm font-medium text-white  hover:bg-emerald-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <SidebarCard
              icon={<HelpCircle className="text-blue-600" />}
              title="Check out our FAQ for answers to some general inquiries."
              buttonText="Read FAQs"
            />

            <SidebarCard
              icon={<UserPlus className="text-teal-600" />}
              title="Want to become an MDCalc contributor?"
              buttonText="Learn More"
            />

            <SidebarCard
              icon={<Smartphone className="text-indigo-600" />}
              title="Access anytime, anywhere. Download the MDCalc app."
              buttonText="Download"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarCard({
  icon,
  title,
  buttonText,
}: {
  icon: React.ReactNode;
  title: string;
  buttonText: string;
}) {
  return (
    <div className="flex items-start gap-4  p-4 ">
      <div className="rounded-lg bg-gray-100 p-3">{icon}</div>

      <div>
        <p className="text-sm font-medium text-dark-primary">{title}</p>

        <button className="mt-2 rounded-md border border-primary px-3 py-1 text-xs font-medium text-primary hover:bg-emerald-50">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
