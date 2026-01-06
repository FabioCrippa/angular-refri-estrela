import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  whatsappNumber = '551836425611'; // Telefone comercial (confirmar se tem WhatsApp)
  whatsappMessage = 'Olá! Gostaria de saber mais sobre o Guaraná Paulistinha e produtos Vendranelli.';

  openWhatsApp() {
    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
    window.open(url, '_blank');
  }
}
