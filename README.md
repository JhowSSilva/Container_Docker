# Construindo a Imagem Docker
Abra seu terminal, navegue até a pasta raiz do seu projeto e execute o seguinte comando para construir a imagem.

Importante: Substitua seu-usuario-dockerhub pelo seu nome de usuário real do Docker Hub.

- O comando 'build' constrói a imagem.
- A flag '-t' define um nome (tag) para a imagem.
- O '.' no final indica que o Dockerfile está no diretório atual.

    docker build -t seu-usuario-dockerhub/bloco-de-notas:1.0 . 

# Passo 1: Executando o Contêiner
Com a imagem construída, vamos criar e rodar um contêiner a partir dela:

- O comando 'run' cria e inicia um contêiner.
- A flag '-d' (detached) roda o contêiner em segundo plano.
- A flag '-p 8080:80' mapeia a porta 8080 do seu computador para a porta 80 do contêiner.

    docker run -d -p 8080:80 seu-usuario-dockerhub/bloco-de-notas:1.0

    Agora, abra seu navegador e acesse http://localhost:8080. Sua aplicação de anotações deve estar funcionando!

# Ultimo Passo: Enviando a Imagem para o Docker Hub

- Faça login no Docker Hub pelo terminal:

    docker login


- Envie a imagem (Push):

-  O comando 'push' envia sua imagem local para o repositório do Docker Hub.

    docker push seu-usuario-dockerhub/bloco-de-notas:1.0
