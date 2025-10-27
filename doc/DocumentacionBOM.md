# Documentacion BOM

## 📦 ¿Qué es el BOM?

El **BOM (Browser Object Model)** es el conjunto de objetos que proporciona el navegador para interactuar con él mismo (ventana, historial, URL, pantalla, navegador, consola...).
Todo está contenido dentro del objeto global **`window`**.

---

## 🌳 Estructura del BOM (sin DOM)

```
Window
 ├─ History
 ├─ Location
 ├─ Screen
 ├─ Navigator
 └─ Console
```

---

## 🪟 1. `window`

Es el objeto global del navegador. Todo lo demás cuelga de él.

✅ Ejemplos de métodos comunes:

| Método                    | Descripción                             |
| ------------------------- | --------------------------------------- |
| `alert("Hola")`           | Muestra una alerta.                     |
| `confirm("¿Seguro?")`     | Muestra confirmación (OK/Cancelar).     |
| `prompt("Tu nombre?")`    | Pide un dato al usuario.                |
| `setTimeout(fn, tiempo)`  | Ejecuta función una vez tras un tiempo. |
| `setInterval(fn, tiempo)` | Repite una función cada cierto tiempo.  |
| `open(url)`               | Abre una nueva ventana/pestaña.         |

---

## 📜 2. `history`

Controla el historial de navegación **dentro de la misma pestaña**.

| Propiedad/Método    | Descripción                              |
| ------------------- | ---------------------------------------- |
| `history.length`    | Número de páginas en el historial.       |
| `history.back()`    | Va atrás (equivalente al botón “Atrás”). |
| `history.forward()` | Va adelante.                             |
| `history.go(n)`     | Se mueve `n` pasos (ej: `go(-2)`).       |

---

## 📍 3. `location`

Gestiona la URL actual de la pestaña. También permite redirigir.

| Propiedad/Método        | Ejemplo                 | Descripción                            |
| ----------------------- | ----------------------- | -------------------------------------- |
| `location.href`         | `"https://example.com"` | URL completa.                          |
| `location.hostname`     | `"example.com"`         | Dominio.                               |
| `location.pathname`     | `"/ruta/pagina"`        | Ruta.                                  |
| `location.search`       | `"?id=3"`               | Parámetros GET.                        |
| `location.reload()`     |                         | Recarga la página.                     |
| `location.assign(url)`  |                         | Carga nueva URL (guarda en historial). |
| `location.replace(url)` |                         | Carga URL **sin historial**.           |

---

## 🖥️ 4. `screen`

Da información sobre la pantalla física del dispositivo.

| Propiedad            | Ejemplo | Descripción                       |
| -------------------- | ------- | --------------------------------- |
| `screen.width`       | `1920`  | Ancho de pantalla.                |
| `screen.height`      | `1080`  | Alto de pantalla.                 |
| `screen.availWidth`  |         | Área utilizable.                  |
| `screen.orientation` |         | Orientación (landscape/portrait). |

---

## 🧭 5. `navigator`

Da información del navegador y entorno del usuario.

| Propiedad               | Ejemplo            | Descripción                  |
| ----------------------- | ------------------ | ---------------------------- |
| `navigator.userAgent`   | `"Mozilla/5.0..."` | Info del navegador (cadena). |
| `navigator.language`    | `"es-ES"`          | Idioma.                      |
| `navigator.onLine`      | `true`/`false`     | Estado de conexión.          |
| `navigator.geolocation` |                    | Acceso a ubicación.          |

---

## 📟 6. `console`

Permite mostrar mensajes para depuración en la consola del navegador (F12).

| Método            | Descripción     |
| ----------------- | --------------- |
| `console.log()`   | Mensaje normal. |
| `console.warn()`  | Advertencia.    |
| `console.error()` | Error.          |
| `console.table()` | Muestra tablas. |

---

## ✅ Resumen:

| Objeto      | Para qué sirve                         |
| ----------- | -------------------------------------- |
| `window`    | Control general de la ventana.         |
| `history`   | Navegar en el historial de la pestaña. |
| `location`  | Ver/modificar la URL.                  |
| `screen`    | Info de la pantalla del dispositivo.   |
| `navigator` | Info del navegador y del usuario.      |
| `console`   | Mostrar mensajes para depurar.         |
