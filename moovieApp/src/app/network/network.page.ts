import { Component } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: 'network.page.html',
  styleUrls: ['network.page.scss']
})
export class NetworkPage {
  public objeto_feed = {
    nome: "Marty McFly",
    data: "November 5, 1955",
    descricao: "Wait a minute. Wait a minute, Doc ...",
    qntd_likes: 12,
    qntd_comments: 4,
    tempo_comment: "11h ago"
  }

  constructor() {}

}
