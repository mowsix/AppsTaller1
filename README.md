# 🍽️ CSS Diner - Guía Completa de Selectores

Este documento explica el propósito de cada selector utilizado en los niveles del juego CSS Diner.  
Incluye un espacio para que insertes una imagen de cada nivel en el marcador ![Nivel X](ruta_a_imagen)

---

## Nivel 1

```css
plate
```

Selecciona todos los elementos `<plate>`.

![Nivel 1](ruta_a_imagen)

---

## Nivel 2

```css
bento
```

Selecciona todos los elementos `<bento>`.

![Nivel 2](ruta_a_imagen)

---

## Nivel 3

```css
#fancy
```

Selecciona el elemento con `id="fancy"`.

![Nivel 3](ruta_a_imagen)

---

## Nivel 4

```css
plate apple
```

Selecciona los `<apple>` que están dentro de un `<plate>`.

![Nivel 4](ruta_a_imagen)

---

## Nivel 5

```css
#fancy pickle
```

Selecciona los `<pickle>` dentro del elemento con `id="fancy"`.

![Nivel 5](ruta_a_imagen)

---

## Nivel 6

```css
.small
```

Selecciona todos los elementos con clase `small`.

![Nivel 6](ruta_a_imagen)

---

## Nivel 7

```css
orange.small
```

Selecciona todos los `<orange>` con clase `small`.

![Nivel 7](ruta_a_imagen)

---

## Nivel 8

```css
bento orange.small
```

Selecciona los `<orange class="small">` que están dentro de un `<bento>`.

![Nivel 8](ruta_a_imagen)

---

## Nivel 9

```css
plate, bento, .pickle
```

Selecciona todos los `<plate>`, `<bento>` y los elementos con clase `pickle`.

![Nivel 9](ruta_a_imagen)

---

## Nivel 10

```css
*
```

Selecciona todos los elementos.

![Nivel 10](ruta_a_imagen)

---

## Nivel 11

```css
plate *
```

Selecciona todos los elementos dentro de un `<plate>`.

![Nivel 11](ruta_a_imagen)

---

## Nivel 12

```css
plate + apple
```

Selecciona el `<apple>` que esté justo después de un `<plate>`.

![Nivel 12](ruta_a_imagen)

---

## Nivel 13

```css
pickle ~ pickle
```

Selecciona los `<pickle>` que están después de otro `<pickle>` en el mismo nivel.

![Nivel 13](ruta_a_imagen)

---

## Nivel 14

```css
plate > apple
```

Selecciona los `<apple>` que son hijos directos de `<plate>`.

![Nivel 14](ruta_a_imagen)

---

## Nivel 15

```css
plate orange:first-child
```

Selecciona un `<orange>` que sea el primer hijo dentro de un `<plate>`.

![Nivel 15](ruta_a_imagen)

---

## Nivel 16

```css
plate > :only-child
```

Selecciona el único hijo dentro de un `<plate>`.

![Nivel 16](ruta_a_imagen)

---

## Nivel 17

```css
.small:last-child
```

Selecciona cualquier elemento con clase `small` que sea el último hijo.

![Nivel 17](ruta_a_imagen)

---

## Nivel 18

```css
plate:nth-child(3)
```

Selecciona el `<plate>` que sea el tercer hijo de su contenedor.

![Nivel 18](ruta_a_imagen)

---

## Nivel 19

```css
bento:nth-last-child(3)
```

Selecciona el `<bento>` que sea el tercer hijo desde el final.

![Nivel 19](ruta_a_imagen)

---

## Nivel 20

```css
apple:first-of-type
```

Selecciona el primer `<apple>` de su tipo dentro de su contenedor.

![Nivel 20](ruta_a_imagen)

---

## Nivel 21

```css
plate:nth-of-type(even)
```

Selecciona los `<plate>` en posiciones pares.

![Nivel 21](ruta_a_imagen)

---

## Nivel 22

```css
plate:nth-of-type(2n+3)
```

Selecciona todos los `<plate>` cuya posición sea `2n + 3`.

![Nivel 22](ruta_a_imagen)

---

## Nivel 23

```css
plate apple:only-of-type
```

Selecciona `<apple>` dentro de `<plate>` que sean el único de su tipo en su contenedor.

![Nivel 23](ruta_a_imagen)

---

## Nivel 24

```css
.small:last-of-type
```

Selecciona el último elemento de su tipo que además tenga la clase `small`.

![Nivel 24](ruta_a_imagen)

---

## Nivel 25

```css
bento:empty
```

Selecciona los `<bento>` que no tienen hijos.

![Nivel 25](ruta_a_imagen)

---

## Nivel 26

```css
apple:not(.small)
```

Selecciona los `<apple>` que **no** tienen la clase `small`.

![Nivel 26](ruta_a_imagen)

---

## Nivel 27

```css
[for]
```

Selecciona todos los elementos que tengan el atributo `for`.

![Nivel 27](ruta_a_imagen)

---

## Nivel 28

```css
plate[for]
```

Selecciona los `<plate>` que tengan el atributo `for`.

![Nivel 28](ruta_a_imagen)

---

## Nivel 29

```css
bento[for="Vitaly"]
```

Selecciona el `<bento>` que tenga el atributo `for="Vitaly"`.

![Nivel 29](ruta_a_imagen)

---

## Nivel 30

```css
[for^="S"]
```

Selecciona los elementos cuyo atributo `for` **empieza** con `"S"`.

![Nivel 30](ruta_a_imagen)

---

## Nivel 31

```css
[for$="ato"]
```

Selecciona los elementos cuyo atributo `for` **termina** en `"ato"`.

![Nivel 31](ruta_a_imagen)

---

## Nivel 32

```css
[for*="obb"]
```

Selecciona los elementos cuyo atributo `for` **co**
