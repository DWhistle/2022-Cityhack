# 2022-Cityhack

## Компоненты системы

- [x] Основной бэк с бд -> заливаем все данные, отдаём клиентам, шлём рассылки **=> исходники в backend/src, Go**
- [x] Фронт для ищущих продукты(Клиент)
- [x] Сервис для выгружающих продукты(Клиент или Клиент + Бэк)
- [x] Парсер поставщиков **=> исходники в backend/parser, Selenium + Python**
- [x] Парсер товаров поставщиков(Опционально)

### Допущения в рамках хакатона:
- Упрощена аутентификация пользователя

## Запуск
1. Установить docker, docker-compose
2. Запустить docker machine или docker desktop
3. Установить GNU Make(если windows)
4. Запустить **make** или **make all** => стартанут бэкенд, фронтенд и таска на парсинг первых ~50 производителей, через минуту после запуска контейнеров они должны быть доступны
5. Фронтенд будет доступен на localhost/app или localhost:3000

#### Основной бэк с бд:
- [x] Логика логина => POST /api/v1/login, **form-data login:значение**
- [x] Инфо о пользователе GET /api/v1/user, **в хедере Authorization должен лежать логин**
- [x] Добавление/обновление пользователя POST /api/v1/user, **json запроса по модели proto/external.proto/User**
- [x] Все пользователи GET /api/v1/user/all
- [x] Логика загрузки товаров(кучами) POST /api/v1/products, **json запроса по модели proto/external.proto/ProductRequest**
- [x] Логика получения товаров для пользователя GET /api/v1/products,  **в хедере Authorization должен лежать логин**
- [x] Логика рассылок с предложением зайти на платформу **отправляем письма всем в статусе APPROVED, далее переводим в MAILED**
- [x] Авторизация для приходящих из рассылки
- [x] Обновление статуса пользователя POST /api/v1/user/status, **json запроса по модели proto/external.proto/ChangeStatusRequest**

#### Фронт:
- [x] Главная / хэдер футер / навигация
- [x] Авторизация (две роли)
- [x] Личный кабинет и странички пользователей (параметризованные запросы)
- [x] Добавление товаров: 1) ручной метод (мультиформа). 2) drag n drop таблички excel
- [x] Карточки товаров и юзеров. Возможность расставлять статусы
- [x] SPA-архитектура + менеджер состояний.
