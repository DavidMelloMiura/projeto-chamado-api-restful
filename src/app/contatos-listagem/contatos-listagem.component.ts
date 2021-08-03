import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';


@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {


 
  contato = [
    {id: 1, nome: 'David', email:'david@provedor.com.br'},
    {id: 2, nome: 'Charles', email:'charles@provedor.com.br'},
  ]
  


  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    
  }


}

