import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-gallery',
  templateUrl: './car-gallery.component.html',
  styleUrls: ['./car-gallery.component.css'],
})
export class CarGalleryComponent implements OnInit {
  @Input() title!: string;
  @Input() count!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() link!: string;
  constructor() {}

  ngOnInit(): void {}
}
