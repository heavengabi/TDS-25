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
public class MagiaProibida 
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Digite seu nivel de mana: ");
        int mana = sc.nextInt();
        
        System.out.print("Seu inimigo está a quantos metros de distancia? ");
        int distancia = sc.nextInt();
        
//        if(mana < 20 || distancia < 5);
//    {
//        System.out.println("Você nao pode usar a magia proibida!");       
//    } 
//        
//        else if(mana != 20 || distancia != 5)
//        {
//            System.out.println("Você pode usar a magia.");
//        }
        

        boolean manaBaixa = mana<20;
        boolean inimigoPerto = distancia<5;
        
        boolean condicaoPerigosa = manaBaixa || inimigoPerto;
        boolean podeUsar = !condicaoPerigosa;

        System.out.println("Pode usar a magia?" + podeUsar);

        sc.close();
    }
    
    
}
