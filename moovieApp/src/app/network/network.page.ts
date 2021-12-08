import { Component } from '@angular/core';

import Ipost from '../interfaces/ipost';
import Iuser from '../interfaces/iuser';

@Component({
  selector: 'app-network',
  templateUrl: 'network.page.html',
  styleUrls: ['network.page.scss']
})
export class NetworkPage {

  public urlPost = 'http://localhost:3333/posts';
  public urlUser = 'http://localhost:3333/users';

  public user: Iuser;

  public idUser: number;
  public nome: string;
  public sobrenome: string;

  public posts: Ipost[] = [];
  public post: Ipost;

  public idPost: number;
  public descricao: string;
  public foto: string;

  constructor(){
    this.buscar();
  }

  recarregar(): void {
    window.location.reload()
  }


  async buscar(): Promise<void> {
    const resposta = await fetch(this.urlPost);
    this.posts = await resposta.json();
  }

  async remover(id: number): Promise<void> {
    await fetch(`${this.urlPost}/${id}`, { method: 'DELETE' });
    this.buscar();
  }

}
