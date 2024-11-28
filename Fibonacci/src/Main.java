import java.util.List;
import java.util.Scanner;
public class Main {
    static Scanner scan = new Scanner(System.in);
    public static void main(String[] args) {
//        System.out.print("Elija cuantos números de Fibonacci desea ver: ");
//        int n = scan.nextInt();
//        System.out.println();
        fibonacci(10);
    }

    public static void fibonacci(int n) {
        int numeroInicial = 0;
        int siguienteNumero = 1;

        if (n == 0) {
            System.out.println("No hay números de Fibonacci para mostrar.");
            return;
        }

        for (int i = 0; i < n; i++) {
            if (i == 0) {
                // Imprime el primer número
                System.out.print(numeroInicial);
            } else if (i == 1) {
                // Imprime el segundo número
                System.out.print(", " + siguienteNumero);
            } else {
                // Calcula e imprime los siguientes números
                int resultado = numeroInicial + siguienteNumero;
                System.out.print(", " + resultado);
                numeroInicial = siguienteNumero;
                siguienteNumero = resultado;
            }
        }
        System.out.println(); // Salto de línea al final
    }

    /*
    *
    *
    public static void fibonacci(int n) {
        int numeroInicial = 0;
        int siguienteNumero = 1;
        int resultado;

        System.out.println(numeroInicial + ", ");
        if (n > 1) {
            System.out.println(siguienteNumero + ", ");
        }
        for (int i = 2; i < n; i++) {
            resultado = numeroInicial + siguienteNumero;
            System.out.println(resultado + ", ");
            numeroInicial = siguienteNumero;
            siguienteNumero = resultado;
        }
    }

    * */
}



