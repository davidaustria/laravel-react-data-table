# Laravel-React-Data-Table

Laravel React Starter Kit with TanStack Table (Pagination & Sorting).

## Features
- Integration between Laravel and React, Tailwind CSS, and Shadcn/ui.

## Requirements
- PHP >= 8.2 or higher
- Composer
- Node.js >= 14.x
- npm or yarn

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/davidaustria/laravel-react-data-table.git
    cd laravel-react-data-table
    ```

2. Install backend dependencies:
    ```bash
    composer install
    ```

3. Set up the `.env` file:
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4. Configure your database in the `.env` file and run migrations:
    ```bash
    php artisan migrate
    ```

5. Install frontend dependencies:
    ```bash
    npm install
    ```

6. Build the frontend and backend assets and start the development server:
    ```bash
    composer run dev
    ```

## Usage
- Access the application at `http://localhost:8000`.
