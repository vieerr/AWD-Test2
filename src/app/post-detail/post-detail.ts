import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule, DatePipe, Header, Footer],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetail {
  private postService = inject(PostService);
  private route = inject(ActivatedRoute);

  post = this.postService.getPostById(
    Number(this.route.snapshot.paramMap.get('id'))
  );
}
