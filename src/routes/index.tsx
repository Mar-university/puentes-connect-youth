import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Scale,
  LifeBuoy,
  Compass,
  HeartHandshake,
  Sparkles,
  Leaf,
  Download,
  MessageCircleHeart,
  BookMarked,
  Instagram,
  Backpack,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import kamuHero from "@/assets/kamu-hero.png";
import kamuSit from "@/assets/kamu-sit.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const necesidades = [
  {
    id: "informate",
    icon: BookOpen,
    title: "Infórmate",
    text: "Encuentra información clara para tomar decisiones.",
    tone: "primary",
  },
  {
    id: "derechos",
    icon: Scale,
    title: "Mis derechos",
    text: "Conoce tus derechos y aprende a reconocer cuándo no están siendo respetados.",
    tone: "secondary",
  },
  {
    id: "orientacion",
    icon: LifeBuoy,
    title: "Necesito orientación",
    text: "Encuentra opciones de apoyo y rutas para saber a dónde acudir.",
    tone: "accent",
  },
  {
    id: "proyecto-de-vida",
    icon: Compass,
    title: "Proyecto de vida",
    text: "Explora tus metas, decisiones y posibilidades para el futuro.",
    tone: "secondary",
  },
  {
    id: "agentes",
    icon: HeartHandshake,
    title: "Ser Agente PUENTES",
    text: "Descubre cómo puedes acompañar y generar cambios junto a otros jóvenes.",
    tone: "accent",
  },
  {
    id: "sobre-puentes",
    icon: Leaf,
    title: "Sobre PUENTES",
    text: "Conoce nuestra red y cómo conectamos lo digital con las comunidades.",
    tone: "primary",
  },
] as const;

const toneClasses: Record<string, string> = {
  primary: "bg-primary-soft text-primary",
  secondary: "bg-secondary-soft text-secondary-foreground",
  accent: "bg-accent-soft text-accent-foreground",
};

const flujo = ["Infórmate", "Decide", "Conecta", "Cambia"];
const rutaAgente = ["Aprendo", "Practico", "Acompaño", "Conecto", "Multiplico"];

