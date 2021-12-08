import { Component } from '@angular/core';

// import { UserService } from '../user.service';
import Iuser from '../interfaces/iuser';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class AccountPage {
 
  public url = 'http://localhost:3333/users';
  public users: Iuser[] = [];
  public user: Iuser;
  public id: number;
  public nome: string;
  public sobrenome: string;
  public filmes: string;
  public generos: string;


  constructor(){
    this.buscar();
  }

  recarregar(): void {
    window.location.reload()
  }

  async buscar(): Promise<void> {
    const resposta = await fetch(this.url);
    this.users = await resposta.json();
  }

  async buscarPorId(id: number): Promise<void> {
    const resposta = await fetch(`${this.url}/${id}`);
    const user: Iuser = await resposta.json();

    this.nome = user.nome;
    this.sobrenome = user.sobrenome;
    this.filmes = user.filmes;
    this.generos = user.generos;
  }

  async salvar(): Promise<void> {
    const novo = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      filmes: this.filmes,
      generos: this.generos,
    };

    console.log(Object.keys(novo));

    const body = Object.keys(novo)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(novo[k])}`)
      .join('&');

    await fetch(this.url, { method: 'POST', body: new URLSearchParams(body) });
    this.buscar();
  }

  async atualizar(id: number): Promise<void> {
    const userAtualizado = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      filmes: this.filmes,
      generos: this.generos
    };

    const body = Object.keys(userAtualizado)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(userAtualizado[k])}`)
      .join('&');

    await fetch(`${this.url}/${id}`, { method: 'PUT', body: new URLSearchParams(body) });
    this.buscar();
  }

  async remover(id: number): Promise<void> {
    await fetch(`${this.url}/${id}`, { method: 'DELETE' });
    this.buscar();
  }

}
