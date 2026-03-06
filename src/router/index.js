import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Contacts from '../views/Contacts.vue'
import Forbidden from '../views/403.vue'
import NotFound from '../views/404.vue'

export const routes = [
  // cs
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contacts', name: 'Contacts', component: Contacts },
  { path: '/403', name: 'Forbidden', component: Forbidden },

  // en
  { path: '/en/', name: 'HomeEn', component: Home },
  { path: '/en/projects', name: 'ProjectsEn', component: Projects },
  { path: '/en/contacts', name: 'ContactsEn', component: Contacts },
  { path: '/en/403', name: 'ForbiddenEn', component: Forbidden },

  { path: '/:pathMatch(.*)*', name: 'NotFoundEn', component: NotFound }
]