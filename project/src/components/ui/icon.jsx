import { icons } from "lucide-react";

export const Icon = ({
  name,
  color,
  size,
  className,
}) => {

  return <LucideIcon color={color} size={size} className={className} />;
};