# Stalcraft Auction Tracker

## [Ссылка на deploy](https://stalcraft-auction-tracker.vercel.app/)

## Стек

  - Основной: React, TypeScript
  - Стили: Bootstrap, SASS, classnames
  - Сборка: Vite
  - Дополнительно: ESLint 

## Разработка сайта

### Установка

 - Скопировать командой `$git clone https://github.com/Tetrarium/stalcraft-auction-tracker.git`
 - Перейти в директорию проекта `$cd stalcraft-auction-tracker`
 - Установить зависимости `$npm install`
 - Запустить проект: `$npm run dev`

### Этапы разработки

- [x] Настроить рабочее окружение
- [x] Развернуть проект на Versel, добавить ссылку в Readme
- [ ] Создать лайоут страниц
  * [x] Сделать Header
  * [ ] Сделать Main
    - [x] Фильтр
      - [x] Созданы импуты управления фильтром
      - [x] Созданы чекбоксы
      - [x] Созданы кнопки управления фильтром
    - [x] Контейнер с карточками
      - [x] Компонент для карточек
    - [ ] Модалка истории
- [ ] Запросы к серверу
  * [ ] /api/lots
  * [ ] /api/lots_ext
  * [ ] /api/history
  * [ ] /api/init
- [ ] Состояние приложения
- [ ] Обработчики событий