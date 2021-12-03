import { Injectable } from '@angular/core';
import Iuser from './interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: Iuser = {
    id: 1,
    nome: 'Christian',
    sobrenome: 'Todesquine',
    filmes: 'A origem, Um dia depois de amanhã',
    generos: ['ficção', 'terror']
  }

  constructor() { }

  buscarUser(): Iuser{
    return this.user;
  }
}
