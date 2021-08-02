import { Component, OnInit } from '@angular/core';
import { LivrosService } from 'src/app/core/service/livros.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  livros: any;

  constructor(
    private service: LivrosService
  ) { }

  ngOnInit(): void {
    this.service.getLivros().subscribe((data)=>{
      this.livros = data;
      console.log(data);
    })
  }

}
