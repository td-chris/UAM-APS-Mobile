import { Component } from '@angular/core';

import { UserService } from '../user.service';
import Iuser from '../interfaces/iuser';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss']
})
export class AccountPage {
  public user: Iuser;
  private servico: UserService;

  constructor(userServico: UserService) {
    this.servico = userServico;
    this.user = this.servico.buscarUser()
  }

}
