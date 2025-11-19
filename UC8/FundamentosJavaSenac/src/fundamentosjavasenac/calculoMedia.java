/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package fundamentosjavasenac;

/**
 *
 * @author GABRIELASILVADAROSA
 */
public class calculoMedia 
{
    double nota1;
    double nota2;
    double nota3;

    public calculoMedia(double nota1, double nota2, double nota3) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
    
    public void calcularMedia ()
    {
       double calculo = (nota1+nota2+nota3) / 3;
       
        System.out.println("Sua média deste trimestre em matematica foi de :" +calculo);
    }
    
    
}
