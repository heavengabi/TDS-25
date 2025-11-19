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
public class Desafio 
{
    public static void main(String[] args)
    {
        Scanner verificar = new Scanner(System.in);
        
        System.out.print("Digite o nível de alma: ");
        int alma = verificar.nextInt();

        System.out.print("Digite o nível de coragem: ");
        int coragem = verificar.nextInt();

        System.out.print("Digite o nível de energia: ");
        int energia = verificar.nextInt();

        int portaisAbertos = 0;

      
        if (alma >= 70)
        {
            System.out.println("Portal de Frieren aberto!");
            portaisAbertos++;
        }
        
        else 
        {
            System.out.println("Portal de Frieren fechado.");
        }

       
        if (coragem > 50) {
            System.out.println("Portal de Demon Slayer aberto!");
            portaisAbertos++;
        } else {
            System.out.println("Portal de Demon Slayer fechado.");
        }

        
        if (energia != 0) 
        {
            System.out.println("Portal de Fullmetal Brotherhood aberto!");
            portaisAbertos++;
        }
        
        else 
        {
            System.out.println("Portal de Fullmetal Brotherhood fechado.");
        }

       
        System.out.println("\nTotal de portais abertos: " + portaisAbertos);

        if (portaisAbertos == 3) 
        {
            System.out.println("Todos os portais foram abertos! Você dominou o multiverso mágico!");
        } else if (portaisAbertos > 0) 
            
        {
            System.out.println("Alguns portais se abriram... sua jornada continua!");
        }
        
        else
        {
            System.out.println("Nenhum portal se abriu. Treine mais antes de tentar novamente!");
        }

        verificar.close();
    }

        
        
}
    
    
    
    
    
    
    
    
    
    

