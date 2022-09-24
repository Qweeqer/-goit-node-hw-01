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
async function listContacts() {
  // ...твій код
  try {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
  } catch {
    console.log(Error.INVALID_ID);
  }
}

async function getContactById(contactId) {
  // ...твій код
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      throw new Error(Error.INVALID_ID);
    }
    return contacts[index];
  } catch {
    console.log(Error.INVALID_ID);
  }
}

async function removeContact(contactId) {
  // ...твій код
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return null;
    }
    const removedContact = contacts[index];
    contacts.splice(index, 1);
    write(contacts);
    return removedContact;
  } catch {
    console.log(Error.INVALID_ID);
  }
}

async function addContact(name, email, phone) {
  // ...твій код
  try {
    const contacts = await listContacts();
    const payload = { id: nanoid(), name, email, phone };
    contacts.push(payload);
    write(contacts);
    return payload;
  } catch {
    console.log(Error.INVALID_ID);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
