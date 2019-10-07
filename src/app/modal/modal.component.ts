import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal.content';
@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html'
})

export class ModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.name = 'World';
  }
}
