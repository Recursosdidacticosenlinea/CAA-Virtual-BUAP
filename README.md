# CAA English Practice

Sitio web de práctica autónoma de inglés (A1–C2) del CAA Virtual, BUAP.
Todo el contenido para alumnos está en inglés.

## Qué hay en esta carpeta

| Carpeta / archivo | Qué es |
| --- | --- |
| `index.html` | Página principal con todas las unidades, filtros por nivel y buscador. |
| `assets/unit.js`, `assets/unit.css` | La plantilla común: dibuja cualquier unidad a partir de su `data.js`. |
| `assets/config.js` | Ajustes del sitio: dirección para recibir los textos de writing y la plataforma de speaking. |
| Una carpeta por unidad (48 en total) | Cada unidad completa: `index.html` + `data.js`. 8 unidades por nivel (A1, A2, B1, B2, C1, C2). |
| `_template/` | Copia de una unidad para crear temas nuevos. |
| `tools/writing-collector.gs` | Script de Google para recibir los textos de writing en una hoja de cálculo. |

Cada unidad sigue los mismos 5 pasos: Presentation → Objectives → Explanation → Practice (Listening, Reading, Writing, Speaking) → Self-assessment.

## 1. Publicar en GitHub Pages

1. Crea un repositorio público en github.com, por ejemplo `caa-english`.
2. Sube todo el contenido de esta carpeta (no la carpeta en sí): **Add file → Upload files**.
3. **Settings → Pages → Branch: `main`, carpeta `/ (root)` → Save.**
4. En 1–2 minutos el sitio queda en `https://TU-USUARIO.github.io/caa-english/`.
5. En Google Sites: **Insertar → Insertar → Por URL**, y pega esa dirección.

Con Claude Code: abre esta carpeta y pídele *"publica este sitio en GitHub Pages"*. Las instrucciones para Claude Code están en `CLAUDE.md`.

## 2. Recibir los textos de writing

Sin configurar nada, el alumno descarga su texto y lo entrega al asesor.
Para recibirlos automáticamente en una hoja de Google, sigue los pasos que vienen al inicio de `tools/writing-collector.gs` y pega la URL en `assets/config.js`.

## 3. Speaking

La actividad 1 de speaking es "Listen and repeat": el alumno escucha 6 oraciones cortas, las repite y el navegador le da un porcentaje (70% para aprobar). Funciona en Chrome y Edge. La actividad 2 es la grabación individual (evidencia).

Los alumnos graban en la página y descargan su audio para subirlo a la plataforma del curso.
En `assets/config.js` escribe el nombre y el enlace de la plataforma (`speakingPlatformName`, `speakingPlatformUrl`).

## 4. Crear una unidad nueva

1. Copia la carpeta `_template` y cámbiale el nombre (sin espacios ni acentos), por ejemplo `at-the-doctor`.
2. Edita `data.js`: cambia `slug` por el nombre de la carpeta y reemplaza el contenido.
3. Agrega una línea a la lista `UNITS` en `index.html`.

Tipos de actividad disponibles: `match`, `sort`, `gap`, `tiles`, `rewrite`, `tf`, `write`, `speak`. Hay ejemplos de todos en las unidades nuevas.

## Notas

- Los audios usan las voces del navegador. Cada personaje recibe voz de mujer u hombre según su nombre (lista `SPEAKERS` en `assets/unit.js`). Para un personaje nuevo, agrega su nombre a esa lista o pon en su `data.js`: `speakers: { "Nombre": "f" }` (f = mujer, m = hombre). Las voces más naturales están en Microsoft Edge y Google Chrome.
- Para usar grabaciones reales, guarda un `.mp3` en la carpeta de la unidad y agrega `audio: "archivo.mp3"` en `presentation` o en `skills.listening` del `data.js`.
- El progreso y la autoevaluación se guardan solo en el navegador del alumno. No se piden cuentas ni datos personales, salvo nombre y grupo al enviar un texto.
- La grabación de voz necesita que el sitio esté en `https://` (GitHub Pages lo está) y que el alumno permita el micrófono.
