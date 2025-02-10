import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ProfileDropdown } from "../ui/profile-dropdown";
// import Link from "next/link";

export const Header1 = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      items: [
        { title: "Reports", href: "/reports" },
        { title: "Statistics", href: "/statistics" },
        { title: "Dashboards", href: "/dashboards" },
        { title: "Recordings", href: "/recordings" },
      ],
    },
    {
      title: "Company",
      description: "Learn more about our journey and values.",
      items: [
        { title: "About us", href: "/about" },
        { title: "Fundraising", href: "/fundraising" },
        { title: "Investors", href: "/investors" },
        { title: "Contact us", href: "/contact" },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full z-40 py-5 top-0 left-0 bg-background">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-4">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.href ? (
                  <NavigationMenuLink asChild>
                    <a href={item.href}>
                      <Button variant="ghost" className="text-lg">
                        {item.title}
                      </Button>
                    </a>
                  </NavigationMenuLink>
                ) : (
                  <>
                    <NavigationMenuTrigger className="text-lg">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="!w-[450px] p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-lg font-medium">{item.title}</p>
                          <p className="text-muted-foreground text-base">
                            {item.description}
                          </p>
                          <Button size="sm" className="mt-4">
                            Book a call today
                          </Button>
                        </div>
                        <div className="flex flex-col">
                          {item.items?.map((subItem) => (
                            <NavigationMenuLink asChild key={subItem.title}>
                              <a
                                href={subItem.href}
                                className="flex justify-between items-center hover:bg-muted py-2 px-4 rounded text-base"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </a>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
  
      {/* Logo */}
      <div className="flex justify-center">
        <p className="font-bold text-[2rem] ">C</p>
        <p className="font-bold text-[2rem] ">ollab</p>
        <p className="font-bold text-[2rem]">S</p>
        <p className="font-bold text-[2rem]">phere</p>
      </div>
  
      {/* Right Buttons */}
      <div className="hidden lg:flex gap-4">
        <Button variant="ghost" className="text-lg">
          Book a demo
        </Button>
        <div className="border-r"></div>
        <Link to={"/user/login"} >
        <Button variant="outline" className="text-lg">
          Sign in
        </Button>
        </Link>
        <Button className="text-lg"onClick={() => Navigate("/user/register")}>Get started</Button>
        <ProfileDropdown />
      </div>
    </div>
  </header>
  
  );
};
