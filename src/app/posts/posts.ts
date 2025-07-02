import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostCard } from '../../components/post-card/post-card';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-posts',
  imports: [CommonModule, PostCard, Header, Footer],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  postService = inject(PostService);
  posts = this.postService.postsList();
  featuredPosts = this.postService.getFeaturedPosts();
  categories = ['Tecnología', 'Política', 'Deportes'];
}
