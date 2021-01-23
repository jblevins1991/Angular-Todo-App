import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationlistComponent } from './header/navigationlist/navigationlist.component';
import { NavigationitemComponent } from './header/navigationitem/navigationitem.component';
import { TodosComponent } from './todos/todos.component';
import { TodoInputComponent } from './todo-input/todo-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationlistComponent,
    NavigationitemComponent,
    TodosComponent,
    TodoInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
