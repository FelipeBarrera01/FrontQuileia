import { Component, OnInit } from '@angular/core';
import { Conexion } from '../interfaces/interfaces';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-conexion',
  templateUrl: './conexion.page.html',
  styleUrls: ['./conexion.page.scss'],
})
export class ConexionPage implements OnInit {
  
  conexiones: Conexion[] = [];

  constructor(private service: ServiceService) { 
    this.getConexion();
  }


  ngOnInit() {
    
  }
  eliminarConexion(id: number){
    this.service.eliminarConexion(id).subscribe(res => {
      this.conexiones = this.conexiones.filter(con => con.id != id);
    });
 
  }
  getConexion() {
    this.service.getConexiones().subscribe(res => {
      this.conexiones = res as Conexion[];
    });
  }
}
