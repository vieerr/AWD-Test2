import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { PostCard } from '../../components/post-card/post-card';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule, Footer, Header],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
}
