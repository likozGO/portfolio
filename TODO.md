# TODO

1. Удалить большие картинки > 100кб, заменить <100кб
2. Добавить lazy loading компонентов
3. Мигрировать на SSG или Next JS
4. Заменить реакт на преакт
5. Посмотреть размеры библиотек, поудалять лишние
6. Добавить кнопки в профиль страницу, чтоб юзеру было что делать после того как он попал на главную
7. Переработать stage страницу - вынести stage-hello в отдельную страницу
8. Поменять название переменных в ducks (если bool - has, is, can)
9. Показать пару людям и получить отзывы
10. Посмотреть методы оптимизации и оптимизировать (анимации, гугл спид инсайтс)
11. Написать тесты для компонентов
12. Написать проптайпсы для всех компонентов
13. Купить домен - задеплоить
14. Изменить название компонентов - "Profile" = "About me" - "Stage controller" = Settings - "Stage hello" = GreetingPage - "Company" = "Experience"
15. Проанализировать внимательно компоненты и добавить в туду что увижу

# DONE:

- Добавить UKR локализацию и убрать русский флаг там где Русский язык, добавить корабль
- Подобрать адекватнее цвета под каждую существующую тему
- Проверить работу приложения без закешированого стейта (должен быть редирект или продумать что должно быть)
- Пофиксить анимации, сделать что б переход с одной страницы на другую был максимально плавный
- Добавить локализацию для меню навигации
- Проверить есть ли локализация на странице "Компаний"
- Переписать текст на странице "О мне"
- Переделать навигацию (сайдбар)
- Добавить локализацию на страницу "Проектов"
- Изменить страницу
  - 404 (https://codepen.io/oliviale/pen/bPmYKN + random fact + travolta)
  - Компании (http://www.jayvanhutten.com/)
  - Проекты (https://www.moritz-petersen.de/en#projects)
- Добавить смену тайтла в зависимости от языка (можно что то интересное добавлять в тайтл)
- Переделать структуру файловую в re-ducks
- Изменить принцип работы с data леяром, добавить контейнеры
- Переделать stage-settings
- Запилить ссылки для перехода на все мои роуты (продумать навигацию и основные компоненты)
- Добавить константы где необходимо (в основном для i18n)
- Добавить ссылки в профиле
- Обновить резюме
- Добавить Prettier
- Продумать и добавить правила для eslint
- Portfolio/src/translations/translation-biography-data.js вынести константы в отдельный const файл
- Добавить прекоммит который будет проходить еслинтом и ранить всё что нужно
- Разобраться с фетчем кривым в 404 пейдже, убрать лодер если загрузилось, проверить что б не ререндерилась картинка лишний раз
- Разобраться как правильно хранить API ключи и перенести в енв файл
- Portfolio/src/pages/error-no-found.js Вынести константы из функции
- Portfolio/src/stylesheets/animation.css изменить названия для всех кейфреймов, использовать один нейминг стайл, проверить использую их или нет
- Cоздать хук для обработки и получения данных с апи
- Portfolio/src/pages/stage-controller.js Убрать условие с константы и перенести полное условие в коннект
- Разобраться с котом, сделать так чтоб страница не пропадала
- Добавить кнопку назад со страницы проектов
- Допилить кнопку, нужно сделать общий компонент для двух кнопок одинаковых
- Решить проблему с навбаром
- Portfolio/src/pages/projects.js По этому примеру повсюду изменить логику работы с i18n
- Добавить падинги на странице ошибок
- Обернуть пустые компоненты в react.memo
- Обернуть приложение в Ерор Баундери
- Перевести кнопку "Back" в проектах, перевести если можно еррор баундери, пройтись по приле - глянуть где еще мог забыть
- Переписать все компоненты в function вместо конст, по возможности убирать класс компоненты
- Обновить реакт до 18 версии
- Добавить container компонент
- Пофиксил GO кнопку на 4 шаге настроек
- Добавить section компонент
- Просмотреть дивы - убрать не нужное
- Проверить все даксы и поудалять лишнее
- Задеплоить

# BUGS

1. Что-то странное с анимацией иногда елементы не успевают убраться после перехода на другую страницу (Пример, переходим на 404 и потом на главную, и клацаем быстро - увидим 404 на главной странице, такого не должно быть);
2. Если первое посещение юзера было на 404, редирект на hello page делать;
3. Нужно сделать так что б анимация выхода не мешала анимации появления;
4. Анимация попадания в экран на странице проектов кривая :( походу надо будет убирать или как то фиксить
5. Со стрикт модом при изменении темы с партиклями прила фризится
