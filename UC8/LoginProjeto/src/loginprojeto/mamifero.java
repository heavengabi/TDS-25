/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package loginprojeto;

/**
 *
 * @author GABRIELASILVADAROSA
 */
public class mamifero extends animal {

    private String corDoPelo;

    public mamifero(String corDoPelo, String raca, double peso) 
    {
        super(raca, peso);
        this.corDoPelo = corDoPelo;
    }
    
    @Override
    public String fazerSom(){
        return "miau";
    }

}
