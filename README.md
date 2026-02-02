## 🧪 Guía Paso a Paso: Manipulación de Arreglos en JavaScript

**Arrays · Ciclo `for` · `push()` · `splice()` · Consola (Node.js)**

---

## 🙌 Contexto

En esta demo vamos a trabajar con **arreglos en JavaScript**, aprendiendo a **recorrerlos y modificarlos** paso a paso.

El ejercicio está diseñado para practicar cómo:

- Crear un arreglo
- Recorrer sus elementos con un ciclo `for`
- Agregar nuevos elementos
- Eliminar un elemento específico
- Observar cómo cambia el arreglo después de cada operación

Todo el trabajo se realizará desde la **terminal de VS Code**, sin navegador ni interfaz gráfica.

---

## 🎯 Objetivo de la Demo

Al finalizar esta guía, serás capaz de:

- Crear un arreglo de strings
- Recorrer un arreglo usando un ciclo `for`
- Imprimir elementos en la consola
- Agregar elementos con `push()`
- Eliminar elementos específicos con `splice()`
- Analizar los cambios que sufre un arreglo en cada paso

---

## ⏱️ Tiempo Estimado

🕛 **20 – 30 minutos**

---

## 📂 Estructura del Proyecto

```
.
├── script.js       # Archivo JavaScript con la lógica del ejercicio
└── README.md       # Esta guía
```

---

## 🧠 Antes de programar (IMPORTANTE)

👉 **Dibuja un diagrama de flujo** que represente el proceso completo.

Piensa en:

- ¿Cómo se crea el arreglo?
- ¿Cómo se recorre?
- ¿En qué momento se agrega un nuevo elemento?
- ¿En qué momento se elimina un elemento?
- ¿Qué se muestra en consola después de cada acción?

⚠️ **No comiences a programar sin antes pensar la lógica**.

---

## ✍️ Consigna

Tu tarea es escribir un script en JavaScript que:

- Cree un arreglo inicial de nombres  
  (por ejemplo: `["Ana", "Carlos", "Elena"]`)
- Recorra el arreglo usando un ciclo `for`
- Imprima cada nombre en la consola
- Agregue un nuevo nombre al final del arreglo usando `push()`
- Elimine un nombre específico del arreglo usando `splice()`
- Imprima el arreglo después de cada operación para observar los cambios

---

## 🧩 Pistas Paso a Paso (sin resolver)

### 🔹 1. Crear el arreglo

- Declara una variable
- Asigna un arreglo con al menos **3 nombres**

💡 Pista: los arreglos se definen usando `[]`

---

### 🔹 2. Recorrer el arreglo

- Usa un ciclo `for`
- Recorre el arreglo desde el índice `0`
- Imprime cada elemento con `console.log()`

💡 Pista: usa `.length` para saber cuántas vueltas dar

---

### 🔹 3. Agregar un nuevo elemento

- Usa el método `push()`
- Agrega un nuevo nombre al final del arreglo
- Imprime el arreglo completo

💡 Pista: `push()` siempre agrega al final

---

### 🔹 4. Eliminar un elemento específico

- Identifica el índice del nombre que quieres eliminar
- Usa `splice()` para eliminar solo ese elemento

💡 Pista: `splice(indice, cantidadAEliminar)`

---

### 🔹 5. Ver el resultado final

- Imprime el arreglo final en consola
- Recorre nuevamente el arreglo si es necesario

💡 Pista: agrega mensajes descriptivos para entender mejor el resultado

---

## ⚠️ Cosas a Tener en Cuenta

- Los índices de los arreglos comienzan en `0`
- `splice()` modifica el arreglo original
- Un índice incorrecto puede eliminar el elemento equivocado
- Es buena práctica imprimir el arreglo después de cada cambio

---

## ▶️ Ejecución del programa

Desde la terminal, en la carpeta del proyecto:

```bash
node script.js
```

📌 Todos los resultados se mostrarán en la consola.

---

## ✅ Conclusión

Este ejercicio te permite comprender una de las bases más importantes de JavaScript:  
**trabajar con colecciones de datos**.

Dominar arreglos y ciclos es clave antes de avanzar a:

- Condicionales
- Funciones
- Arreglos de objetos
- Métodos avanzados como `map()`, `filter()` y `find()`

🚀 ¡Buen trabajo y a seguir practicando!
