import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PostDetail } from './post-detail/post-detail';
import { Posts } from './posts/posts';

export const routes: Routes = [
  { path: '', component: Home, title: 'ESPE NEWS' },
  { path: 'posts', component: Posts, title: 'ESPE NEWS - Todas las Noticias' },
  { path: 'posts/:id', component: PostDetail, title: 'ESPE NEWS - Detalles de Noticia' },
  { path: '**', redirectTo: '' },
];
