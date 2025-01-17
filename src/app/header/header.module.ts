// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module'; // Импортируем наш модуль

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule], // Добавляем HeaderModule в imports
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}