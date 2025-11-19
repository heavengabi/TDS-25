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
public class MyHeroAcademi 
{
    public static void main(String[] args)
    {
     
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite sua idade: ");
        int idade = sc.nextInt();
        
        System.out.println("Digite o seu nivel de poder: ");
        int poder = sc.nextInt();
        
        System.out.println("Digite seu nivel de poder emocional: ");
        int poderEmocional = sc.nextInt();
        
        if(idade>=15||poder>=50){
         System.out.println("Capacitado para entrar!");
     }else{
         System.out.println("Não vai entrar!");
     }

     if(poder >= 80 && poderEmocional >= 60)
     {
         System.out.println(" Pode entrar");
     }
     else if(poder>=80)
     {
         System.out.println("Nao entra");
     }
        
    }
    
    
}
