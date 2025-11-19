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
public class DemonSlayer 
{
    public static void main(String[] args) 
    {
        Scanner verificar = new Scanner(System.in);
        
        System.out.print("Digite o nível de concentração: ");
        int concentracao = verificar.nextInt();
        
        System.out.print("Digite o nivel de energia: ");
        int energia = verificar.nextInt();
        
        if (concentracao >= 60 && energia > 50)
        
        {
            System.out.println("Você pode usar respiração da água!");
        }

        else
        {
            System.out.println("Você não pode usar a técnica");
        }
        
      
    }
    
   
    
    
    
}
