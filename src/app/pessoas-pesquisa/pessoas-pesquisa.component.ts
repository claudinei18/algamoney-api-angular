import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  {
  pessoas = [
    {nome: 'Claudinei', cidade: 'Contagem', estado: 'Minas Gerais', status: 'ativo'}
    ];
}
