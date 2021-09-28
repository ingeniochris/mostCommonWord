# mostCommonWord, estructuras de datos, 

Dada una serie de palabras (parrafo), encontrar cuantas veces se repite una palabra "todas las palabras se manejan en minusculas".
Cada palabra no debe contener signos de puntuacion como (.;!?-).

Devolver como resultado la palabra que se repita mas veces, pero esta no debe estar en la lista de (palabrasNoPermitidas), en caso de estar en palabras no permitidas se devolvera la palabra que continua con el numero mayor de repeticiones.

## ejemplo
parrafo = "Bob hit a ball, the hit BALL flew long after it was hit."
palabrasNoPermitidas = hit

resultado = ball

#### nota.- aunque hit se repite mas veces hit=3, se encuentra en la lista no permitida entonces la que mas veces se repite es ball.

## REFERENCIAS 
codingpineapple (2021). LeetCode 819. Most Common Word (javascript solution). Dev To. Sitio web: https://dev.to/cod3pineapple/leetcode-819-most-common-word-javascript-solution-cec