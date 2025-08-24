
# Laravel-React-Data-Table

Starter kit para construir aplicaciones modernas con Laravel y React, integrando TanStack Table para paginación y ordenamiento eficiente de datos. Utiliza Tailwind CSS y Shadcn/ui para una interfaz atractiva y funcional.

TanStack Table es una librería avanzada para la gestión de tablas en React, permitiendo paginación, ordenamiento y filtrado de manera flexible y rápida.

## Características
- Integración entre Laravel y React
- Tailwind CSS y Shadcn/ui para UI moderna
- TanStack Table para tablas avanzadas (paginación y ordenamiento)

## Requisitos
- PHP >= 8.2
- Composer
- Node.js >= 18.x
- npm o yarn

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/davidaustria/laravel-react-data-table.git
    cd laravel-react-data-table
    ```

2. Instala las dependencias de backend:
    ```bash
    composer install
    ```

3. Configura el archivo `.env`:
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4. Configura tu base de datos en `.env` y ejecuta las migraciones:
    ```bash
    php artisan migrate:fresh --seed
    ```

5. Instala las dependencias de frontend:
    ```bash
    npm install
    ```

6. Compila los assets y ejecuta el servidor de desarrollo:
    ```bash
    npm run dev
    ```

7. Inicia el servidor de Laravel:
    ```bash
    php artisan serve
    ```

## Uso
- Accede a la aplicación en `http://localhost:8000`.

Email: admin@example.com
Password: password

## Documentación
- Convenciones de componentes: [docs/component-conventions.md](docs/component-conventions.md)

## Contribución
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para sugerencias y mejoras.

## Licencia
Este proyecto está bajo la licencia MIT.
