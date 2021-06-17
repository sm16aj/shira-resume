import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-right',
  templateUrl: './project-right.component.html',
  styleUrls: ['./project-right.component.css'],
})
export class ProjectRightComponent implements OnInit {
  @Input() title!: string;
  @Input() count!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() link!: string;
  constructor() {}

  ngOnInit(): void {}
}
