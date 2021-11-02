import { Component, OnInit } from '@angular/core';


interface Iuser {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
}



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor() { 
    this.user;
   }

  ngOnInit() {
  }

    public user: Iuser = {
      nome: '',
      sobrenome: '',
      email: '',
      senha: '',
    };

    username: string = ''
    userLastName: string = ''
    email: string = ''
    password: string = ''

    cadastrar(): void{
      this.user.nome = this.username;
      this.user.sobrenome = this.userLastName;
      this.user.email = this.email;
      this.user.senha = this.password;

      if(this.user.nome == ''){
        alert("Favor preencher o seu nome!")
      }else if(this.user.sobrenome == ''){
        alert("Favor preencher o seu sobrenome!")
      }else if(this.user.email == ''){
        alert("Favor preencher o seu email!")
      }else if(this.user.senha == ''){
        alert("Favor preencher a sua senha!")
      }else {
        alert('Cadastro concluido')
      }
    }
    
}
