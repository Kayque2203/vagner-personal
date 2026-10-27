# Site do Personal Trainer

Site estático (HTML, CSS e JavaScript puro). Funciona abrindo `index.html` e publica direto no GitHub Pages, sem build.

## Personalizar
Tudo que muda fica em `js/config.js`: nome, WhatsApp, Instagram, cidade, CREF, texto do "Sobre", serviços e metodologia.
Campos vazios não aparecem. Seções Sobre, Serviços e Metodologia só surgem quando têm conteúdo.
Fotos: `assets/images/` (troque mantendo os nomes ou ajuste em `index.html`).

## Publicar no GitHub Pages
1. Crie uma conta em https://github.com e clique em **New repository**. Dê um nome (ex.: `personal-trainer`), deixe **Public** e crie.
2. Envie os arquivos: na página do repositório, **uploading an existing file**, arraste o conteúdo da pasta (`index.html`, `css`, `js`, `assets`, `README.md`) e clique em **Commit changes**. A pasta que contém o `index.html` deve ficar na raiz do repositório.
3. Abra **Settings** do repositório e depois **Pages** no menu lateral.
4. Em **Build and deployment**, escolha **Source: Deploy from a branch**, branch **main** e pasta **/ (root)**. Clique em **Save**.
5. Aguarde 1 a 2 minutos e acesse `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/` (o link também aparece no topo da página de Pages).

Todos os caminhos são relativos (sem `/` inicial), então funciona nesse endereço de projeto.

## Antes e depois dos alunos
1. Coloque as fotos em `assets/images/` (ex.: `antes-01.jpg`, `depois-01.jpg`). Use fotos verticais (3:4), do mesmo tamanho e enquadramento, e só com autorização por escrito do aluno.
2. Em `js/config.js`, preencha `transformacoes`:
   `{nome:"Carlos, 32 anos", antes:"assets/images/antes-01.jpg", depois:"assets/images/depois-01.jpg", tempo:"4 meses", legenda:"-12 kg de gordura"}`
3. A seção "Resultados" e o item no menu aparecem sozinhos. Sem itens, ficam ocultos.
