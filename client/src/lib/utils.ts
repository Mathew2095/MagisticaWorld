import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIconComponent(iconName: string) {
  const iconMap: Record<string, React.ReactNode> = {
    magic: React.createElement("i", { className: "fas fa-magic" }),
    users: React.createElement("i", { className: "fas fa-users" }),
    "map-marker": React.createElement("i", { className: "fas fa-map-marked-alt" }),
    book: React.createElement("i", { className: "fas fa-book" }),
    shield: React.createElement("i", { className: "fas fa-shield-alt" }),
    wand: React.createElement("i", { className: "fas fa-wand-magic-sparkles" }),
    potion: React.createElement("i", { className: "fas fa-flask" }),
    scroll: React.createElement("i", { className: "fas fa-scroll" }),
    dragon: React.createElement("i", { className: "fas fa-dragon" }),
    castle: React.createElement("i", { className: "fas fa-castle" }),
  };

  return iconMap[iconName] || React.createElement("i", { className: "fas fa-sparkles" });
}