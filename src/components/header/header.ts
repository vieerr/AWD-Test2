import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgFor, Contact],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  siteTitle = 'Sitio de Noticias';
  navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/posts', label: 'Noticias' },
  ];
item: any;
}
