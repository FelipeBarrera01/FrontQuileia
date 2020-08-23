import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Conexion, Dispositivo } from '../interfaces/interfaces';
import { DispositivoPage } from '../dispositivo/dispositivo.page';

@Component({
  selector: 'app-common',
  templateUrl: './common.page.html',
  styleUrls: ['./common.page.scss'],
})
export class CommonPage implements OnInit {


  accion: string;
  conexiones: Conexion[] = [];
  dispositivo: Dispositivo = {};
  nombreConexion: string;
  respuesta: string;
  isconexion: boolean;
  arrDispositivo: string[] = ['computador', 'smartphone', 'tablet'];
  siyno: string = '';
  idDispositivo: string;


  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ServiceService,
    private router: Router,
    
  ) {
  }

  ngOnInit() {
    this.dispositivo = {};
    this.getObject();
    this.idDispositivo = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.idDispositivo == null) {
      this.accion = 'Registro dispositivo';
      this.isconexion = true;
    } else {
      this.accion = 'Editar dispositivo';
      this.findById();
    }

  }

  getObject() {
    this.service.getConexiones().subscribe(res => {
      this.conexiones = res as Conexion[];
    });
  }
  guardarDispositivo() {
    if (this.idDispositivo == null) {
      if (this.dispositivo != null) {
        this.verificarConexionRed();
        this.service.registrarDispositivo(this.dispositivo).subscribe(res => {
          this.respuesta = 'Registrado con éxito';
          this.dispositivo = {};
          this.router.navigateByUrl('.', { skipLocationChange: true });
          this.router.navigateByUrl('/dispositivo');
        }, err => {
          this.dispositivo.mac = '';
          this.dispositivo.ip = '';
          this.respuesta = err.error;
        });
      }
    } else {
      this.verificarConexionRed();
      this.service.editarDispositivo(parseInt(this.idDispositivo), this.dispositivo).subscribe(res => {
        this.respuesta = 'Se guardaron los cambios';
        this.dispositivo = {};
        this.router.navigate(['/dispositivo']);
      }, err => {
        this.respuesta = err.error;
      }

      );
    }

  }
  elegirTipo(event: any) {
    this.dispositivo.tipo = event.detail.value;
  }
  isconnected(event: any) {
    if (event.detail.value === 'SI') {
      this.dispositivo.conected = true;
      this.isconexion = true;
    } else {
      this.dispositivo.conected = false;
      this.isconexion = false;
    }
  }

  elegirRed(con: any) {
    this.conexiones.forEach(el => {
      if (el.nombre === con.detail.value) {
        this.dispositivo.conexionActual = el;
      }
    });
  }

  findById() {
    this.service.findDispositivoById(parseInt(this.idDispositivo)).subscribe(res => {
      this.dispositivo = res as Dispositivo;
      console.log(this.dispositivo);
      this.nombreConexion = this.dispositivo.conexionActual == null ? '' : this.dispositivo.conexionActual.nombre;
      if (this.dispositivo.conected) {
        this.siyno = 'SI';
        this.isconexion = true;
      } else {
        this.siyno = 'NO';
        this.isconexion = false;
      }
    });
  }

  verificarConexionRed() {
    if (!this.isconexion) {
      this.dispositivo.conexionActual = null;
    } else {
      this.dispositivo.conexionActual.nombre = this.nombreConexion ;
    }
  }
  
}
