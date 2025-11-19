/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package loginprojeto;

/**
 *
 * @author GABRIELASILVADAROSA
 */
public class LoginProjeto {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) 
    {
        Pessoa pessoa = new Pessoa("Gabriela", 17);
        pessoa.apresentar();
        pessoa.falar();
        
        
        
        Calculadora calc = new Calculadora(8, 4);
        
        System.out.println(calc.dividir());
        System.out.println(calc.multiplicar());
        System.out.println(calc.somar());
        System.out.println(calc.subtair());
        
        mamifero gato = new mamifero("laranja", "gato", 3);
        System.out.println(gato.mostrarRacaEPeso());
        System.out.println(gato.fazerSom());
        
        
        
        
        reptil jacare = new reptil("verde", "jacare", 150);
        System.out.println(jacare.mostrarRacaEPeso());
        System.out.println(jacare.fazerSom());
    }
    
}
