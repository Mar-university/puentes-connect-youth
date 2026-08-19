import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, LifeBuoy } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { temas, rutaPuentes } from "@/lib/informate-temas";
import kamuMini from "@/assets/kamu-mini.png";

export const Route = createFileRoute("/informate/$tema")({
  loader: ({ params }) => {
    const tema = temas.find((t) => t.slug === params.tema);
    if (!tema) throw notFound();
    return { tema };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Tema no disponible — PUENTES" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { tema } = loaderData;
    return {
      meta: [
        { title: `${tema.titulo} — Infórmate · PUENTES` },
        { name: "description", content: tema.descripcion },
        { property: "og:title", content: `${tema.titulo} — PUENTES` },
        { property: "og:description", content: tema.descripcion },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: TemaNoEncontrado,
  component: TemaPage,
});

function TemaNoEncontrado() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-3xl font-extrabold">Este tema aún no existe</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Puedes volver a Infórmate y elegir otro camino.
        </p>
        <Link
          to="/informate"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft"
        >
          Volver a Infórmate
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function TemaPage() {
  const { tema } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="blob-1 absolute -left-24 -top-24 size-80 bg-secondary-soft/60"
          />
          <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
            <Link
              to="/informate"
              className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-primary shadow-soft"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Infórmate
            </Link>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl">
              {tema.titulo}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {tema.descripcion}
            </p>
            {tema.cuidado && (
              <p className="mt-6 w-fit rounded-full bg-accent-soft/70 px-4 py-2 text-sm font-semibold text-accent-foreground">
                Tema sensible · puedes leerlo a tu ritmo
              </p>
            )}
          </div>
        </section>

        <section className="bg-card/60 py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
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
              <p className="rounded-4xl bg-card px-5 py-4 text-base font-semibold text-primary shadow-soft">
                “Estamos preparando este tema con información verificada. Este
                es el camino que recorreremos juntos.”
              </p>
            </div>

            <ol className="mt-10 space-y-4">
              {rutaPuentes.map((r, i) => (
                <li
                  key={r.paso}
                  className="rounded-4xl border border-border/70 bg-card p-6 shadow-soft"
                >
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-display text-sm font-bold text-accent">
                      0{i + 1}
                    </span>
                    <h2 className="font-display text-xl font-bold text-primary">
                      {r.paso}
                    </h2>
                    <p className="text-sm font-semibold">{r.pregunta}</p>
                  </div>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {r.detalle}
                  </p>
                  <p className="mt-3 rounded-2xl bg-cream-deep px-4 py-3 text-sm text-muted-foreground">
                    [Contenido pendiente de elaboración y validación por el
                    equipo PUENTES]
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-4xl border border-border/70 bg-card/70 p-6">
              <h2 className="font-display text-lg font-bold">
                Fuentes y recursos confiables
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>[Fuente oficial pendiente de validación]</li>
                <li>[Servicio o recurso pendiente de validación]</li>
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                PUENTES informa, orienta y conecta. No sustituye a profesionales
                de salud, psicología, servicios de protección, asesoría jurídica
                ni servicios de emergencia.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/informate"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Explorar otros temas
              </Link>
              <a
                href="/#orientacion"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/25 bg-card px-7 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary-soft"
              >
                <LifeBuoy className="size-5" aria-hidden="true" />
                Necesito orientación
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
