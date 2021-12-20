import { Component, OnInit } from '@angular/core';
import { OperacaoService } from '../operacao.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.page.html',
  styleUrls: ['./extrato.page.scss'],
})
export class ExtratoPage implements OnInit {

  operacoes: any;
  constructor(private service: OperacaoService) { }

  ngOnInit() {
    this.service.extrato().subscribe(data => {
      this.operacoes = data.map(e => {
        return {
          id: e.payload.doc.id,
          nomeOperacao: e.payload.doc.data()['nome']
        }
      })
    });
    
  }

}
