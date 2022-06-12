# 2022-Cityhack

## Компоненты системы

- [x] Основной бэк с бд -> заливаем все данные, отдаём клиентам, шлём рассылки **=> исходники в backend/src, Go**
- [x] Фронт для ищущих продукты(Клиент)
- [x] Сервис для выгружающих продукты(Клиент или Клиент + Бэк)
- [x] Парсер поставщиков **=>исходники в backend/parser, Selenium + Python**
- [x] Парсер товаров поставщиков(Опционально)


#### Основной бэк с бд:
- [x] Логика логина => POST /api/v1/login, **form-data login:значение**
- [x] Инфо о пользователе GET /api/v1/user, **в хедере Authorization должен лежать логин**
- [x] Добавление/обновление пользователя POST /api/v1/user, **json запроса по модели proto/external.proto/User**
- [x] Все пользователи GET /api/v1/user/all
- [x] Логика загрузки товаров(кучами) POST /api/v1/products, **json запроса по модели proto/external.proto/ProductRequest**
- [x] Логика получения товаров для пользователя GET /api/v1/products,  **в хедере Authorization должен лежать логин**
- [x] Логика рассылок с предложением зайти на платформу **отправляем письма всем в статусе APPROVED, далее переводим в MAILED**
- [ ] Авторизация для приходящих из рассылки
- [x] Обновление статуса пользователя POST /api/v1/user/status, **json запроса по модели proto/external.proto/ChangeStatusRequest**

#### Фронт:
- [x] главная
- [x] хэдер
- [x] футер
- [x] авторизация
- [ ] ЛК производителя
- [x] товар
- [ ] лист товаров
- [ ] поиск товаров

#### Объекты для фронта:

#### item
* id - num
* company_id - num
* isAccept - bool
* title - string
* description - string
* img - string (link)
* category - string

#### company // и есть юзер (компании)
* id - num
* title - string
* mail - string
* pass - string
* inn - num
* description - string
* logo - string (link)
* okved - array? [num,num,num] // ОКВЕД
* est - data // основание

#### user // простой пользователь
* id - num
* name - string
* email - string
* pass - string
* favs - array? [item_id, ..] // избранное
