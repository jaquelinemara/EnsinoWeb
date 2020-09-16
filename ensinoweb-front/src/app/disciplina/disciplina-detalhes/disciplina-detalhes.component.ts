import { Disciplina } from '../disciplina';
import { Component, OnInit, Input } from '@angular/core';
import { DisciplinaService } from '../disciplina.service';
import { DisciplinaListarComponent } from '../disciplina-listar/disciplina-listar.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplina-detalhes',
  templateUrl: './disciplina-detalhes.component.html',
  styleUrls: ['./disciplina-detalhes.component.css']
})
export class DisciplinaDetalhesComponent implements OnInit {

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

  list(){
    this.router.navigate(['Disciplinas']);
  }
}
