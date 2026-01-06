import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Cliente de Birigui',
      location: 'Birigui - SP',
      text: 'O Guaraná Paulistinha é um símbolo da nossa cidade! Sempre presente nas festas de família. É tradição!',
      rating: 5
    },
    {
      id: 2,
      name: 'Turista',
      location: 'São Paulo - SP',
      text: 'Sempre que visito Birigui, compro Guaraná Paulistinha como recordação. O sabor é único e especial!',
      rating: 5
    },
    {
      id: 3,
      name: 'Comerciante',
      location: 'Interior de SP',
      text: 'Trabalho com Vendranelli há anos. Preço justo, qualidade impecável e atendimento excelente.',
      rating: 5
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
