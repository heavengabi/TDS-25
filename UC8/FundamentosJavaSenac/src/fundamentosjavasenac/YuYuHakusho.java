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
public class YuYuHakusho 
{
    public static void main(String[] args) 
    
    {
        Scanner energia = new Scanner(System.in);
        
        System.out.print("Digite o nível de energia: ");
        int qualEnergia = energia.nextInt();

        if (qualEnergia > 50) {
            System.out.println("Yusuke pode usar Leigan!");
        } else {
            System.out.println("Yusuke não pode usar Leigan.");
        }

        energia.close();
    }
}


