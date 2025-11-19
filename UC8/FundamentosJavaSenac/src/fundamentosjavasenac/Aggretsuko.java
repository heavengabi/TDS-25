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
public class Aggretsuko 
{
    public static void main(String[] args)
    
    {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Qual o nivel de estresse?");
        int estresse = sc.nextInt();
        
        System.out.print("Digite o dia da semana?");
        int diaSemana = sc.nextInt();
        
        System.out.print("O Ton gritou?");
        boolean tonGritou = sc.nextBoolean();
        
        if(diaSemana == 5  && (tonGritou == true || estresse > 70))
        {

            System.out.println("Voce entra no modo ataque.");
        }
        else 
        
        {
            System.out.println("Esta tranquilo");
        }        
        
        
        
        
        
    }
}
