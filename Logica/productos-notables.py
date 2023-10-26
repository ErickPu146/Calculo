def producto_notable():
    print("Elija un producto notable:")
    print("1. Cuadrado de la suma de dos términos (a + b)^2")
    print("2. Cuadrado de la diferencia de dos términos (a - b)^2")
    print("3. Producto de la suma por la diferencia de dos términos (a + b)(a - b)")

    opcion = int(input("Ingrese el número de la opción deseada: "))

    if opcion == 1:
        a = float(input("Ingrese el valor de 'a': "))
        b = float(input("Ingrese el valor de 'b': "))
        resultado = (a + b) ** 2
        print(f"El cuadrado de la suma de {a} y {b} es: {resultado}")

    elif opcion == 2:
        a = float(input("Ingrese el valor de 'a': "))
        b = float(input("Ingrese el valor de 'b': "))
        resultado = (a - b) ** 2
        print(f"El cuadrado de la diferencia de {a} y {b} es: {resultado}")

    elif opcion == 3:
        a = float(input("Ingrese el valor de 'a': "))
        b = float(input("Ingrese el valor de 'b': "))
        resultado = (a + b) * (a - b)
        print(f"El producto de la suma por la diferencia de {a} y {b} es: {resultado}")

    else:
        print("Opción no válida. Por favor, seleccione una opción válida.")

producto_notable()