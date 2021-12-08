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

  // async buscarPorId(id: number): Promise<void> {
  //   const userPost = {
  //     idUser: 1,
  //   };

  //   const respostaPost = await fetch(`${this.urlPost}/${id}`);
  //   const post: Ipost = await respostaPost.json();

  //   const respostaUser = await fetch(`${this.urlUser}/${userPost.idUser}`);
  //   const user: Iuser = await respostaUser.json();

  //   this.nome = user.nome;
  //   this.sobrenome = user.sobrenome;

  //   this.descricao = post.descricao;
  //   this.foto = post.foto;
  // }

  // async salvar(): Promise<void> {
  //   const userPost = {
  //     idUser: 1,
  //   };

  //   const respostaUser = await fetch(`${this.urlUser}/${userPost.idUser}`);
  //   const user: Iuser = await respostaUser.json();

  //   const novo = {
  //     nome: user.nome,
  //     sobrenome: user.sobrenome,
  //     descricao: this.descricao,
  //     foto: this.foto,
  //   };


  //   console.log(Object.keys(novo));

  //   const body = Object.keys(novo)
  //     .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(novo[k])}`)
  //     .join('&');

  //   await fetch(this.urlPost, { method: 'POST', body: new URLSearchParams(body) });
  //   this.buscar();
  // }

  // async atualizar(id: number): Promise<void> {
  //   const userPost = {
  //     idUser: 1,
  //   };

  //   const respostaUser = await fetch(`${this.urlUser}/${userPost.idUser}`);
  //   const user: Iuser = await respostaUser.json();

  //   const postAtualizado = {
  //     nome: user.nome,
  //     sobrenome: user.sobrenome,
  //     descricao: this.descricao,
  //     foto: this.foto,
  //     curtidas: this.curtidas,
  //   };

  //   const body = Object.keys(postAtualizado)
  //     .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(postAtualizado[k])}`)
  //     .join('&');

  //   await fetch(`${this.urlPost}/${id}`, { method: 'PUT', body: new URLSearchParams(body) });
  //   this.buscar();
  // }


  async remover(id: number): Promise<void> {
    await fetch(`${this.urlPost}/${id}`, { method: 'DELETE' });
    this.buscar();
  }



}
