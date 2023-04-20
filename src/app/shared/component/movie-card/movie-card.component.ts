import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../model/interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  listOfIdToExport: any[] = [];
  search!: string;
  count!: any;
  @Input() passUrl!: any;
  @Input() propertyBinding!: any;
  constructor() {}

  ngOnInit(): void {}
}
