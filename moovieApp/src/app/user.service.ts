import { Injectable } from '@angular/core';
import Iuser from './interfaces/iuser';
// import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}
  

  
  
}
  
  // public users: Iuser[] = [
  //   // {
  //   //   id: 1,
  //   //   nome: 'Sem nome',
  //   //   sobrenome: '-',
  //   //   filmes: '-',
  //   //   generos: '-'
  //   // }
  // ] 
    
    
  // private storage: Storage;

  // constructor(storage: Storage) {
  //   this.storage = storage;
  //   this.storage.create().then(() => console.log('Armazenamento criado'));
  //   this.storage.get('users')
  //     .then(users => this.users.push(...users))
  //     .catch(() => this.storage.set('usuarios', this.users));
  // }

  // salvar(user: Iuser): void {
  //   user.id = this.users.length + 1;
  //   this.users.push(user);
  //   this.storage.set('usuarios', this.users);
  // }
  
  // deletar(indice: number): void {
  //   this.users.splice(indice - 1, 1);
  //   this.atualizarIds();
  //   this.storage.set('users', this.users);
  // }

  // atualizarIds(): void {
  //   this.users.forEach(user => user.id = this.users.indexOf(user) + 1);
  // }

  // buscarUser(): Iuser[]{
  //   return this.users;
  // }
// }
