import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Location {
  id: number;
  name: string;
  address: string;
  type: 'supermarket' | 'distributor';
}

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {
  locations: Location[] = [
    { id: 1, name: 'Matriz - Indústria Vendranelli', address: 'Birigui - SP', type: 'distributor' },
    { id: 2, name: 'Distribuição Regional', address: '120 municípios no Estado de São Paulo', type: 'distributor' },
    { id: 3, name: '8.000 a 10.000 Pontos de Venda', address: 'Atendimento semanal em toda região', type: 'supermarket' },
  ];

  whatsappDistributor = '551836425611'; // Telefone comercial (confirmar se tem WhatsApp)
  whatsappMessage = 'Olá! Tenho interesse em ser distribuidor dos produtos Vendranelli.';

  openWhatsApp() {
    const url = `https://wa.me/${this.whatsappDistributor}?text=${encodeURIComponent(this.whatsappMessage)}`;
    window.open(url, '_blank');
  }

  openMap(location: Location) {
    const query = encodeURIComponent(location.address);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(url, '_blank');
  }
}
