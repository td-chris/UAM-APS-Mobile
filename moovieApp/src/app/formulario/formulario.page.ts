import { Component, OnInit } from '@angular/core';

import Iuser from '../interfaces/iuser';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  public url = 'http://localhost:3333/users';
  public users: Iuser[] = [];
  public user: Iuser;
  public id: number;
  public nome: string;
  public sobrenome: string;
  public filmes: string;
  public generos: string;

  constructor() {
    
  }

  ngOnInit() {
  }

  voltar(): void {
    window.history.back()
  }

  async buscar(): Promise<void> {
    const resposta = await fetch(this.url);
    this.users = await resposta.json();
  }

  async atualizar(id: number): Promise<void> {
    const produtoAtualizado = {
      id: 1,
      nome: this.nome,
      sobrenome: this.sobrenome,
      filmes: this.filmes,
      generos: this.generos
    };

    const body = Object.keys(produtoAtualizado)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(produtoAtualizado[k])}`)
      .join('&');

    await fetch(`${this.url}/${produtoAtualizado.id}`, { method: 'PUT', body: new URLSearchParams(body) });
    this.buscar();

    this.voltar();
  }

}
