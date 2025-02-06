
import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
// import { icons } from "lucide-react";

const services= [
  {
    icon: "Crown",
    name: "Pet-Caring",
  },
  {
    icon: "Vegan",
    name: "Day-Caring",
  },
  {
    icon: "Ghost",
    name: "House-Cleaning",
  },
  {
    icon: "Crown",
    name: "Pet-Caring",
  },
  {
    icon: "Vegan",
    name: "Day-Caring",
  },
  {
    icon: "Ghost",
    name: "House-Cleaning",
  },
  
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%]  mx-auto pb-24 sm:pb-32 md:pt-20">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Our Platinum Services
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {services.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};