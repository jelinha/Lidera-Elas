import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-novidades',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './novidades.html',
  styleUrl: './novidades.css'
})
export class Novidades {
  readonly novidades;

  constructor(mockData: MockDataService) {
    this.novidades = mockData.novidadesPublicas;
  }
}
