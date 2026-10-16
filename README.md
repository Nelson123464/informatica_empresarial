# Quesos de Altura S.A.C. — Sitio web

Sitio web interactivo de **Quesos de Altura S.A.C.**, empresa artesanal de quesos de Puno (Perú), a 3.800 m s. n. m. El proyecto forma parte del curso **Informática Empresarial** de la Universidad Nacional del Altiplano – Puno (2026).

Web publicada: https://quesos-de-altura.lovable.app

## Qué incluye

- **Inicio** con catálogo, recomendador de quesos según el paladar y solicitud de cata por WhatsApp.
- **Nuestros quesos** con filtros por intensidad (tradicional, suave, intenso).
- **Nosotros**, **Nuestro origen**, **Preguntas frecuentes**, **Contacto**, **Proyecto empresarial** y **Privacidad**.
- El formulario no guarda datos: solo prepara el mensaje de WhatsApp cuando la persona lo confirma.
- Fotografías de producto y logo incluidos dentro del repositorio.

## Tecnologías

| Capa | Uso |
| --- | --- |
| React 19 + TypeScript | interfaz |
| TanStack Start (Vite) | enrutado y renderizado |
| Tailwind CSS v4 | estilos con variables de diseño |
| Vitest | pruebas de la información de los quesos |

## Cómo ejecutarlo

Se necesita [Bun](https://bun.sh) (o Node.js 20+ con npm).

```sh
bun install
bun run dev        # abre la web en modo desarrollo
bun run build      # genera la versión para publicar
bunx vitest run    # ejecuta las pruebas
```

Con npm: `npm install` y luego `npm run dev`.

## Estructura

```text
src/
├── assets/            logo y fotografías de producto
├── components/quesos/  componentes de la interfaz y las páginas
├── lib/cheeses.ts     datos de los quesos, precios y contacto
├── routes/            una archivo por cada página (/ /quesos /nosotros ...)
└── styles.css         paleta, tipografías y estilos globales
public/
└── proyecto-quesos-de-altura.docx   documento del proyecto empresarial
```

## Contenido y datos

La empresa, los precios, las proyecciones y las cifras del plan de negocio provienen del documento
proporcionado para el curso y se presentan como **información referencial de un proyecto académico**,
no como resultados operativos. El sitio no procesa pagos ni almacena datos personales.

## Autor

Nelson Amell Yana Mamani — Universidad Nacional del Altiplano, Puno.
