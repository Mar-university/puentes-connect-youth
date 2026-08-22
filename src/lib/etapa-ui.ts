import {
  BookOpen,
  Compass,
  Eye,
  Footprints,
  HeartHandshake,
} from "lucide-react";

import type { Etapa } from "@/lib/informate-temas";

export const etapaIconos: Record<Etapa["icono"], typeof BookOpen> = {
  "book-open": BookOpen,
  eye: Eye,
  compass: Compass,
  footprints: Footprints,
  "heart-handshake": HeartHandshake,
};

export const etapaTonos: Record<
  Etapa["tone"],
  { chip: string; icono: string; numero: string }
> = {
  primary: {
    chip: "bg-primary-soft text-primary",
    icono: "bg-primary text-primary-foreground",
    numero: "text-primary",
  },
  secondary: {
    chip: "bg-secondary-soft text-secondary-foreground",
    icono: "bg-secondary text-secondary-foreground",
    numero: "text-secondary",
  },
  accent: {
    chip: "bg-accent-soft text-accent-foreground",
    icono: "bg-accent text-accent-foreground",
    numero: "text-accent",
  },
};
