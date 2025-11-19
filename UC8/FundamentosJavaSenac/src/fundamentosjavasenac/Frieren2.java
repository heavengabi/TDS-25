/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package fundamentosjavasenac;

import java.util.Scanner;

/**
 *
 * @author GABRIELASILVADAROSA
 */
public class Frieren2 {

    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite a potencia da sua magia: ");
        int potencia = sc.nextInt();

        if (potencia < 30) {
            System.out.println("Magia fraca(Nivel aprendiz.)");

        } else if (potencia > 30 && potencia <= 70) {
            System.out.println("Magia mediana(Nivel aventureiro)");
        } else if (potencia > 71) {

            System.out.println("Magia avançada(Digno de treinar com Frieren)");

        } else {
            System.out.println("Invalido");
        }

        sc.close();

    }
}
