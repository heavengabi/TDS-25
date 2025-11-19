package loginprojeto;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author GABRIELASILVADAROSA
 */
  public class Pessoa {
    private String nome;
    private int idade;

    Pessoa(String nome, int idade)
    {
    this.nome = nome;
    this.idade = idade;
    }
    
    public static void falar(){
        System.out.println("A pessoa está falando.");
    }
    
    public void apresentar(){
        System.out.println(this.nome + " tem " + this.idade + " anos.");
    }
    
    

}
