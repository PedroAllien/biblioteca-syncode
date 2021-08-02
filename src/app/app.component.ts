import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LivrosService } from './core/service/livros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'biblioteca-syncode';

  formulario!: FormGroup;
  livros: any = [];
  /*
  nomeLivro = new FormControl('', Validators.required);
  capaLink = new FormControl('', Validators.required);
  dataPublicacao = new FormControl('', Validators.required);
  nomeAutor = new FormControl('', Validators.required);
  edicao = new FormControl('', Validators.required);
  resumoLivro = new FormControl('', Validators.required);
  */
  
  constructor(
    private service: LivrosService,
    private form: FormBuilder
  ) { }
  ngOnInit(): void {
    this.formularioLivros();
    this.service.getLivros().subscribe((data)=>{
      this.livros = data;
    })
  }
  formularioLivros(){
    this.formulario = this.form.group({
      nomeLivro: [null, Validators.required],
      capaLink: [null, Validators.required],
      dataPublicacao: [null, Validators.required],
      nomeAutor: [null, Validators.required],
      edicao: [null, Validators.required],
      resumoLivro: [null, Validators.required]

    })
  }

  cadastrarLivro(){
    this.service.postLivros(
      this.formulario.value
    ).subscribe((data)=>{
      console.log(data);
      this.reload();
    })
    console.log(this.formulario.value);
  }
  reload(){
    location.reload()
  }

}
