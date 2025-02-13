📖 Blog con React, Vite y Express

Un blog dinámico que permite visualizar y crear posts, guardar favoritos y gestionar perfiles de usuario. Usa autenticación con Auth0, un backend con Express y JSON-Server, y un frontend con React y Vite.
🚀 Demo en Vivo

🔹 Frontend en Vercel
🔹 Backend en Render
✨ Características

✅ Autenticación con Auth0
✅ Creación y visualización de posts
✅ Guardar posts en favoritos
✅ Perfiles de usuario con posts publicados
✅ Paginación de posts
🛠️ Tecnologías utilizadas
Frontend

    React con Vite
    React Router DOM
    Axios
    TailwindCSS + DaisyUI

Backend

    Node.js con Express
    JSON-Server para la base de datos
    Axios para la comunicación con la API

📥 Instalación y ejecución
🔧 1. Clonar el repositorio

git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

🖥️ 2. Configurar y ejecutar el backend

cd server  
npm install  
npm start  

🎨 3. Configurar y ejecutar el frontend

cd ../app  
npm install  
npm run dev  

La aplicación estará disponible en http://localhost:5173.
🔑 Configuración de variables de entorno

Crea un archivo .env en la raíz del backend y agrega:

JSON_SERVER_URL=https://tu-json-server-url.com

Para el frontend, configura Auth0 en el archivo .env:

VITE_AUTH0_DOMAIN=dev-tu-dominio.auth0.com  
VITE_AUTH0_CLIENT_ID=tu-client-id  

📌 Rutas de la API

🔹 Obtener posts paginados:
GET /api/posts/:page/:perPage

🔹 Obtener un post por ID:
GET /api/post?id=1

🔹 Obtener posts por usuario:
GET /api/userPosts?user_id=123

🔹 Agregar un nuevo post:
POST /api/addPosts

🔹 Actualizar favoritos:
PATCH /api/favorites/:id
