import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conexion } from '../interfaces/interfaces';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-common-con',
  templateUrl: './common-con.page.html',
  styleUrls: ['./common-con.page.scss'],
})
export class CommonConPage implements OnInit {
  accion: string;
  respuesta: string;
  red: string;
  conexion: Conexion = {};
  idConexion: string;

  constructor(private activatedRoute: ActivatedRoute, private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.idConexion = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.idConexion == null) {
      this.accion = 'Registro conexión';
    } else {
      this.accion = 'Editar conexión';
      this.findById();
    }
  }
  elegirTipo(event?: any) {
    if (event.detail.value == 'Wifi') {
      this.conexion.tipo = 1;
      this.red = 'Wifi';
    } else {
      this.conexion.tipo = 2;
      this.red = 'Lan';
    }

  }
  elegirTipoCifrado(event: any) {
    this.conexion.tipoCifrado = event.detail.value;
  }
  guardarConexion() {
    if(this.idConexion == null){
      this.service.registrarConexion(this.conexion).subscribe(res => {
        this.respuesta = 'Conexión registrada';
        this.router.navigate(['/conexion']);
      });
    }else{
      this.service.editarConexion( parseInt(this.idConexion), this.conexion).subscribe(res => {
        this.respuesta = 'Conexión editada';
        this.router.navigate(['/conexion']);
      });     
    }
   
  }
  findById() {
    this.service.findConexionById(parseInt(this.idConexion)).subscribe(res => {
      this.conexion = res as Conexion;
      if (this.conexion.tipo === 1) {
        this.red = 'Wifi';
      } else {
        this.red = 'Lan';
      }
    });
  }
}
