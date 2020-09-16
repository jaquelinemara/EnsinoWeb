import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from '../disciplina/disciplina.service'
import { Observable } from "rxjs";
import { DisciplinaService } from "./../disciplina.service";
import { Disciplina } from "./../disciplina";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-disciplina-listar',
  templateUrl: './disciplina-listar.component.html',
  styleUrls: ['./disciplina-listar.component.css']
})
export class DisciplinaListarComponent implements OnInit {
  disciplinas: Observable<Disciplina[]>;

  constructor(private disciplinaService: DisciplinaService,
    private router: Router) {}

    ngOnInit() {
      this.reloadData();
    }

    reloadData() {
      this.disciplinas = this.disciplinaService.getdisciplinasList();
    }

    deleteDisciplina(id: number) {
      this.disciplinaService.deleteDisciplina(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }

    DisciplinaDetails(id: number){
      this.router.navigate(['details', id]);
    }

    updateDisciplina(id: number){
      this.router.navigate(['update', id]);
    }
  }

