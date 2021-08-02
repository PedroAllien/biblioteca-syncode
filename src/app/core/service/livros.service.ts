import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface cadastrarLivro{
  nomeLivro: any,
  capaLink: any,
  dataPublicacao: any,
  nomeAutor: any,
  edicao: any,
  resumoLivro: any
}

@Injectable({
  providedIn: 'root'
  
})
export class LivrosService {

  private authorization = {
    "xAuthorization": "3DF53382-6595-4ED8-AAD5-B41EFCFD0165",
    
    
  };

  constructor(
    private http: HttpClient
  ) { }
   
  postLivros(livros: cadastrarLivro){
    return this.http.post("https://home.adaptei.com.br/biblioteca/api/livro", livros, {headers: this.authorization});
  }

  getLivros(){
    return this.http.get(`https://home.adaptei.com.br/biblioteca/api/livro`, {headers: this.authorization});
  }

  excluirLivro(idLivro: any){
    return this.http.delete(`https://home.adaptei.com.br/biblioteca/api/livro/${idLivro}`, {headers: this.authorization}).subscribe(res=>{location.reload()});
  }

}
