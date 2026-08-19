import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sprout,
  ShieldCheck,
  HeartPulse,
  Handshake,
  ShieldAlert,
  ArrowRight,
  Scale,
  LifeBuoy,
  Compass,
  BookOpen,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { temas, rutaPuentes } from "@/lib/informate-temas";
import kamuSit from "@/assets/kamu-sit.png";
import kamuMini from "@/assets/kamu-mini.png";

export const Route = createFileRoute("/informate/")({
  head: () => ({
    meta: [
      { title: "Infórmate — PUENTES, Red Juvenil Intercultural" },
      {
        name: "description",
        content:
          "Información clara y confiable para jóvenes sobre salud, derechos, relaciones y protección. Explora a tu ritmo con la Ruta PUENTES.",
      },
      { property: "og:title", content: "Infórmate — PUENTES" },
      {
        property: "og:description",
        content:
          "Temas explicados con claridad para tomar decisiones informadas. Comprendo, Reconozco, Decido, Actúo, Conecto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Informate,
});

const iconos = {
  sprout: Sprout,
  "shield-check": ShieldCheck,
  "heart-pulse": HeartPulse,
  handshake: Handshake,
  "shield-alert": ShieldAlert,
};

const toneClasses: Record<string, string> = {
  primary: "bg-primary-soft text-primary",
  secondary: "bg-secondary-soft text-secondary-foreground",
  accent: "bg-accent-soft text-accent-foreground",
};

function Informate() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />

      <main>
        {/* INTRO */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="blob-1 absolute -left-28 -top-28 size-[24rem] bg-primary-soft/70"
          />
          <div
            aria-hidden="true"
            className="blob-2 absolute -right-24 top-32 size-[18rem] bg-accent-soft/70"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-primary shadow-soft"
              >
                <BookOpen className="size-4" aria-hidden="true" />
                Volver al inicio
              </Link>
              <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl">
                Infórmate
              </h1>
              <p className="mt-4 max-w-xl text-xl font-semibold text-primary">
                Entender lo que vivimos también nos ayuda a tomar mejores
                decisiones.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Aquí encontrarás información clara y confiable sobre temas que
                pueden generar dudas. Puedes explorar a tu ritmo y elegir por
                dónde empezar.
              </p>
            </div>

            <div className="relative mx-auto flex w-full max-w-sm flex-col items-center">
              <div aria-hidden="true" className="blob-2 absolute inset-6 bg-secondary-soft/70" />
              <img
                src={kamuSit}
                alt="Kamu, la mascota de PUENTES, sentado con gesto amable"
                width={1024}
                height={1024}
                className="relative w-48 sm:w-60"
              />
              <p className="relative -mt-2 rounded-4xl bg-card px-5 py-4 text-center text-base font-semibold text-primary shadow-soft">
                “No tienes que saberlo todo. Puedes empezar por una pregunta. 💜”
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORÍAS */}
        <section className="bg-card/60 py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Elige un tema
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Cinco caminos para empezar. Ninguno es obligatorio.
            </p>

            <ul className="mt-9 grid gap-5 sm:grid-cols-2">
              {temas.map((tema) => {
                const Icono = iconos[tema.icono];
                return (
                  <li key={tema.slug} className={tema.cuidado ? "sm:col-span-2" : undefined}>
                    <Link
                      to="/informate/$tema"
                      params={{ tema: tema.slug }}
                      className={`group flex h-full flex-col gap-3 rounded-4xl border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1 sm:p-7 ${
                        tema.cuidado
                          ? "border-accent/40 bg-accent-soft/25"
                          : "border-border/70"
                      }`}
                    >
                      <span
                        className={`inline-flex size-14 items-center justify-center rounded-2xl ${toneClasses[tema.tone]}`}
                      >
                        <Icono className="size-7" aria-hidden="true" />
                      </span>
                      {tema.cuidado && (
                        <span className="w-fit rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-foreground">
                          Tema sensible · léelo cuando te sientas listo/a
                        </span>
                      )}
                      <h3 className="text-2xl font-bold group-hover:text-primary">
                        {tema.titulo}
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {tema.descripcion}
                      </p>
                      <span className="mt-auto inline-flex w-fit items-center gap-2 pt-4 text-base font-semibold text-primary">
                        Quiero conocer más
                        <ArrowRight
                          className="size-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* RUTA PUENTES */}
        <section className="relative overflow-hidden bg-cream-deep py-14 md:py-20">
          <div
            aria-hidden="true"
            className="blob-1 absolute -right-24 bottom-0 size-72 bg-primary-soft/60"
          />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex items-start gap-4">
              <img
                src={kamuMini}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={512}
                height={512}
                className="size-12 shrink-0 rounded-full bg-secondary-soft p-1"
              />
              <div>
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  Así se recorre cada tema
                </h2>
                <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
                  Cada página temática sigue la Ruta PUENTES: no solo entrega
                  información, también te acompaña hasta el paso siguiente.
                </p>
              </div>
            </div>

            <ol className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {rutaPuentes.map((r, i) => (
                <li
                  key={r.paso}
                  className="rounded-4xl border border-border/70 bg-card p-5 shadow-soft"
                >
                  <span className="font-display text-sm font-bold text-accent">
                    0{i + 1}
                  </span>
                  <p className="mt-1 font-display text-lg font-bold text-primary">
                    {r.paso}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{r.pregunta}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.detalle}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* NO ENCONTRASTE */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              ¿No encontraste lo que buscabas?
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              <li>
                <a
                  href="/#derechos"
                  className="flex h-full flex-col gap-2 rounded-4xl border border-border/70 bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
                >
                  <Scale className="size-6 text-primary" aria-hidden="true" />
                  <span className="text-lg font-bold">Conoce tus derechos</span>
                  <span className="text-sm text-muted-foreground">
                    Qué te corresponde y cómo reconocer cuándo no se respeta.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/#orientacion"
                  className="flex h-full flex-col gap-2 rounded-4xl border border-accent/40 bg-accent-soft/40 p-6 shadow-soft transition-transform hover:-translate-y-1"
                >
                  <LifeBuoy className="size-6 text-accent-foreground" aria-hidden="true" />
                  <span className="text-lg font-bold">Necesito orientación</span>
                  <span className="text-sm text-accent-foreground/80">
                    Opciones de apoyo y rutas para saber a dónde acudir.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#temas"
                  className="flex h-full flex-col gap-2 rounded-4xl border border-border/70 bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
                >
                  <Compass className="size-6 text-secondary-foreground" aria-hidden="true" />
                  <span className="text-lg font-bold">Explorar otros temas</span>
                  <span className="text-sm text-muted-foreground">
                    Vuelve a las cinco categorías y empieza por otra puerta.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* FUENTES */}
        <section className="pb-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="rounded-4xl border border-border/70 bg-card/70 p-6">
              <h2 className="font-display text-lg font-bold">
                Fuentes y recursos confiables
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>[Fuente oficial pendiente de validación por el equipo PUENTES]</li>
                <li>[Fuente oficial pendiente de validación por el equipo PUENTES]</li>
                <li>[Recurso o servicio pendiente de validación]</li>
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                PUENTES informa, orienta y conecta. No sustituye a profesionales
                de salud, psicología, servicios de protección, asesoría jurídica
                ni servicios de emergencia.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
