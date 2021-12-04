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
    this.servico.user.nome = this.nome;
    this.servico.user.sobrenome = this.sobrenome;
    this.servico.user.filmes = this.filmes;
    this.servico.user.generos = this.generos;

    this.voltar();

    console.log(this.servico.user);
  }

}
