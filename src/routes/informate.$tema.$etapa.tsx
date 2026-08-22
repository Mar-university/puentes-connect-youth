import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  LifeBuoy,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { temas, rutaPuentes, etapaPorSlug } from "@/lib/informate-temas";
import { etapaIconos, etapaTonos } from "@/routes/informate.$tema";
import kamuMini from "@/assets/kamu-mini.png";

export const Route = createFileRoute("/informate/$tema/$etapa")({
  loader: ({ params }) => {
    const tema = temas.find((t) => t.slug === params.tema);
    const indice = rutaPuentes.findIndex((e) => e.slug === params.etapa);
    if (!tema || indice === -1) throw notFound();
    return {
      tema,
      etapa: rutaPuentes[indice],
      indice,
      anterior: indice > 0 ? rutaPuentes[indice - 1] : null,
      siguiente:
        indice < rutaPuentes.length - 1 ? rutaPuentes[indice + 1] : null,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Página no disponible — PUENTES" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { tema, etapa } = loaderData;
    const titulo = `${etapa.paso} · ${tema.titulo} — PUENTES`;
    const descripcion = `${etapa.pregunta} ${etapa.descripcion}`;
    return {
      meta: [
        { title: titulo },
        { name: "description", content: descripcion },
        { property: "og:title", content: titulo },
        { property: "og:description", content: descripcion },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: EtapaNoEncontrada,
  component: EtapaPage,
});

function EtapaNoEncontrada() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-3xl font-extrabold">Esta página aún no existe</h1>
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

function EtapaPage() {
  const { tema, etapa, indice, anterior, siguiente } = Route.useLoaderData();
  const Icono = etapaIconos[etapa.icono];
  const tono = etapaTonos[etapa.tone];

  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="blob-2 absolute -right-24 -top-24 size-80 bg-primary-soft/60"
          />
          <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-16">
            <Link
              to="/informate/$tema"
              params={{ tema: tema.slug }}
              className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-primary shadow-soft"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Volver al tema: {tema.titulo}
            </Link>

            <div className="mt-8 flex items-center gap-4">
              <span
                className={`flex size-14 shrink-0 items-center justify-center rounded-3xl ${tono.icono}`}
              >
                <Icono className="size-7" aria-hidden="true" />
              </span>
              <div>
                <p
                  className={`font-display text-sm font-bold uppercase tracking-[0.18em] ${tono.numero}`}
                >
                  Etapa 0{indice + 1} · Ruta PUENTES
                </p>
                <h1 className="mt-1 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-wide sm:text-5xl">
                  {etapa.paso}
                </h1>
              </div>
            </div>

            <p className="mt-4 text-xl font-bold text-primary">
              {etapa.pregunta}
            </p>
            <p className="mt-2 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {etapa.descripcion}
            </p>

            <div className="mt-8 flex items-start gap-4">
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
                “Este espacio está en construcción. Muy pronto encontrarás aquí
                información verificada por el equipo PUENTES.”
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card/60 py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-4xl border border-border/70 bg-card p-8 shadow-soft md:p-12">
              <h2 className="font-display text-2xl font-extrabold">
                Contenido de “{etapa.paso}”
              </h2>
              <p className="mt-4 rounded-2xl bg-cream-deep px-4 py-3 text-sm text-muted-foreground">
                [Contenido pendiente de elaboración y validación por el equipo
                PUENTES]
              </p>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                PUENTES informa, orienta y conecta. No sustituye a profesionales
                de salud, psicología, servicios de protección, asesoría jurídica
                ni servicios de emergencia.
              </p>
            </div>

            <nav aria-label="Etapas de la Ruta PUENTES" className="mt-10">
              <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Otras etapas de esta ruta
              </p>
              <ol className="mt-4 flex flex-wrap gap-2">
                {rutaPuentes.map((e, i) => {
                  const activa = e.slug === etapa.slug;
                  return (
                    <li key={e.slug}>
                      <Link
                        to="/informate/$tema/$etapa"
                        params={{ tema: tema.slug, etapa: e.slug }}
                        aria-current={activa ? "page" : undefined}
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                          activa
                            ? "bg-primary text-primary-foreground shadow-soft"
                            : "bg-card text-primary shadow-soft hover:bg-primary-soft"
                        }`}
                      >
                        <span className="font-display">0{i + 1}</span>
                        {e.paso}
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </nav>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
              {anterior ? (
                <Link
                  to="/informate/$tema/$etapa"
                  params={{ tema: tema.slug, etapa: anterior.slug }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/25 bg-card px-6 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary-soft"
                >
                  <ArrowLeft className="size-5" aria-hidden="true" />
                  Anterior: {anterior.paso}
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}
              {siguiente && (
                <Link
                  to="/informate/$tema/$etapa"
                  params={{ tema: tema.slug, etapa: siguiente.slug }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Siguiente: {siguiente.paso}
                  <ArrowRight className="size-5" aria-hidden="true" />
                </Link>
              )}
            </div>

            <div className="mt-10 rounded-4xl border-2 border-accent/40 bg-accent-soft/60 p-6">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-display text-lg font-bold">
                    ¿Necesitas orientación ahora?
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    No tienes que esperar a terminar la ruta. Este acceso está
                    siempre disponible.
                  </p>
                </div>
                <a
                  href="/#orientacion"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  <LifeBuoy className="size-5" aria-hidden="true" />
                  Necesito orientación
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
