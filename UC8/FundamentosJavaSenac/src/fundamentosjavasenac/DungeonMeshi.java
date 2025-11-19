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
public class DungeonMeshi 

{
    public static void main(String[] args) 
    {
        Scanner fome = new Scanner(System.in);
        
        System.out.print("Digite o nível de fome de Laios (0 a 10): ");
        int nivelFome = fome.nextInt();

        if (nivelFome >= 8 && nivelFome <= 10) 
        {
            System.out.println("Laios está com MUITA FOME!");
        }
        
        else if (nivelFome >= 0 && nivelFome < 8) 
        {
            System.out.println("Laios não está com tanta fome.");
        } 
        
        else 
        {
            System.out.println("Valor inválido! Digite um número entre 0 e 10.");
        }
        
        fome.close();
    }

}
