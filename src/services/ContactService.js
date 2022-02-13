



export default {
  storageID: "24",

  async getContacts() {
    return JSON.parse(JSON.stringify(localStorage));
  },
  async getContactDetails(id) {
    return id;
  },
  async setContact(id, contact) {
    return id+contact;
  },
  async createContact(contato) {
    return localStorage.setItem(Math.random() , JSON.stringify(contato));
  },
};
