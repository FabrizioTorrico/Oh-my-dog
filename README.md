# 🐕 Oh My Dog - Sistema de Gestión Veterinaria

Sistema integral de gestión para clínicas veterinarias que permite administrar citas, mascotas, adopciones, servicios y campañas de donación.

## 🚀 Características Principales

- **Gestión de Usuarios**: Sistema de autenticación con roles (Veterinario/Cliente)
- **Reservas de Citas**: Programación de citas para vacunas, desparasitación, castraciones y consultas generales
- **Gestión de Mascotas**: Registro completo de mascotas con historial médico
- **Adopciones**: Plataforma para publicar y gestionar adopciones de mascotas
- **Servicios**: Directorio de paseadores y cuidadores de perros
- **Donaciones**: Sistema de campañas de donación con integración de MercadoPago
- **Publicaciones de Mascotas Perdidas**: Sistema para reportar y buscar mascotas perdidas

## 🛠️ Stack Tecnológico

Este proyecto está construido con el [T3 Stack](https://create.t3.gg/):

- **[Next.js](https://nextjs.org)** - Framework de React para producción
- **[NextAuth.js](https://next-auth.js.org)** - Autenticación completa para Next.js
- **[Prisma](https://prisma.io)** - ORM de próxima generación para Node.js y TypeScript
- **[Tailwind CSS](https://tailwindcss.com)** - Framework de CSS utilitario
- **[tRPC](https://trpc.io)** - APIs TypeScript end-to-end type-safe
- **[MongoDB](https://www.mongodb.com/)** - Base de datos NoSQL
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipos estáticos

### Dependencias Adicionales

- **Ant Design** - Biblioteca de componentes UI
- **React Hook Form** - Manejo de formularios
- **MercadoPago SDK** - Integración de pagos
- **SendGrid** - Servicio de email
- **Firebase** - Servicios de backend
- **Zod** - Validación de esquemas TypeScript

## 📋 Requisitos Previos

- Node.js 18+
- npm u otro gestor de paquetes
- MongoDB (local o Atlas)
- Cuenta de MercadoPago (para pagos)
- Cuenta de SendGrid (para emails)

## 🔧 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone <repository-url>
cd oh-my-dog
```

### 2. Instalar dependencias

```bash
# Instalar herramientas globales
npm install -g bun
npm install -g prisma

# Instalar dependencias del proyecto
bun install

# Configurar Git Flow (opcional)
git flow init
```

### 3. Configurar variables de entorno

Copia el archivo `.env.example` a `.env` y configura las variables necesarias:

```bash
cp .env.example .env
```

Variables principales a configurar:

- `DATABASE_URL` - URL de conexión a MongoDB
- `NEXTAUTH_SECRET` - Secreto para NextAuth
- `MERCADOPAGO_ACCESS_TOKEN` - Token de MercadoPago
- `SENDGRID_API_KEY` - API Key de SendGrid

### 4. Configurar la base de datos

```bash
# Generar el cliente de Prisma
prisma generate

# Sincronizar el esquema (para MongoDB no se requieren migraciones)
prisma db push
```

### 5. Ejecutar el proyecto

```bash
# Modo desarrollo
bun dev

# Modo producción
bun build
bun start
```

## 📝 Scripts Disponibles

- `bun dev` - Ejecuta el servidor de desarrollo
- `bun build` - Construye la aplicación para producción
- `bun start` - Ejecuta la aplicación en modo producción
- `bun lint` - Ejecuta el linter y valida el esquema de Prisma
- `prisma studio` - Abre Prisma Studio para gestionar la base de datos
- `bun ngrok` - Expone el servidor local usando ngrok

## 🗄️ Estructura de la Base de Datos

### Modelos Principales

- **User** - Usuarios del sistema (veterinarios y clientes)
- **Pet** - Mascotas registradas
- **Booking** - Reservas de citas médicas
- **AdoptPublication** - Publicaciones de adopción
- **Service** - Servicios de cuidado de mascotas
- **DonationCampaign** - Campañas de donación
- **LostPublication** - Publicaciones de mascotas perdidas

### Tipos de Reservas

- `VACCINE` - Vacunación
- `DEWORMING` - Desparasitación
- `GENERAL` - Consulta general
- `CASTRATION` - Castración
- `URGENCY` - Urgencia

## 🔄 Flujo de Desarrollo

### Antes de comenzar a programar

1. Cambiar a la rama develop:

```bash
git checkout develop
```

2. Obtener los últimos cambios:

```bash
git pull
```

3. Generar esquemas desde la DB:

```bash
prisma generate
# En VS Code: Ctrl+P > Developer: Reload Window
```

4. Crear nueva rama:

```bash
git flow feature start <nombre-feature>
```

### Enviar cambios al repositorio

1. Agregar cambios:

```bash
git add .
```

2. Hacer commit:

```bash
git commit -m "descripción del cambio"
```

3. Subir cambios:

```bash
git push origin <nombre-rama>
```

## 🚀 Despliegue

El proyecto puede desplegarse en:

- **[Vercel](https://create.t3.gg/en/deployment/vercel)** (Recomendado para Next.js)
- **[Netlify](https://create.t3.gg/en/deployment/netlify)**
- **[Docker](https://create.t3.gg/en/deployment/docker)**

### Variables de Entorno para Producción

Asegúrate de configurar todas las variables de entorno necesarias en tu plataforma de despliegue.

## 📚 Recursos Adicionales

- [Documentación del T3 Stack](https://create.t3.gg/)
- [Aprende el T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available)
- [Repositorio create-t3-app](https://github.com/t3-oss/create-t3-app)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y está destinado únicamente para uso interno.

---

> **Nota**: Para obtener más información sobre cualquier comando, usa `<comando> --help`. Si no tienes un comando instalado globalmente, usa `npx <comando>`.
