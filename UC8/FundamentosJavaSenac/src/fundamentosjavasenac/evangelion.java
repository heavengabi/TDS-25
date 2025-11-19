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
public class evangelion {

    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite sua sincronização: ");
        int sincronizacao = sc.nextInt();

        if (sincronizacao < 40) 
        {
            System.out.println("Sincronização insuficiente - Unidade não pode ser ativada");
        } else if (sincronizacao > 40 && sincronizacao < 79) 
        {
            System.out.println("Sincronizacao estavel - Piloto apto para combate");
        } 
        else if (sincronizacao >= 80) 
        {
            System.out.println("Sincronizacao maxima - Risco de modo berserk");
        } 
       
    }
}