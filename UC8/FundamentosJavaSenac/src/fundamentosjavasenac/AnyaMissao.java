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
public class AnyaMissao {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite o numero de missão.");
        int missao = sc.nextInt();

        switch (missao){
            case 1:
                System.out.println("Proteger Anya");
                break;
            case 2:
                System.out.println("Investigar Desmond");
                break;
            case 3:
                System.out.println("Missao secreta SSS");
                break;
            case 4:
                System.out.println("Visitar castelo para recreação");
                break;
            default:
                System.out.println("Missão desconhecida");

        }

    }

}
