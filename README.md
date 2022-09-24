# goit-node-hw-01

Запусти команди в терміналі і зроби окремий скріншот результату виконання кожної команди.

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

![GitHub actions settings](./image/actionlist.png)

# Отримуємо контакт по id

node index.js --action="get" --id=5

![GitHub actions settings](./image/actionGetId5.png)

# Додаємо контакт

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"

![GitHub actions settings](./image/actionAddContact.png)

# Видаляємо контакт

node index.js --action="remove" --id=3

![GitHub actions settings](./image/actionRemoveId3.png)
