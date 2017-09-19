import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cliente: Cliente = new Cliente();

  nome;
  profissoes = [
    {id: 1, nome: 'Programador'},
    {id: 2, nome: 'Empresário'},
    {id: 3, nome: 'Outra'}
  ];
  profissao = 3;
  salvar(usuario: NgForm) {
    console.log(usuario.value);
    console.log(this.cliente);
  }
}
