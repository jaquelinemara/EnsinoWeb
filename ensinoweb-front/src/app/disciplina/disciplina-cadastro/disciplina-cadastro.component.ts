import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../disciplina';
import { DisciplinaService } from '../disciplina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.css']
})
export class DisciplinaCadastroComponent implements OnInit {

  disciplina: Disciplina = new Disciplina();
  submitted: boolean;

  constructor(private disciplinaService: DisciplinaService,
    private route: Router) { }

  ngOnInit() {
  }

  save() {
    this.disciplinaService
    .createDisciplina(this.disciplina).subscribe(data => {
      console.log(data)
      this.disciplina = new Disciplina();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.route.navigate(['/disciplinas'])
  }
}
