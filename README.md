
# Curso pacotes

Para instalar, rode
```
composer create-project leandrogrando/curso-pacote
```

Crie um novo banco de dados chamado 'curso-pacote-laravel' e defina seu .env conforme o exemplo a seguir
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=curso-pacote-laravel
DB_USERNAME=user-do-banco
DB_PASSWORD=senha-do-banco
```

Depois rode
```
php artisan migrate
npm install
npm run dev
```



