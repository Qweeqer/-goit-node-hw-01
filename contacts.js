const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

// Розкоментуйте і запиши значення
const contactsPath = path.join(__dirname, "db/contacts.json");

const Error = {
  INVALID_ID: "No contact with such ID.",
};

const write = async (payload) => {
  await fs.writeFile(contactsPath, JSON.stringify(payload, null, 2));
};

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код
  const contacts = fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

function getContactById(contactId) {
  // ...твій код
  const contacts = listContacts();
  const goal = contacts.find((contact) => contact.id === contactId);
  return goal || Error.INVALID_ID;
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
  const contacts = listContacts();
  const payload = { id: nanoid(), name, email, phone };
  contacts.push(payload);
  write(contacts);
  return payload;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
