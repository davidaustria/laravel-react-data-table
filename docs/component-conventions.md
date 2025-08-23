
# 📦 Convenciones de Componentes

Este documento describe las mejores prácticas para organizar y nombrar componentes frontend en proyectos Laravel + React (Inertia). Ayuda a garantizar la consistencia, mantenibilidad y facilidad de incorporación para nuevos colaboradores.

---

## 🗂️ Componentes Específicos de Página


Los componentes que están ligados a una página específica (por ejemplo: definiciones de columnas, filtros, elementos de UI con alcance limitado) deben ubicarse en la misma carpeta que el archivo de la página. Esto facilita la organización y el mantenimiento del código.

**Estructura recomendada:**

```
resources/js/pages/users/
├── Index.tsx          // Página principal
├── columns.tsx        // Columnas de la tabla de usuarios
└── data-table.tsx     // Tabla específica de usuarios
```

Si una página requiere varios componentes locales, crea un subdirectorio por vista:

```
resources/js/pages/users/
├── Index/
│   ├── Index.tsx
│   ├── columns.tsx
│   ├── UserTable.tsx
│   └── filters.tsx
├── Create.tsx
├── Edit.tsx
```

Los componentes compartidos entre vistas deben ir en `users/components/`. Evita colocar lógica específica de página en la raíz salvo que la página sea simple.

**Guía rápida:**

- Usa nombres descriptivos que reflejen la función del componente dentro de la página (`columns.tsx`, `filters.tsx`, `data-table.tsx`).
- No ubiques componentes específicos de página en carpetas globales como `components/`, salvo que sean reutilizables.
- Mantén la lógica enfocada y mínima; evita sobre-ingeniería en componentes de uso único.

---

## 🧩 Componentes Compartidos

Los componentes reutilizables que aparecen en varias páginas deben extraerse a la capa de UI compartida. Esto promueve la consistencia y reduce la duplicación.

**Ubicación recomendada:**

```
resources/js/components/ui/
└── data-table.tsx     // Componente de tabla reutilizable
```

**Guía:**

- Asegúrate de que los componentes sean genéricos y configurables mediante props.
- Incluye documentación interna o ejemplos de uso cuando sea apropiado.
- Usa convenciones de nombres consistentes (por ejemplo, `DataTable`, `DropdownMenu`, `PaginationControls`) y PascalCase para los archivos de componentes.
- Si un componente se reutiliza pero tiene comportamiento específico de página, considera envolverlo en un adaptador local (por ejemplo, `UsersTable.tsx` que usa `DataTable`).
