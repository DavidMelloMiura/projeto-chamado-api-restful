import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatosUrl = 'http://localhost:8080/contatos'

  constructor() { }

  listar() {

  }
}
