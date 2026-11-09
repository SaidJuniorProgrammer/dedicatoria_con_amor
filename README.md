# De Mateo Para Laura

Una aplicación web interactiva, moderna y romántica construida con enfoque **Mobile-First** para Laura, con React, Vite, Tailwind CSS, Lucide React y animaciones UI/UX.

---

## Características Principales

1. **Estado 1: Pantalla de Bienvenida (Sobre Cerrado)**
   - Tipografía Serif italiana ("Playfair Display") con el nombre *Laura*.
   - Ilustración interactiva de sobre con solapas en tonos turquesa y sello de corazón 3D con resplandor.
   - Apertura con transición fluida y reproducción automática de música en bucle.
   - Botón flotante discreto (`Volume2` / `VolumeX`) para activar o silenciar el sonido en cualquier momento.

2. **Estado 2: Contenido Principal (Scroll Vertical)**
   - **Sección 1:** Encabezado "Mateo & Laura" + Primer marco Polaroid.
   - **Sección 2:** Contador en tiempo real desde el **10 de septiembre de 2026** (meses, días, horas, minutos y segundos).
   - **Sección 3:** Segundo marco Polaroid.
   - **Sección 4:** Carta privada interactiva ("Holi mi Patita...") con estados abrir/cerrar y firma con detalles íntimos.
   - **Sección 5:** Tercer marco Polaroid.
   - **Sección 6:** Lista romántica "Lo que más amo de Laura".
   - **Sección 7:** Cuarto y quinto marco Polaroid.
   - **Sección 8:** "Nuestra lista" (Cosas que quiero hacer contigo).
   - **Sección 9:** "Nuestros vales de amor" interactivos con sello de canje y confeti.
   - **Sección 10:** La Ruleta de Citas (6 opciones interactivas) + Botón "No" que huye al intentar tocarlo + Botón "¡Sí, acepto!" con explosión de confeti y confirmación estilo ticket.
   - **Partículas de fondo:** Corazones cian (`Heart` de Lucide) flotando suavemente.
   - **Cero emojis de texto:** Toda la iconografía es 100% SVG nítido con `lucide-react`.

---

## Cómo personalizar las fotos y la música

El archivo [`src/data/mediaBase64.js`](src/data/mediaBase64.js) contiene todos los recursos multimedia:

### 1. Cambiar la Canción (`AUDIO_BASE64`)
1. Elige la canción especial para Laura en formato `.mp3`.
2. Conviértela a Base64 (por ejemplo usando herramientas web seguras como [base64.guru](https://base64.guru/converter/encode/audio/mp3)).
3. Pega la cadena en `AUDIO_BASE64` con el formato:
   ```javascript
   export const AUDIO_BASE64 = "data:audio/mp3;base64,TU_CADENA_AQUI...";
   ```

### 2. Cambiar las 5 Fotos (`PHOTOS_BASE64`)
1. Selecciona 5 fotos de ustedes dos.
2. Conviértelas a Base64 (JPG o PNG).
3. Reemplaza cada posición del arreglo `PHOTOS_BASE64[0]` al `PHOTOS_BASE64[4]` con tu cadena:
   ```javascript
   export const PHOTOS_BASE64 = [
     "data:image/jpeg;base64,...", // Foto 1 (Portada)
     "data:image/jpeg;base64,...", // Foto 2 (Después del contador)
     "data:image/jpeg;base64,...", // Foto 3 (Después de la carta)
     "data:image/jpeg;base64,...", // Foto 4 (Antes de Nuestra Lista)
     "data:image/jpeg;base64,...", // Foto 5 (Antes de Nuestra Lista)
   ];
   ```

---

## Comandos del Proyecto

- **Iniciar servidor de desarrollo:**
  ```bash
  npm run dev
  ```
- **Compilar para producción:**
  ```bash
  npm run build
  ```
- **Previsualizar compilación localmente:**
  ```bash
  npm run preview
  ```

---

## Despliegue en Vercel

El proyecto incluye el archivo [`vercel.json`](vercel.json) listo para Vercel:
1. Sube este repositorio a GitHub / GitLab.
2. Importa el repositorio en [Vercel](https://vercel.com).
3. Vercel detectará Vite automáticamente y ejecutará `npm run build`.
4. ¡Tu enlace estará listo para compartir con Laura!
