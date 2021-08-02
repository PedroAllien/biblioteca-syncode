import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LivrosService } from 'src/app/core/service/livros.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() livro: any;
  modalRef!: BsModalRef;
  id: any;
  constructor(
    private service: LivrosService,
    private modalService: BsModalService
  ) { }

  openModal(template: TemplateRef<any>, id: any) {
    this.id = id;
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {
  }

  excluirLivro(){
    this.service.excluirLivro(this.id);
  }

}
