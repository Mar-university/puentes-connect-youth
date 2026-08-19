import kamuMini from "@/assets/kamu-mini.png";

const columns = [
  {
    title: "Fuentes",
    items: ["[Pendiente de validación]", "[Pendiente de validación]"],
  },
  {
    title: "Créditos",
    items: ["[Equipo por definir]", "[Ilustración: Kamu]"],
  },
  {
    title: "Contacto",
    items: ["[Correo por definir]", "[Ubicación por definir]"],
  },
  {
    title: "Redes sociales",
    items: ["[Instagram]", "[TikTok]", "[YouTube]"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <img
            src={kamuMini}
            alt="Kamu, la mascota de PUENTES"
            loading="lazy"
            width={512}
            height={512}
            className="size-16 rounded-full bg-primary-foreground/15 p-1.5"
          />
          <div>
            <p className="font-display text-2xl font-extrabold">PUENTES</p>
            <p className="text-sm opacity-80">Red Juvenil Intercultural</p>
            <p className="mt-3 font-display text-lg font-semibold text-accent">
              Infórmate. Decide. Conecta. Cambia.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide opacity-90">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm opacity-75">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-primary-foreground/20 pt-6 text-xs leading-relaxed opacity-75">
          PUENTES es una red de información y educación entre pares. No es un
          servicio médico, psicológico, jurídico ni de emergencia. Ante una
          situación de riesgo, acude a los servicios oficiales de tu comunidad.
          [Rutas y servicios oficiales pendientes de validación]
        </p>
      </div>
    </footer>
  );
}
