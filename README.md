# 🐱 CatGallery

CatGallery es una galería interactiva de imágenes de gatos, construida con **JavaScript Vanilla** y **Vite**, utilizando la [The Cat API](https://thecatapi.com/) para obtener fotos de gatos aleatorias y por raza.  
Los usuarios pueden marcar sus gatos favoritos, filtrarlos por raza, y la información se guarda en **localStorage** para mantener sus favoritos entre sesiones.

---

## 🎯 Funcionalidades

- Mostrar imágenes de gatos de manera dinámica en la galería principal.
- Filtrar gatos por raza usando un `<select>` interactivo.
- Agregar y quitar gatos de la lista de favoritos.
- Guardar favoritos en **localStorage** para persistencia entre sesiones.
- Cargar más gatos con un botón **“Ver más”**.
- Mensajes de estado: carga y errores.
- Diseño responsive y moderno con CSS.

---

## 🛠️ Tecnologías utilizadas

- JavaScript Vanilla
- Vite (bundler)
- CSS
- The Cat API

---

## 📁 Estructura del proyecto

```
CatGallery/
│
├─ index.html
├─ package.json
├─ vite.config.js
│
└─ src/
   ├─ js/
   │  ├─ app.js         # Lógica principal de la app
   │  └─ ui.js          # Funciones de renderizado de galería y favoritos
   │
   ├─ api/
   │  └─ catApi.js      # Funciones para consumir The Cat API
   │
   ├─ storage.js        # Funciones para manejar favoritos en localStorage
   │
   └─ styles/
      └─ main.css       # Estilos CSS de la aplicación
```

---

## 🚀 Instalación y uso

1. Clonar el repositorio:

```bash
git clone https://github.com/TU_USUARIO/CatGallery.git
cd CatGallery
```

2. Instalar dependencias (Vite):

```bash
npm install
```

3. Ejecutar servidor de desarrollo:

```bash
npm run dev
```

4. Abrir el navegador en la URL que te da Vite (normalmente `http://localhost:5173/`).

5. Disfrutar de la galería de gatos, marcar favoritos y usar el filtro por raza.

---

## 📌 Notas

- La app usa **localStorage**, por lo que los favoritos se mantienen aunque cierres el navegador.  
- Si quieres ver más gatos, haz clic en **“Ver más”**, que cargará más imágenes desde la API.

---

## 🔗 Recursos

- [The Cat API](https://thecatapi.com/) – API gratuita para obtener imágenes de gatos.
- [Vite](https://vitejs.dev/) – Herramienta para desarrollo rápido de proyectos web.