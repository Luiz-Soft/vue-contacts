export default [
  {
    path: '*',
    name: 'notfound',
    component: () => import('../views/NotFound'),
    meta: {
      title: 'Página não encontrada', 
    },
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/list-contacts/ListContacts'),
    meta: {
      title: 'Contacts Index',   
    },
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/contact-details/ContactDetails'),
    meta: {
      title: 'Detalhes',     
    },
  },
  {
    path: '/delete',
    name: 'delete',
    component: () => import('../views/delete-contact/DeleteContact'),
    meta: {
      title: 'Delete Contact',     
    },
  },
  {
    path: '/add',
    name: 'adicionar contato',
    component: () => import('../views/add-contact/AddContact'),
    meta: {
      title: 'Adicionar Contato',     
    },
  },
]
