import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, LifeBuoy } from "lucide-react";
import kamuMini from "@/assets/kamu-mini.png";

const navItems = [
  { label: "Infórmate", href: "/informate" },
  { label: "Mis derechos", href: "/#derechos" },
  { label: "Orientación", href: "/#orientacion" },
  { label: "Proyecto de vida", href: "/#proyecto-de-vida" },
  { label: "Agentes PUENTES", href: "/#agentes" },
  { label: "Sobre la red", href: "/#sobre-puentes" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <a href="/#inicio" className="flex items-center gap-3 rounded-2xl px-1 py-1">
          <img
            src={kamuMini}
            alt=""
            aria-hidden="true"
            width={512}
            height={512}
            className="size-10 rounded-full bg-secondary-soft p-1"
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-extrabold tracking-tight text-primary">
              PUENTES
            </span>
            <span className="block text-[0.7rem] font-medium text-muted-foreground">
              Red Juvenil Intercultural
            </span>
          </span>
        </a>

        <nav aria-label="Principal" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="/#orientacion"
          className="ml-auto hidden items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-flex lg:ml-0"
        >
          <LifeBuoy className="size-4" aria-hidden="true" />
          Necesito orientación
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          className="ml-auto inline-flex size-11 items-center justify-center rounded-2xl border border-border bg-card text-primary sm:ml-0 lg:hidden"
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}

        </button>
      </div>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Principal móvil"
          className="border-t border-border/60 bg-cream lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium hover:bg-primary-soft hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="sm:hidden">
              <a
                href="/#orientacion"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3 text-base font-semibold text-accent-foreground"
              >
                <LifeBuoy className="size-4" aria-hidden="true" />
                Necesito orientación
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
