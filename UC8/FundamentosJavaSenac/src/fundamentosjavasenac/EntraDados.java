/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package fundamentosjavasenac;
import java.awt.BorderLayout;
import java.util.Scanner;
/**
 *
 * @author GABRIELASILVADAROSA
 */
public class EntraDados 
{
    
    
    public static void main(String[] args) 
    {
     
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite seu nome: ");
        String nome = entrada.nextLine();
        
        System.out.println("Digite a sua idade: ");
        int idade = entrada.nextInt();
        
        System.out.println("Olá, " + nome + ". Você tem " + idade + " anos.");
        
        
        entrada.close();
    } 
    
    
}
