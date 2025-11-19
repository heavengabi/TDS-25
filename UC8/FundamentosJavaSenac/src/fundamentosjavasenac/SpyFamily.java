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
public class SpyFamily {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite a nota recebida");
        double nota = sc.nextDouble();

        if (nota >= 9) {
            System.out.println("Muito elegante!!! :D");
        } else if (nota >= 7) {
            System.out.println("Aprovada pela Eden Academy!!");

        } else if (nota < 7) {
            System.out.println("Anya ficou triste...");
        } else{
            System.out.println("Invalido!");
        }

    }
}
