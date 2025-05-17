import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, CommonModule],  // Add CommonModule here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shrishti_decors';

  images = [
    { src: 'assets/image1.jpeg', alt: 'Decor 1', title: 'Elegant Wall Art', description: 'Beautiful handcrafted design.' },
    { src: 'assets/image2.jpeg', alt: 'Decor 2', title: 'Metal Sculpture', description: 'Unique metal wall decoration.' },
    { src: 'assets/image3.jpeg', alt: 'Decor 3', title: 'Abstract Painting', description: 'Modern artistic touch.' },
    { src: 'assets/image4.jpeg', alt: 'Decor 4', title: 'Wooden Frame', description: 'Rustic wooden decor piece.' },
    { src: 'assets/image5.jpeg', alt: 'Decor 5', title: 'Glass Artwork', description: 'Elegant glass wall decor.' },
        { src: 'assets/image6.jpeg', alt: 'Decor 6', title: 'Glass Artwork', description: 'Elegant glass wall decor.' },
            { src: 'assets/image7.jpeg', alt: 'Decor 7', title: 'Glass Artwork', description: 'Elegant glass wall decor.' }
  ];
}