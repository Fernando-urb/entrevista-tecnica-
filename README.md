# Prueba Técnica: Poke Store 🎮

¡Bienvenido a la prueba técnica de Academy Appwise! El objetivo es completar una pequeña tienda de Pokémon utilizando React.

## Requisitos Previos

- Tener instalado Node.js y pnpm/npm.
- Familiaridad con React (Hooks, Effect).

## Instrucciones

La aplicación ya tiene una estructura base, pero le faltan funcionalidades clave divididas por niveles:

### 🟢 Nivel 1: Mostrar Información
- El precio de cada Pokémon debería mostrarse al lado de su nombre o en la tarjeta.
- Actualmente el precio está en la data pero no se visualiza.

### 🟡 Nivel 2: Estado de Carga
- La API tiene un retraso simulado.
- Debes mostrar un texto o componente que diga **"Cargando..."** mientras se obtienen los datos.

### 🟠 Nivel 3: El Carrito
- Debemos mostrar la cantidad de elementos actuales en el carrito dentro del botón flotante inferior (ej: `🛒 Carrito: 1 / 3`).

### 🔴 Extra: Validación
- No deberíamos poder agregar más de 3 elementos al carrito.
- Si el usuario intenta agregar un 4to, debe mostrarse una alerta o deshabilitar el botón.

---

## Cómo ejecutar

1. Instalar dependencias: `pnpm install`
2. Correr modo developer: `pnpm dev`
