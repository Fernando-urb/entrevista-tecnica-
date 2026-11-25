# Prueba Técnica: Poke Store 🎮

¡Bienvenido a la prueba técnica de **Veloxia**! El objetivo es completar una pequeña tienda de Pokémon utilizando React.

## Requisitos Previos

- Tener instalado Node.js y `pnpm` (o `npm`).
- Familiaridad con React (`useState`, `useEffect`).

## Modalidad

- **Duración:** 30 minutos en vivo por Meet con pantalla compartida.
- **Sin IA:** La idea es ver cómo leés código existente, cómo razonás y cómo resolvés problemas reales (podés consultar documentación oficial si lo necesitás).

---

## Instrucciones

La aplicación ya tiene una estructura base, pero le faltan funcionalidades clave divididas por niveles:

### 🟢 Nivel 1: Mostrar Información
- El precio de cada Pokémon debe mostrarse al lado de su nombre o dentro de la tarjeta.
- Actualmente el precio ya viene en la data, pero no se está visualizando.

### 🟡 Nivel 2: Estado de Carga
- La API tiene un retraso simulado.
- Debés mostrar un texto o componente que diga **"Cargando..."** mientras se obtienen los datos.

### 🟠 Nivel 3: El Carrito
- Debemos mostrar la cantidad de elementos actuales en el carrito dentro del botón flotante inferior (ej: `🛒 Carrito: 1 / 3`).

### 🔴 Extra: Validación
- No se deberían poder agregar más de **3 elementos** al carrito.
- Si el usuario intenta agregar un 4.º elemento, debe mostrarse una alerta o deshabilitarse el botón.

---

## Cómo ejecutar

1. Instalar dependencias: `pnpm install`
2. Correr en modo desarrollo: `pnpm dev`