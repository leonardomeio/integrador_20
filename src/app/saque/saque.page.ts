import { Component, OnInit } from '@angular/core';
import { OperacaoService } from '../operacao.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.page.html',
  styleUrls: ['./saque.page.scss'],
})
export class SaquePage implements OnInit {
  valorSaque: number;
  entrar: number;

  constructor(private service: OperacaoService) { }

  ngOnInit() {
  }

  sacar(){
    let operacao = {};
    operacao['data'] = new Date();
    operacao['nomedaoperaao'] = "Saque";
    operacao['valor'] = this.valorSaque;

    this.service.adicionar(operacao);

  }
  Entrar(){
    let operacao = {};
    operacao['data'] = new Date();
    operacao['nomedocartao'] = "numero";
    operacao['number'] = this.Entrar;

  this.service.entrar(operacao);
  }


}
