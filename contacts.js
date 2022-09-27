const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

const Error = {
  INVALID_ID: "No contact with such ID.",
};

const write = async (newContact) => {
  await fs.writeFile(contactsPath, JSON.stringify(newContact, null, 2));
};

// TODO: функції для работи з контактами
async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
  } catch {
    console.log(Error.INVALID_ID);
  }
}

async function getContactById(contactId) {
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
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return null;
    }
    const [result] = contacts.splice(index, 1);
    write(contacts);
    return result;
  } catch {
    console.log(Error.INVALID_ID);
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = { id: nanoid(), name, email, phone };
    contacts.push(newContact);
    write(contacts);
    return newContact;
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
