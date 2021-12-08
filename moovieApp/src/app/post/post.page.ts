import { Component, OnInit } from '@angular/core';
import Ipost from '../interfaces/ipost';
import Iuser from '../interfaces/iuser';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  public sanitizer: DomSanitizer;
  public foto: SafeResourceUrl;

  ngOnInit() {
  }

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
  public fotoPost: string;
  public curtidas: number;
  public data: string;


  constructor(sanit: DomSanitizer){
    this.buscar();
    this.sanitizer = sanit;
  }

  recarregar(): void {
    window.location.reload()
  }

  async buscar(): Promise<void> {
    const resposta = await fetch(this.urlPost);
    this.posts = await resposta.json();
  }

  async salvar(): Promise<void> {
    const userPost = {
      idUser: 1,
    };

    const respostaUser = await fetch(`${this.urlUser}/${userPost.idUser}`);
    const user: Iuser = await respostaUser.json();

    const novo = {
      nome: user.nome,
      sobrenome: user.sobrenome,
      descricao: this.descricao,
      foto: this.foto
    };

    console.log(Object.keys(novo));

    const body = Object.keys(novo)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(novo[k])}`)
      .join('&');

    await fetch(this.urlPost, { method: 'POST', body: new URLSearchParams(body) });
    this.buscar();
  }

  async fotografar(): Promise<void> {
    const imagem = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      allowEditing: false,
    });

    const imagemUrl = imagem.webPath;
    this.foto = this.sanitizer.bypassSecurityTrustResourceUrl(imagemUrl);
  }

}
