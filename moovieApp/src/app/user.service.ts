import { Injectable } from '@angular/core';
import Iuser from './interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: Iuser = {
    id: 1,
    nome: 'Sem nome',
    sobrenome: '-',
    filmes: '-',
    generos: '-'
  }

  constructor() { }

  buscarUser(): Iuser{
    return this.user;
  }
}
