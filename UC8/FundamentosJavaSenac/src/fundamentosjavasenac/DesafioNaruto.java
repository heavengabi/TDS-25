package fundamentosjavasenac;

import java.util.Scanner;

public class DesafioNaruto {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int vidaPlayer = 100;
        int danoJogador = 20;
        int danoInimigo = 20;
        String nomePlayer = "Player";

        
        int ataqueRapido = 15;
        int ataqueForte = 30;
        int jutsuEspecial = 45;

        
        String[] nomesInimigos = {"Zabuza", "Kabuto", "Haku", "Orochimaru", "Deidara"};

       //escolher perso
        System.out.println("Escolha seu personagem:");
        System.out.println("1 - Naruto (Vida 120, Dano 20)");
        System.out.println("2 - Sasuke (Vida 100, Dano 30)");
        System.out.println("3 - Sakura (Vida 140, Dano 18)");

        int escolha = sc.nextInt();

        switch (escolha) {
            case 1:
                vidaPlayer = 120;
                danoJogador = 20;
                nomePlayer = "Naruto";
                break;

            case 2:
                vidaPlayer = 100;
                danoJogador = 30;
                nomePlayer = "Sasuke";
                break;

            case 3:
                vidaPlayer = 140;
                danoJogador = 18;
                nomePlayer = "Sakura";
                break;

            default:
                System.out.println("Opcao invalida! Naruto foi escolhido automaticamente.");
                vidaPlayer = 120;
                danoJogador = 20;
                nomePlayer = "Naruto";
                break;
        }

        System.out.println("Voce escolheu: " + nomePlayer + "!");
        

      //começo do jogo

        System.out.println("Quantos inimigos voce quer enfrentar? (1 a 5)");
        int qntdInimigos = sc.nextInt();

        while (qntdInimigos < 1 || qntdInimigos > 5) {
            System.out.println("Valor invalido! Digite entre 1 e 5:");
            qntdInimigos = sc.nextInt();
        }

        int inimigoAtual = 1;

        while (inimigoAtual <= qntdInimigos && vidaPlayer > 0) {

            int vidaInimigo = 40;
            String nomeInimigo = nomesInimigos[inimigoAtual - 1];

            System.out.println("=== Inicio da batalha contra " + nomeInimigo + " ===");

            while (vidaInimigo > 0 && vidaPlayer > 0) {
                System.out.println(nomePlayer + " - Vida: " + vidaPlayer);
                System.out.println("Vida de " + nomeInimigo + ": " + vidaInimigo);

                System.out.println("Escolha a acao:");
                System.out.println("(1) Ataque rapido");
                System.out.println("(2) Ataque forte");
                System.out.println("(3) Jutsu especial");
                System.out.println("(4) Defender");

                int acao = sc.nextInt();

                switch (acao) {

                    case 1:
                        System.out.println(nomePlayer + " usou Ataque Rapido!");
                        vidaInimigo -= ataqueRapido;
                        break;

                    case 2:
                        System.out.println(nomePlayer + " usou Ataque Forte!");
                        vidaInimigo -= ataqueForte;
                        vidaPlayer -= 5;
                        System.out.println("Voce sofreu 5 de dano pelo esforco!");
                        break;

                    case 3:
                        System.out.println(nomePlayer + " usou Jutsu Especial!");
                        vidaInimigo -= jutsuEspecial;
                        vidaPlayer -= 10;
                        System.out.println("Voce perdeu 10 de vida ao usar o jutsu!");
                        break;

                    case 4:
                        System.out.println(nomePlayer + " defendeu!");
                        int danoReduzido = danoInimigo / 2;
                        vidaPlayer -= danoReduzido;
                        System.out.println("Voce recebeu apenas " + danoReduzido + " de dano!");
                        continue;

                    default:
                        System.out.println("Acao invalida! Voce tomou dano total!");
                        vidaPlayer -= danoInimigo;
                        continue;
                }

                if (vidaInimigo > 0) {
                    System.out.println(nomeInimigo + " atacou e causou " + danoInimigo + " de dano!");
                    vidaPlayer -= danoInimigo;
                }
            }

            if (vidaPlayer > 0) {
                System.out.println("Voce derrotou " + nomeInimigo + "!");
            }

            inimigoAtual++;
        }

        System.out.println("=== RESULTADO FINAL ===");
        if (vidaPlayer <= 0) {
            System.out.println("Voce foi derrotado... Reprovado no Exame Chunin!");
        } else {
            System.out.println("Voce venceu todos os inimigos! Aprovado no Exame Chunin!");
        }
    }
}

