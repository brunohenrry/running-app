
# Running App - Setup e Execução

Este é o projeto **Running App**, desenvolvido com Next.js. Siga as etapas abaixo para configurar e rodar o projeto localmente.

## Requisitos

- **Node.js** (versão recomendada: 18 ou superior)
- **npm** ou **yarn** (gerenciadores de pacotes)

## 1. Clonar o Repositório

Primeiro, clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/brunohenrry/running-app.git
```

## 2. Instalar Dependências

Entre na pasta do projeto e instale as dependências:

```bash
cd running-app
npm install
# ou
yarn install
```

## 3. Rodar o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
# ou
yarn dev
```

Isso irá iniciar o projeto em `http://localhost:3000`. Abra essa URL no seu navegador para visualizar o aplicativo.

## 4. Compilar para Produção

Para compilar o projeto para produção, execute:

```bash
npm run build
# ou
yarn build
```

Isso cria uma versão otimizada do seu app na pasta `.next`.

## 5. Executar em Produção Local

Após compilar, você pode rodar a versão de produção localmente:

```bash
npm start
# ou
yarn start
```

Isso irá rodar o servidor de produção na sua máquina.

## 6. Outras Configurações

### Variáveis de Ambiente

Caso o seu projeto dependa de variáveis de ambiente, crie um arquivo `.env.local` na raiz do projeto e adicione as configurações necessárias, como por exemplo:

```env
NEXT_PUBLIC_API_URL=https://api.exemplo.com
```

### Testes

Se o projeto inclui testes, você pode rodá-los com o comando:

```bash
npm run test
# ou
yarn test
```

## 7. Contribuindo

Se você deseja contribuir com o projeto, siga os seguintes passos:

1. **Faça um fork** do repositório.
2. **Crie uma branch** para suas modificações (`git checkout -b minha-feature`).
3. **Commit suas alterações** (`git commit -am 'Adiciona nova funcionalidade'`).
4. **Envie a branch** para o seu fork (`git push origin minha-feature`).
5. **Abra um pull request** para o repositório original.

## 8. Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Agora o link do repositório foi ajustado corretamente para o seu URL. Se precisar de mais alguma coisa, é só avisar!
