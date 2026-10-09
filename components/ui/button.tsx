"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const MotionLink = motion.create(Link);

const variants = {
  primary:
    "bg-violet text-white shadow-[0_12px_30px_-16px_rgba(108,59,255,0.95)] hover:bg-violet-deep",
  secondary:
    "border border-line bg-white text-ink hover:border-violet/35 hover:bg-cream",
  ghost: "text-ink hover:bg-white",
  sunshine: "bg-sunshine text-ink hover:bg-[#f2c34d]",
  inverse: "bg-white text-ink hover:bg-cream",
} as const;

const sizes = {
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-[15px]",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl text-center font-semibold tracking-tight transition-colors disabled:cursor-not-allowed disabled:opacity-50";

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkProps = Common & {
  href: string;
  external?: boolean;
};

type ButtonProps = Common & {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
};

export function Button(props: LinkProps | ButtonProps) {
  const reduce = useReducedMotion();
  const variant = props.variant ?? "primary";
  const size = props.size ?? "lg";
  const className = cn(base, variants[variant], sizes[size], props.className);
  const disabled = "href" in props ? false : props.disabled;
  const interaction =
    reduce || disabled
      ? {}
      : {
          whileHover: { y: -2 },
          whileTap: { scale: 0.98 },
          transition: { type: "spring" as const, stiffness: 420, damping: 24 },
        };

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <motion.a
          href={props.href}
          className={className}
          target="_blank"
          rel="noreferrer"
          {...interaction}
        >
          {props.children}
        </motion.a>
      );
    }
    return (
      <MotionLink href={props.href} className={className} {...interaction}>
        {props.children}
      </MotionLink>
    );
  }

  const buttonProps = props as ButtonProps;

  return (
    <motion.button
      type={buttonProps.type ?? "button"}
      className={className}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      aria-expanded={buttonProps["aria-expanded"]}
      aria-controls={buttonProps["aria-controls"]}
      {...interaction}
    >
      {props.children}
    </motion.button>
  );
}
