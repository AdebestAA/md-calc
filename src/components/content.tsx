import { contentDummy } from "@/uitls/content-dummy";
import {
  LineChart,
  Sparkles,
  Star,
  Stethoscope,
  FileText,
  List,
} from "lucide-react";

const navItems = [
  { label: "Popular", icon: LineChart },
  { label: "Newest", icon: Sparkles },
  { label: "Favorites", icon: Star },
  { label: "Specialty", icon: Stethoscope },
  { label: "Guidelines", icon: FileText },
  { label: "All", icon: List },
];

const Content = () => {
  return (
    <div className="bg-gray-50  pt-4">
      <TopNav />
      {/* Content */}

      <div className="max-w-lg md:mx-auto text-sm my-8 mx-2 ">
        {contentDummy.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between  border-2 border-gray-600 rounded-sm mt-4 py-2 px-4"
            >
              <aside>
                <h1 className="font-semibold text-gray-500">{item.title}</h1>
                <p className="text-gray-400">{item.desc}</p>
              </aside>
              <aside>
                <Star stroke="gray" />
              </aside>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;

function TopNav() {
  return (
    <div className="flex justify-between bg-gray-50 px-6 py-1 max-w-lg mx-auto border-b-2 border-gray-300 overflow-y-auto">
      {navItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="flex flex-col items-center text-gray-700 cursor-pointer hover:text-black hover:bg-gray-200 w-25  py-2 md:mx-0 mx-4"
          >
            <Icon size={20} strokeWidth={2} />
            <span className="text-sm mt-1 font-medium">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
