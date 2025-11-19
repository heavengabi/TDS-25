/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package loginprojeto;

/**
 *
 * @author GABRIELASILVADAROSA
 */
public class reptil extends animal {

    private String corEscama;

    public reptil(String corEscama, String raca, double peso) 
    {
        super(raca, peso);
        this.corEscama = corEscama;
    }
//sobrescrever
    @Override
    
    public String fazerSom(){
        return "rooooooooor";
    }
}
