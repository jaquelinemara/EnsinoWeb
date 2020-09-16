import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisciplinaCadastroComponent } from './disciplina/disciplina-cadastro/disciplina-cadastro.component';
import { DisciplinaDetalhesComponent } from './disciplina/disciplina-detalhes/disciplina-detalhes.component';
import { DisciplinaListarComponent } from './disciplina/disciplina-listar/disciplina-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { DisciplinaAtualizarComponent } from './disciplina/disciplina-atualizar/disciplina-atualizar.component';


@NgModule({
  declarations: [
    AppComponent,
    DisciplinaCadastroComponent,
    DisciplinaDetalhesComponent,
    DisciplinaListarComponent,
    DisciplinaAtualizarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
