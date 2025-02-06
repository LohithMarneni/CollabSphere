import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { Badge } from "../ui/badge";



const benefitList = [
    {
      icon: "Blocks",
      title: "Build Brand Trust",
      description:
        "Connect users with volunteers in a reliable system, fostering trust and credibility within the community.",
    },
    {
      icon: "LineChart",
      title: "More Requests Fulfilled",
      description:
        "Increase the number of successfully completed requests by efficiently matching users with willing volunteers.",
    },
    {
      icon: "Wallet",
      title: "Efficient Resource Allocation",
      description:
        "Ensure that available volunteers are utilized effectively, minimizing delays and optimizing response times.",
    },
    {
      icon: "Sparkle",
      title: "Community Growth",
      description:
        "Encourage more people to participate, leading to an expanding network of support and assistance.",
    },
  ];
  

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container mx-auto py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2  className="text-2xl text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Shortcut to Success
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            ducimus reprehenderit architecto rerum similique facere odit
            deleniti necessitatibus quo quae.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};