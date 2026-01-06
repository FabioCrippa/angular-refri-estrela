import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  size: string;
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  flavors = ['Guaraná Paulistinha', 'Cola', 'Laranja', 'Limão', 'Uva'];
  
  products: Product[] = [
    { id: 1, name: 'PET Grande', size: '3 Litros', image: '/assets/tubaina-estrela.png' },
    { id: 2, name: 'PET Família', size: '2 Litros', image: '/assets/tubaina-estrela.png' },
    { id: 3, name: 'PET Personal', size: '600ml', image: '/assets/tubaina-estrela.png' },
    { id: 4, name: 'Lata', size: '350ml', image: '/assets/tubaina-estrela.png' },
    { id: 5, name: 'Vidro Retornável', size: '600ml', image: '/assets/tubaina-estrela.png' },
    { id: 6, name: 'Vidro', size: '284ml', image: '/assets/tubaina-estrela.png' }
  ];
}
