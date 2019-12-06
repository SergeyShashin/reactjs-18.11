//Дз1 Урок 1. Настройка среды разработки и первое React-приложение
// +1. Установить node и npm.
// +2. Создать проект и настроить package.json.
// +3. Настроить webpack.config.
// +4. Сделать при помощи webpack сборку простейшего React-кода с использованием функционального компонента сообщения
// +5. Выдать html-файл, в который подключается сборка при помощи webpack-dev-server.
// +6. * Реализовать возможность отправки нового сообщения с фиксированным текстом:
//     добавить кнопку;
//     обрабатывать нажатие на кнопку функцией, которая добавляет в массив сообщений новое — например, с текстом «Нормально».
//     функция-обработчик также должна делать перерендер DOM’а, чтобы новое сообщение не просто добавилось в массив, но и появилось у пользователя на странице. ### Все проблемы и пути их решения подробно обсудим на следующем занятии.

//Дз2 Урок 2. Жизненный цикл React-компонента
// 1. Создать в папке components два компонента: MessageField и Message. Причем компоненты Message должны быть вложены в MessageField.
// 2. Реализовать отправку сообщений по нажатию кнопки.
// 3. На каждое отправленное сообщение должен отвечать робот (используйте componentDidUpdate).
// 4. Добавить автора к сообщениям и отображать его в интерфейсе. Переделать логику ответа от робота в соответствии с этим.

// Дз3
// 1. Сверстать мессенджер, выделив явно поле для сообщений и визуально разделив сообщения от пользователя и ответы робота.
// 2. Добавить возможность ввода текста сообщения и его отправки:
//сообщение должно отправляться либо по нажатию кнопки в интерфейсе, либо по нажатию Enter на клавиатуре;
//поле ввода должно очищаться при отправке сообщения. ### 3. Подключить Material-UI и сделать с его помощью верстку поля ввода, кнопки отправки сообщения. ### 4. Создать новые компоненты: Layout, ChatList и Header.
//Layout должен быть вверху приложения (подключаться в index.jsx), а ChatList, Header и MessageField внутри него;
//Header должен быть вверху Layout и занимать всю ширину;
//ChatList и MessageField должны быть расположены рядом друг с другом ниже Header так, чтобы Message Field занимал большую часть (например, 30 % на 70 %);
//ChatList должен только визуально отражать список из 3–5 чатов (назовите их как угодно) и пока не несет никакой функциональности. Переключение между чатами реализовывать не нужно;
//Для верстки ChatList использовать List из Material-UI. ### 5. * Исправить баг, который возникает, если отправить сообщение и, не дожидаясь ответа от робота, начать печатать что-то в поле ввода. Все проблемы и пути их решения подробно обсудим на следующем занятии.

//Дз4
// 1.+ Подключить BrowserRouter (из react-router-dom).
// 2.+ Создать верхний компонент Router со Switch и Route’ами.
// 3.+ Разбить приложение на чаты с помощью роутера (URLs: /chat/<chat_id>/).
// 4.+ Реализовать хранение сообщений в словаре с id в качестве ключа.
// 5.+ Реализовать хранение чатов в словаре с id в качестве ключа, а в качестве значения со словарем из названия чата и списка id-шников сообщений из этого чата.
// 6.+ Сделать страницу профиля, располагающуюся по пути /profile/, и ссылку на нее в Header’е мессенджера.
// 7. * Реализовать добавление новых чатов в мессенджер. Для этого нужно связать воедино чаты, хранящиеся в state MessageField, и чаты, отрисовывающиеся в ChatList.
// Подсказки:
// 1) можно перенести state в другой компонент;
// 2) можно прокидывать функции в нижестоящие компоненты в качестве props.

//Дз5
// 1.+ Подключить Redux.
//выполнение
//набрать в терминале npm i redux
//добавить строчку в src/index.jsx import { createStore, applyMiddleware } from 'redux';

// 2. Установить и подключить Redux DevTools Extension.
//выполнение
//набрать в терминале npm i redux-devtools-extension
//добавить строчку в src/index.jsx import { composeWithDevTools } from 'redux-devtools-extension';

// 3. Перенести в Redux чаты.
// выполнение
// сейчас чаты хранятся в state messanger. нужно создать store в redux
//создать хранилище Redux
//создать reducer чатов
//cоздать actions
// 4. Перенести в Redux сообщения.
// 5. Перенести в Redux данные профиля и отображать имя (или любую другую информацию из профиля) в Header’е мессенджера.

