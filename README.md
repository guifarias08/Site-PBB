# PBB — Projeto Beberibe Basketball

Landing page institucional do Projeto Beberibe Basketball, criada para apresentar a história do projeto, suas categorias, os horários de treino e o principal canal de contato.

## Identidade da página

A direção visual preserva os elementos centrais do projeto original:

- abertura em vídeo ocupando toda a primeira tela;
- escudo do PBB com animação flutuante;
- slogan “A prática leva à permanência” como mensagem principal;
- paleta escura com laranja como cor de energia e destaque;
- presença da história do fundador e da foto da equipe.

O refinamento visual adiciona uma hierarquia tipográfica mais forte, melhor contraste, espaços mais consistentes, componentes mais sóbrios e uma experiência responsiva pensada para celular, tablet e desktop.

## Estrutura do projeto

```text
.
├── index.html                         # Conteúdo e estrutura da landing page
├── pbb.css                            # Identidade visual, responsividade e animações
├── pbb.js                             # Menu, rolagem, vídeo e animações de entrada
├── images pbb.png/
│   ├── logo pbb.png                   # Escudo oficial do PBB
│   └── nossa jornada.png              # Foto da equipe
└── video- pbb.mp4/
    └── video pbb.mp4                  # Vídeo de abertura
```

## Seções

1. **Abertura:** vídeo, slogan, chamadas para ação, escudo e categorias atendidas.
2. **Nossa jornada:** origem do projeto e relato do fundador em um formato mais fácil de ler.
3. **Muito além da quadra:** pilares de formação, disciplina e permanência.
4. **Categorias:** apresentação das turmas Sub-15, Sub-17 e Adulto.
5. **Agenda semanal:** dias, horários e locais dos treinos.
6. **Faça parte:** chamada final direcionando o visitante ao Instagram do PBB.

## Comportamentos e acessibilidade

- Menu móvel com estado aberto/fechado informado a leitores de tela.
- Primeira dobra adaptada a telas estreitas e celulares baixos, mantendo slogan, texto e ações totalmente visíveis.
- Foto da equipe com enquadramento completo, efeito de profundidade no desktop e ampliação por toque ou clique.
- Visualização ampliada em modal, com fechamento pelo botão, pelo fundo ou pela tecla `Esc`.
- Fechamento do menu pela tecla `Esc`, por mudança de tamanho da tela ou pela escolha de um link.
- Link “Pular para o conteúdo” para navegação por teclado.
- Estados de foco visíveis em links e botões.
- Textos alternativos nas imagens de conteúdo.
- Animações reduzidas automaticamente quando o dispositivo usa `prefers-reduced-motion`.
- Vídeo pausado quando a abertura sai da área visível, reduzindo consumo desnecessário.
- Conteúdo continua disponível caso o JavaScript esteja desativado.

## Visualização local

O projeto é estático e não precisa instalar dependências. Na pasta do projeto, execute:

```bash
python3 -m http.server 4173
```

Depois, acesse `http://localhost:4173` no navegador.

## Atualizações frequentes

- **Horários e locais:** editar os itens dentro de `.schedule-list` em `index.html`.
- **Categorias:** editar os cards dentro de `.category-grid` em `index.html`.
- **Instagram:** pesquisar por `instagram.com/beberibebasketball` em `index.html`.
- **Cores:** ajustar as variáveis no início de `pbb.css`.
- **Ano do rodapé:** atualizar o texto em `.footer-bottom` no `index.html`.
- **Mídias:** manter os nomes e caminhos atuais ou atualizar as referências no HTML ao substituir os arquivos.

## Publicação

Antes de publicar:

1. confirmar os horários, locais e nomes das categorias;
2. conferir se o link do Instagram continua correto;
3. validar a página em celular e desktop;
4. comprimir novas imagens e vídeos antes de adicioná-los;
5. atualizar título, descrição e imagem de compartilhamento no `<head>` caso a marca ou o domínio mudem.

O projeto não depende de framework ou processo de build: basta publicar os arquivos mantendo a mesma estrutura de pastas.
