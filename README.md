# CSV-Reader SPA (React.js)

Этот проект представляет собой Single Page Application (SPA) для просмотра данных из CSV-файла. Приложение имеет два экрана: главный экран для загрузки файла и экран просмотра данных в виде таблицы.

## Функциональность

### 1. Главный экран (загрузка)

На главном экране расположен блок с текстом "Выберите файл в формате CSV" и кнопкой "Выберите файл". При нажатии на кнопку "Выберите файл" открывается окно выбора файла ОС.

При выборе файла в формате .CSV происходит выбор данных из файла, и пользователь перенаправляется на следующий экран. Если выбран файл не в формате .CSV, отображается сообщение об ошибке: "Неправильный формат файла, разрешены только файлы .CSV".

### 2. Экран просмотра данных (таблица)

На экране просмотра отображается кнопка "Загрузить новый файл" и таблица с данными. Данные вставляются в таблицу из загруженного на первом экране файла, сопоставляя поля следующим образом:

| Поле в файле | Поле в экране просмотра |
|--------------|------------------------|
| name         | Имя                    |
| phone        | Номер телефона         |
| email        | Email                  |
| bday         | Дата рождения          |
| address      | Адрес                  |

Данные сохраняются в браузере (LocalStorage), чтобы после обновления страницы оставаться на месте. Если данные уже сохранены, экран с таблицей открывается сразу, пропуская экран загрузки.

При нажатии на кнопку "Загрузить новый файл", данные в браузере очищаются, и пользователь перенаправляется на главный экран.

## Структура проекта 

1. **Components:**
   - `App`: Главный экран.
   - `TablePage`: Таблица с данными.

2. **Routes:**
   - `router.js`: Использую библиотеку react-dom-router v6, маршрутизация приложения.

3. **Utils:**
   - `/parse/parseCsv.js`: Утилита для парсинга CSV-файлов.
   - `/ui/displayAlert.js`: Показывает алерт, если файл неккоректный.
   - `handleFileUpload.js`: Утилита для обработки загрузки файлов.

4. **Точка входа:**
   - `index.js`: Точка входа в приложение.

## Технологии

1. **React.js:** Использованы для создания компонентов и управления состоянием приложения.

2. **CSS** Применены для стилизации пользовательского интерфейса и обеспечения приятного визуального восприятия.

## Инструкции по запуску

1. Установите зависимости с помощью `npm install`.
2. Запустите приложение с помощью `npm start`.
3. Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере.
