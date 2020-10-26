import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainTileComponent } from './main-tile/main-tile.component';
import { LogosTileComponent } from './logos-tile/logos-tile.component';
import { ColorsTileComponent } from './colors-tile/colors-tile.component';
import { CardsTileComponent } from './cards-tile/cards-tile.component';
import { FooterTileComponent } from './footer-tile/footer-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTileComponent,
    LogosTileComponent,
    ColorsTileComponent,
    CardsTileComponent,
    FooterTileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
