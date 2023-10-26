
# Función para calcular la multiplicación de exponentes
def multiplicar_exponentes(base1, exponente1, base2, exponente2):
    if base1 == base2:
        resultado_base = base1
        resultado_exponente = exponente1 + exponente2
        resultado = resultado_base ** resultado_exponente
        return f"Resultado: {resultado_base}^{resultado_exponente} = {resultado}"
    else:
        resultado_base1 = base1 ** exponente1
        resultado_base2 = base2 ** exponente2
        resultado = resultado_base1 * resultado_base2
        return f"Resultado: ({base1}^{exponente1}) * ({base2}^{exponente2}) = {resultado}"

# Función para calcular la división de exponentes
def dividir_exponentes(base_numerador, exponente_numerador, base_denominador, exponente_denominador):
    if base_numerador == base_denominador:
        resultado_base = base_numerador
        resultado_exponente = exponente_numerador - exponente_denominador
        resultado = resultado_base ** resultado_exponente
        return f"Resultado: {resultado_base}^{resultado_exponente} = {resultado}"
    else:
        resultado_base_numerador = base_numerador ** exponente_numerador
        resultado_base_denominador = base_denominador ** exponente_denominador
        resultado = resultado_base_numerador / resultado_base_denominador
        return f"Resultado: ({base_numerador}^{exponente_numerador}) / ({base_denominador}^{exponente_denominador}) = {resultado}"

# Función para calcular la potencia de un número elevado a otra potencia
def potencia_de_potencia(base, exponente1, exponente2):
    resultado_base = base ** (exponente1 * exponente2)
    resultado_exponente = exponente1 * exponente2
    return f"Resultado: ({base}^{exponente1})^{exponente2} = {resultado_base}^{resultado_exponente} = {resultado_base}"

# Función para calcular la potencia de un producto elevado a una potencia
def potencia_de_producto(base1, base2, exponente):
    resultado_base1 = base1 ** exponente
    resultado_base2 = base2 ** exponente
    resultado = resultado_base1 * resultado_base2
    return f"Resultado: ({base1}^{exponente}) * ({base2}^{exponente}) = {resultado}"

# Función para calcular la potencia de un cociente elevado a una potencia
def potencia_de_cociente(numerador, denominador, exponente):
    resultado_numerador = numerador ** exponente
    resultado_denominador = denominador ** exponente
    resultado = resultado_numerador / resultado_denominador
    return f"Resultado: ({numerador}^{exponente}) / ({denominador}^{exponente}) = {resultado}"

print("Calculadora de Exponentes")
print("1. Multiplicación de exponentes")
print("2. División de exponentes")
print("3. Potencia de un número elevado a otra potencia")
print("4. Potencia de un producto elevado a una potencia")
print("5. Potencia de un cociente elevado a una potencia")

opcion = int(input("Elija una opción (1, 2, 3, 4 o 5): "))

if opcion == 1:
    base1 = float(input("Ingrese la base del primer exponente: "))
    exponente1 = float(input("Ingrese el exponente del primer exponente: "))
    base2 = float(input("Ingrese la base del segundo exponente: "))
    exponente2 = float(input("Ingrese el exponente del segundo exponente: "))

    resultado = multiplicar_exponentes(base1, exponente1, base2, exponente2)
    print(resultado)

elif opcion == 2:
    base_numerador = float(input("Ingrese la base del numerador: "))
    exponente_numerador = float(input("Ingrese el exponente del numerador: "))
    base_denominador = float(input("Ingrese la base del denominador: "))
    exponente_denominador = float(input("Ingrese el exponente del denominador: "))

    resultado = dividir_exponentes(base_numerador, exponente_numerador, base_denominador, exponente_denominador)
    print(resultado)

elif opcion == 3:
    base = float(input("Ingrese la base: "))
    exponente1 = float(input("Ingrese el exponente 1: "))
    exponente2 = float(input("Ingrese el exponente 2: "))

    resultado = potencia_de_potencia(base, exponente1, exponente2)
    print(resultado)

elif opcion == 4:
    base1 = float(input("Ingrese la primera base: "))
    base2 = float(input("Ingrese la segunda base: "))
    exponente = float(input("Ingrese el exponente: "))

    resultado = potencia_de_producto(base1, base2, exponente)
    print(resultado)

elif opcion == 5:
    numerador = float(input("Ingrese el numerador: "))
    denominador = float(input("Ingrese el denominador: "))
    exponente = float(input("Ingrese el exponente: "))

    resultado = potencia_de_cociente(numerador, denominador, exponente)
    print(resultado)

else:
    print("Opción no válida")