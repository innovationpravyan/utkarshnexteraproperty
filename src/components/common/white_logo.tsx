import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <img src="/logo/white_logo.png" className={cn("w-auto h-10", className)}></img>
  );
}
