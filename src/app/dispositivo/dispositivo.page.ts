import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Dispositivo } from '../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
})
export class DispositivoPage implements OnInit {

  dispositivos: Dispositivo[] = [];

  constructor(private service: ServiceService, private router: Router, private cdRef:ChangeDetectorRef) {
 
  }

  ngOnInit() {
    this.getDispositivo();
  }
  doRerender() {

    this.cdRef.detectChanges();
    this.getDispositivo();
  }
  getDispositivo() {
    this.service.getDispositivos().subscribe(res => {
      this.dispositivos = res as Dispositivo[];
    });
  }
  eliminarDispositivo(id: number) {
    this.service.eliminarDispositivo(id).subscribe(res => {
      this.dispositivos = this.dispositivos.filter(dispositivo => dispositivo.id != id);
    });
  }

}
