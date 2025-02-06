import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export const Hero2 = () => (
  <div className="w-full px-20 py-5">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="flex gap-4 flex-col mt-20">
          <div>
            <Badge variant="outline">We&apos;re live!</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-5xl max-w-lg tracking-tighter text-left font-regular">
            Beauty services at your doorstep
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Link to={"/login"}>
            
            <Button  size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>
            </Link>
            <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
  <div className="bg-muted rounded-md aspect-square"></div>
  <div className="bg-red-300 rounded-md row-span-1"></div>
  <div className="bg-red-300 rounded-md row-span-1"></div>
  <div className="bg-muted rounded-md aspect-square"></div>
</div>



      </div>
    </div>
  </div>
);