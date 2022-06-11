# 2022-Cityhack

## Компоненты системы

* Основной бэк с бд -> заливаем все данные, отдаём клиентам, шлём рассылки | **Андрей**
* Фронт для ищущих продукты(Клиент)
* Сервис для выгружающих продукты(Клиент или Клиент + Бэк)
* Парсер поставщиков
* Парсер товаров поставщиков(Опционально)
* Постпроцессинг товаров после загрузки в реестр(тегирование, поиск соответствий) Фронт/Бэк/МЛ


#### Основной бэк с бд:
- [x] Логика логина => POST /api/v1/login, **form-data login:значение**
- [x] Инфо о пользователе GET /api/v1/user, **в хедере Authorization должен лежать логин**
- [x] Добавление/обновление пользователя POST /api/v1/user, **json запроса по модели proto/external.proto/User**
- [x] Логика загрузки товаров(кучами) POST /api/v1/products, **json запроса по модели proto/external.proto/Product**
- [x] Логика получения товаров для пользователя GET /api/v1/products,  **в хедере Authorization должен лежать логин**
- [ ] Логика рассылок с предложением зайти на платформу + авторизация

#### Фронт:
* главная
* хэдер
* футер
* авторизация
* ЛК производителя
* товар
* лист товаров
* поиск товаров

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
