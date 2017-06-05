import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Services from './components/Services.vue';

export const routes = [
  { path: '/', component: Home  },
  { path: '/about', component: About  },
  { path: '/contact', component: Contact  },
  { path: '/services', component: Services}
];
