import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import Iuser from '../interfaces/iuser';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  public user: Iuser;
  public servico: UserService;

  public nome: string;
  public sobrenome: string;
  public filmes: string;
  public generos: string;

  constructor(userServico: UserService) {
    this.servico = userServico;
  }

  ngOnInit() {
  }

  voltar(): void {
    window.history.back()
  }

  atualizar(): void{
    this.servico.salvar({
      nome: this.nome,
      sobrenome: this.sobrenome,
      filmes: this.filmes,
      generos: this.generos
    })

    this.voltar();

    console.log(this.servico.users);
  }

  remover(indice: number): void {
    this.servico.deletar(indice);
    console.log(this.servico.users);
  }

}
