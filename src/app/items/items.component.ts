import { Component, Input } from '@angular/core';

export type Layout = 'list' | 'cards';

export interface Item {
  id: number;
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  @Input()
  layout: Layout = 'list';

  items = Array(20).fill(null);
}
