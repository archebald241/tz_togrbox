# TZ Torgbox application

## Системные требования

* Node.js v16+
* npx v8+

## Запуск приложения

Чтобы запустить локально приложение, выполните команды:

### `git clone`
Либо с помощью HTTPS: `git clone https://github.com/archebald241/tz_togrbox.git`

### `cd tz_torgbox`
Перейдите в директорию приложения

### `npm install`
Установит все зависимоти из `package.json`

### `json-server --watch db.json --port 5000`

Зупаскает тестовый сервер для проверки работы API приложения.
Запускается по адресу [http://localhost:5000](http://localhost:5000).

### `npm start`

Запускает приложение в режиме разработки.\
Откройте [http://localhost:3000](http://localhost:3000) для просмотра в браузере.

Приложение перезагружается автоматически, если вы внесете изменение.

### `npm run start-web`

Запускает приложение в режиме разработки с помощью webpack.\
Откройте [http://localhost:3000](http://localhost:3000) для просмотра в браузере.

Приложение перезагружается автоматически, если вы внесете изменение.

### `npm run build`

Создает каталог с минимальной сборкой приложения для дальнейшей выгрузки на сервер.

## Описание используемых технологий

### Redux Toolkit

Упрощает взаимодействие с Redux.

### RTK query

Упрощает работу с API в Redux.