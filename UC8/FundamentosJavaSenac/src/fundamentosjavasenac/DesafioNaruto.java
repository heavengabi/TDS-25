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
public class DesafioNaruto {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int vidaPlayer = 100;
        int danoInimigo = 20;
        int danoJogador = 25;

        System.out.println("Quantos inimigos você quer enfrentar? (1 a 5)");
        int qntdInimigos = sc.nextInt();

        while (qntdInimigos < 1 || qntdInimigos > 5) {
            System.out.println("Valor inválido! Digite entre 1 e 5: ");
            qntdInimigos = sc.nextInt();
        }

        int inimigoAtual = 1;

        // LOOP dos inimigos
        while (inimigoAtual <= qntdInimigos && vidaPlayer > 0) {

            int vidaInimigo = 40; // vida inicial de cada inimigo
            System.out.println(" Início da batalha contra o inimigo " + inimigoAtual + " ===");

            // LOOP da batalha contra UM inimigo
            while (vidaInimigo > 0 && vidaPlayer > 0) {
                System.out.println("Sua vida: " + vidaPlayer);
                System.out.println("Vida do inimigo " + inimigoAtual + ": " + vidaInimigo);

                System.out.println("Escolha a ação: (1) Atacar (2) Defender");
                int acao = sc.nextInt();

                switch (acao) {
                    case 1:
                        System.out.println("Você atacou e causou " + danoJogador + " de dano!");
                        vidaInimigo -= danoJogador;

                        if (vidaInimigo > 0) {
                            System.out.println("O inimigo contra-atacou e causou " + danoInimigo + " de dano!");
                            vidaPlayer -= danoInimigo;
                        }
                        break;

                    case 2:
                        System.out.println("Você defendeu!");
                        int danoReduzido = danoInimigo / 2;
                        vidaPlayer -= danoReduzido;
                        System.out.println("Você recebeu apenas " + danoReduzido + " de dano!");
                        break;

                    default:
                        System.out.println("Ação inválida! Você tomou dano total!");
                        vidaPlayer -= danoInimigo;
                        break;
                }
            }

            if (vidaPlayer > 0) {
                System.out.println("Você derrotou o inimigo " + inimigoAtual + "!");
            }

            inimigoAtual++;
        }

        System.out.println("=== RESULTADO FINAL ===");
        if (vidaPlayer <= 0) {
            System.out.println("Você foi derrotado... Reprovado no Exame Chunin!");
        } else {
            System.out.println("Você venceu todos os inimigos! Aprovado no Exame Chunin!");
        }
    }
}
