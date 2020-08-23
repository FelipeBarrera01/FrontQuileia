import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Historico } from '../interfaces/interfaces';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {
  historicos: Historico[] = [];
  copiaHistoricos: Historico[] = [];
  termMac: string;
  termRed: string;
  constructor(private service: ServiceService) {

  }

  ngOnInit() {
    this.getHistoricos();
  }
  getHistoricos() {
    this.service.getHistorico().subscribe(res => {
      this.historicos = res as Historico[];
      this.copiaHistoricos = this.historicos;
    });
  }
  filtroCon(event: any) {
    this.termMac = '';
    if (this.termRed === '' || this.termRed == null || this.termRed === undefined) {
      this.historicos = this.copiaHistoricos;
    } else {
      this.service.filtroConexion(event.detail.value).subscribe(res => {
        this.historicos = res as Historico[];
      });
    }

  }
  filtroMac(event: any) {
    this.termRed = '';
    if (this.termMac === '' || this.termMac == null || this.termMac === undefined) {
      this.historicos = this.copiaHistoricos;
    } else {
      this.service.filtroMac(event.detail.value).subscribe(res => {
        this.historicos = res as Historico[];
      });
    }

  }

}
