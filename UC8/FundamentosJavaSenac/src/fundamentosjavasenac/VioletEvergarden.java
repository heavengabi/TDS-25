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
public class VioletEvergarden 
{
    
    public static void main(String[] args)
    {
        
        Scanner verificar = new Scanner(System.in);
        
         
        System.out.print("Digite o número de palavras da carta: ");
        int palavras = verificar.nextInt();

        if (palavras >= 300) 
        {
            System.out.println("A carta é aceitável!");
        } 
        
        else 
        {
            System.out.println("A carta não é aceitável. Precisa ter pelo menos 300 palavras.");
        }

        verificar.close();
    }
        
    }
    

