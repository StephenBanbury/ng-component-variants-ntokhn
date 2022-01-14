import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemsComponent } from './items/items.component';
import { ContentComponent } from './content/content.component';
import { BreakpointService } from './breakpoint.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SidebarComponent, ItemsComponent, ContentComponent],
  bootstrap: [AppComponent],
  providers: [BreakpointService]
})
export class AppModule {}
