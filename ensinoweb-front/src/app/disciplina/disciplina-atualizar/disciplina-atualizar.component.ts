import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../disciplina';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinaService } from '../disciplina.service';

@Component({
  selector: 'app-disciplina-atualizar',
  templateUrl: './disciplina-atualizar.component.html',
  styleUrls: ['./disciplina-atualizar.component.css']
})
export class DisciplinaAtualizarComponent implements OnInit {

  id: number;
  Disciplina: Disciplina;

  constructor(private route: ActivatedRoute,private router: Router,
    private DisciplinaService: DisciplinaService) { }

  ngOnInit() {
    this.Disciplina = new Disciplina();

    this.id = this.route.snapshot.params['id'];

    this.DisciplinaService.getDisciplina(this.id)
      .subscribe(data => {
        console.log(data)
        this.Disciplina = data;
      }, error => console.log(error));
  }

  updateDisciplina() {
    this.DisciplinaService.updateDisciplina(this.id, this.Disciplina)
      .subscribe(data => {
        console.log(data);
        this.Disciplina = new Disciplina();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateDisciplina();
  }

  gotoList() {
    this.router.navigate(['/disciplinas']);
  }
}
