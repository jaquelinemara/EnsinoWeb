import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
import { DisciplinaListarComponent } from './disciplina-listar/disciplina-listar.component';
import { DisciplinaAtualizarComponent } from './disciplina-atualizar/disciplina-atualizar.component';
import { DisciplinaDetalhesComponent } from './disciplina-detalhes/disciplina-detalhes.component';



@NgModule({
  declarations: [DisciplinaCadastroComponent, DisciplinaListarComponent, DisciplinaAtualizarComponent, DisciplinaDetalhesComponent],
  imports: [
    CommonModule
  ]
})
export class DisciplinaModule { }