const recursos = [
  {
    icon: Backpack,
    title: "Kit del Agente PUENTES",
    text: "Materiales para preparar actividades entre pares.",
  },
  {
    icon: BookMarked,
    title: "Historietas",
    text: "Historias breves para conversar sobre temas difíciles.",
  },
  {
    icon: MessageCircleHeart,
    title: "Kamu responde",
    text: "Preguntas frecuentes explicadas en lenguaje sencillo.",
  },
  {
    icon: Download,
    title: "Recursos descargables",
    text: "Guías y materiales para usar sin conexión.",
  },
  {
    icon: Instagram,
    title: "Redes sociales",
    text: "Contenidos cortos hechos con y para jóvenes.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader />

      <main id="inicio">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="blob-1 absolute -left-32 -top-24 size-[26rem] bg-primary-soft/70"
          />
          <div
            aria-hidden="true"
            className="blob-2 absolute -right-24 top-40 size-[20rem] bg-secondary-soft/70"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-primary shadow-soft">
                <Sparkles className="size-4" aria-hidden="true" />
                Red juvenil intercultural
              </span>
              <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                Todo lo que sientes importa.
                <span className="block text-primary">Tu futuro también.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Información clara, derechos, orientación y una red de jóvenes
                dispuestos a construir puentes contigo.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#que-necesitas"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Quiero comenzar
                </a>
                <a
                  href="#orientacion"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/25 bg-card px-7 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary-soft"
                >
                  <LifeBuoy className="size-5" aria-hidden="true" />
                  Necesito orientación
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div
                aria-hidden="true"
                className="blob-1 absolute inset-4 bg-accent-soft"
              />
              <img
                src={kamuHero}
                alt="Kamu, un mono joven y amigable, saluda con la mano"
                width={1024}
                height={1024}
                className="relative w-full"
              />
            </div>
          </div>
        </section>

        {/* QUÉ NECESITAS HOY */}
        <section id="que-necesitas" className="bg-card/60 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              ¿Qué necesitas hoy?
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              No tienes que saber exactamente qué buscar. Empieza por donde
              necesites.
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {necesidades.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex h-full flex-col gap-3 rounded-4xl border border-border/70 bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
                  >
                    <span
                      className={`inline-flex size-12 items-center justify-center rounded-2xl ${toneClasses[item.tone]}`}
                    >
                      <item.icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-bold group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* KAMU */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div
            aria-hidden="true"
            className="blob-2 absolute -left-20 bottom-0 size-72 bg-secondary-soft/60"
          />
          <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[0.8fr_1fr]">
            <img
              src={kamuSit}
              alt="Kamu sentado, con gesto amable"
              loading="lazy"
              width={1024}
              height={1024}
              className="mx-auto w-56 md:w-full"
            />
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                ¡Hola! Soy Kamu.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                No estoy aquí para decirte qué hacer. Estoy aquí para ayudarte a
                encontrar información, conocer tus opciones y saber dónde buscar
                apoyo cuando lo necesites.
              </p>
              <ul className="mt-7 flex flex-wrap gap-3">
                {["Información confiable", "Sin juzgarte", "A tu ritmo"].map(
                  (chip) => (
                    <li
                      key={chip}
                      className="rounded-full bg-card px-5 py-3 text-sm font-semibold text-primary shadow-soft"
                    >
                      {chip}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* QUÉ ES PUENTES */}
        <section id="sobre-puentes" className="bg-cream-deep py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              ¿Qué es PUENTES?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              PUENTES conecta información confiable, participación juvenil y
              recursos de apoyo para que más adolescentes puedan tomar
              decisiones informadas y encontrar acompañamiento cuando lo
              necesiten.
            </p>

            <ol className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              {flujo.map((paso, i) => (
                <li key={paso} className="flex items-center gap-3 sm:flex-1">
                  <span className="flex-1 rounded-4xl bg-card px-5 py-5 text-center font-display text-lg font-bold text-primary shadow-soft">
                    {paso}
                  </span>
                  {i < flujo.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-2xl text-accent sm:-ml-1"
                    >
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* UNA RED, DOS FORMAS DE LLEGAR */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Una red, dos formas de llegar
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Lo digital y lo comunitario se alimentan entre sí.
            </p>

            <div className="mt-10 grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-4xl border border-primary/15 bg-primary-soft/50 p-7">
                <h3 className="font-display text-2xl font-bold text-primary">
                  PUENTES Digital
                </h3>
                <ul className="mt-5 space-y-3 text-base">
                  {[
                    "Web interactiva",
                    "Historietas",
                    "Videos y contenido juvenil",
                    "Recursos descargables",
                    "Redes sociales",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-2 shrink-0 rounded-full bg-primary"
                      />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                aria-hidden="true"
                className="mx-auto flex items-center gap-2 lg:flex-col"
              >
                <span className="h-1 w-10 rounded-full bg-accent lg:h-10 lg:w-1" />
                <span className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">
                  puente
                </span>
                <span className="h-1 w-10 rounded-full bg-accent lg:h-10 lg:w-1" />
              </div>

              <div className="rounded-4xl border border-secondary/25 bg-secondary-soft/60 p-7">
                <h3 className="font-display text-2xl font-bold text-secondary-foreground">
                  PUENTES en comunidad
                </h3>
                <ul className="mt-5 space-y-3 text-base">
                  {[
                    "Agentes juveniles",
                    "Educación entre pares",
                    "Actividades participativas",
                    "Materiales offline",
                    "Conexión con organizaciones y servicios existentes",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-2 shrink-0 rounded-full bg-secondary"
                      />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AGENTES */}
        <section id="agentes" className="bg-card/60 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              ¿Quieres ser parte del cambio?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Los Agentes PUENTES son jóvenes que se preparan para informar,
              escuchar sin juzgar, desarrollar actividades entre pares y conectar
              a otros jóvenes con recursos y servicios de su comunidad.
            </p>

            <ol className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {rutaAgente.map((paso, i) => (
                <li
                  key={paso}
                  className="rounded-4xl border border-border/70 bg-card p-5 shadow-soft"
                >
                  <span className="font-display text-sm font-bold text-accent">
                    0{i + 1}
                  </span>
                  <p className="mt-1 font-display text-lg font-bold">{paso}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <a
                href="#recursos"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Quiero conocer a los Agentes PUENTES
              </a>
              <p className="font-display text-2xl font-extrabold text-primary">
                “Yo también soy PUENTE.”
              </p>
            </div>

            <p className="mt-8 rounded-4xl bg-accent-soft/70 p-5 text-sm leading-relaxed text-accent-foreground">
              Los Agentes PUENTES no reemplazan a psicólogos, profesionales de
              salud ni autoridades. Su rol es informar y conectar con servicios
              existentes.
            </p>
          </div>
        </section>

        {/* RECURSOS */}
        <section id="recursos" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Recursos PUENTES
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              [Enlaces pendientes: cada recurso se conectará a su propia página.]
            </p>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recursos.map((r) => (
                <li
                  key={r.title}
                  className="flex h-full flex-col gap-3 rounded-4xl border border-border/70 bg-card p-6 shadow-soft"
                >
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary-soft text-secondary-foreground">
                    <r.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold">{r.title}</h3>
                  <p className="text-base text-muted-foreground">{r.text}</p>
                  <span className="mt-auto pt-3 text-sm font-semibold text-primary/70">
                    Próximamente
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ORIENTACIÓN / PROYECTO DE VIDA anclas de apoyo */}
        <section
          id="orientacion"
          className="bg-cream-deep py-16 md:py-24"
          aria-labelledby="orientacion-title"
        >
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 id="orientacion-title" className="text-3xl font-extrabold sm:text-4xl">
              ¿Necesitas orientación?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              PUENTES te ayuda a entender tus opciones y a saber a dónde acudir.
              No somos un servicio médico, psicológico, jurídico ni de
              emergencia.
            </p>
            <p className="mx-auto mt-6 max-w-2xl rounded-4xl bg-card p-6 text-base shadow-soft">
              [Espacio reservado para rutas y servicios oficiales de atención,
              pendientes de validación.]
            </p>
          </div>
        </section>

        <section id="proyecto-de-vida" className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Proyecto de vida
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Explora tus metas, decisiones y posibilidades para el futuro.
              [Contenidos en construcción.]
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
