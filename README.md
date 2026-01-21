# Guía del proyecto

## Cómo ejecutar el proyecto

Primero clona el proyecto

```bash
git clone https://github.com/HugoGarciaAlvarez/ReactSPA.git
cd react-app
```
A continuación descarga las dependencias de node_modules
```bash
npm install
```
Lanza el servidor de desarrollo
```bash
npm run dev
```
## 📂 Estructura y Funcionamiento (Qué hace cada parte)

El código se ha organizado siguiendo una arquitectura profesional por carpetas:

src/pages: Contiene las vistas de la aplicación: Home, Login, Usuarios y el Dashboard protegido.

src/router: Gestiona el sistema de rutas dinámicas sin recarga de página.

src/store / Context: Implementa el estado global de autenticación para controlar el acceso del usuario.

src/services: Contiene la lógica de comunicación con la API externa de JSONPlaceholder.

## 🛠️ Funcionalidades Principales
La aplicación cumple con los siguientes requisitos obligatorios:

Navegación SPA: Uso de React Router para cambiar entre páginas de forma instantánea sin recargar el navegador.

Rutas Privadas: Implementación de seguridad donde, si no hay un usuario identificado, el sistema redirige automáticamente a la página de Login al intentar acceder a /dashboard.

Lazy Loading: El componente Dashboard se carga de forma diferida para mejorar el rendimiento inicial de la app.

Consumo de API: La sección de Usuarios conecta con un servicio REST real para mostrar una lista con nombres y correos electrónicos.

Estado Global: El login simula una entrada real guardando los datos del administrador en el contexto global de la aplicación.


## 📝 Notas de Uso
Para probar la Ruta Privada, intenta acceder directamente a la sección de Dashboard desde el menú sin haber iniciado sesión.

El sistema de Login está configurado para validar al usuario (ej. usuario: admin) y habilitar el acceso a las áreas protegidas.
