import { Component } from '@angular/core';
import { BreakpointService } from '../breakpoint.service';
import { Layout } from '../items/items.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent {
  constructor(private breakpointService: BreakpointService) {}

  layout$ = this.breakpointService.getResponsiveValue<Layout>({
    mobile: 'list',
    tablet: 'list',
    desktop: 'cards'
  });
}
