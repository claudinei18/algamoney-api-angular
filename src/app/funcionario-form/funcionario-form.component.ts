import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent  {
  nome = 'Claudinei';
  adicionado = false;
  ultimoId = 0;
  @Output() funcionarioAdicionado = new EventEmitter();

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
    this.adicionado = true;
    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }



}
