"use client";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HeroSearchFieldProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  options: readonly string[];
  className?: string;
}

export function HeroSearchField({
  label,
  value,
  onValueChange,
  options,
  className = "",
}: HeroSearchFieldProps) {
  return (
    <Select
      value={value}
      onValueChange={(next) => {
        if (next) onValueChange(next);
      }}
    >
      <SelectTrigger
        className={`h-auto w-full lg:min-w-44 items-start gap-1 border-none bg-transparent p-0 outline-none focus-visible:ring-0 [&>svg]:hidden ${className}`}
      >
        <div className="flex w-full flex-col gap-1">
          <span className="text-sm text-muted-foreground text-start">{label}</span>
          <div className="flex w-full items-center justify-between gap-2">
            <SelectValue className="text-base font-medium text-black" />
            <Image
              src="/images/icon-arrow-down.svg"
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
      </SelectTrigger>
      <SelectContent align="start">
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
