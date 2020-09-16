import { DisciplinaDetalhesComponent } from './disciplina/disciplina-detalhes/disciplina-detalhes.component';
import { DisciplinaCadastroComponent } from './disciplina/disciplina-cadastro/disciplina-cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinaListarComponent } from './disciplina/disciplina-listar/disciplina-listar.component';
import { DisciplinaAtualizarComponent } from './disciplina/disciplina-atualizar/disciplina-atualizar.component';

const routes: Routes = [
  { path: '', redirectTo: 'disciplina', pathMatch: 'full' },
  { path: 'disciplinas', component: DisciplinaListarComponent },
  { path: 'add', component: DisciplinaCadastroComponent },
  { path: 'update/:id', component: DisciplinaAtualizarComponent },
  { path: 'details/:id', component: DisciplinaDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
