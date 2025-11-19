/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package loginprojeto;

/**
 *
 * @author GABRIELASILVADAROSA
 */
public class Calculadora {

    private double numero1;
    private double numero2;

    public Calculadora(double numero1, double numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    public double somar() 
    {
        return this.numero1 + this.numero2;
    }
    
    public double subtair()
    {
        return this.numero1-this.numero2;
    }
    
    public double multiplicar ()
    {
        return this.numero1 * this.numero2;
    }
    
    public double dividir ()
    {
        return numero1 / numero2;
    }
   
}
