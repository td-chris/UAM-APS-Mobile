import { Component } from '@angular/core';
import { CadastroPage } from '../cadastro/cadastro.page';

interface Ilogin{
  email: string;
  senha: string;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}



}
