import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dispositivo',
    pathMatch: 'full'
  },
 {
    path: 'dispositivo',
    loadChildren: () => import('./dispositivo/dispositivo.module').then( m => m.DispositivoPageModule)
  },
  {
    path: 'conexion',
    loadChildren: () => import('./conexion/conexion.module').then( m => m.ConexionPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'common',
    loadChildren: () => import('./common/common.module').then( m => m.CommonPageModule)
  },
  {
    path: 'common/:id',
    loadChildren: () => import('./common/common.module').then( m => m.CommonPageModule)
  },
  {
    path: 'common-con/:id',
    loadChildren: () => import('./common-con/common-con.module').then( m => m.CommonConPageModule)
  },
  {
    path: 'common-con',
    loadChildren: () => import('./common-con/common-con.module').then( m => m.CommonConPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
