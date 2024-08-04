import { cn } from "@/lib/utils";
import {
  Button2,
  type Button2Props as BaseButtonProps,
} from "@/components/ui/Buttons/button-2";
import { ClipboardPaste } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
} & BaseButtonProps;

//======================================
export const btnVariant1 = ({
  children,
  Icon,
  ...rest
}: ButtonProps & { Icon: React.ReactNode }) => {
  return (
    <Button2
      {...rest}
      className={cn(
        "group relative overflow-hidden border shadow",
        // light mode
        "border-zinc-300 bg-zinc-50 text-zinc-800",
        // dark mode
        "dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100",
        rest.className,
      )}
    >
      <span className="duration-[600ms] ease-[cubic-bezier(0.50,0.20,0,1)] absolute inset-0 flex size-full -translate-x-full items-center justify-center rounded-sm bg-zinc-800 text-zinc-100 group-hover:translate-x-0 dark:bg-zinc-100 dark:text-zinc-800">
        {Icon}
      </span>
      <span className="ease absolute flex h-full w-full transform items-center justify-center transition-all duration-500 group-hover:translate-x-full">
        {children}
      </span>
      <span className="invisible relative">{children}</span>
    </Button2>
  );
};
