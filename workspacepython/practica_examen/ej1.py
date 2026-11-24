condicion = True
numeroMayor = 10

while condicion:
    entrada = input("Introduce un numero o salir")
    if entrada.lower() == "salir":
        condicion = False
        break
    numero = int(entrada)
    if numero > numeroMayor:
        numeroMayor = numero

print(numeroMayor)