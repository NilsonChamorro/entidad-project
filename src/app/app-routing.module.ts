import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'alumno-list',
    loadChildren: () => import('./alumno/alumno-list/alumno-list.module').then( m => m.AlumnoListPageModule)
  },
  {
    path: 'alumno-edit',
    loadChildren: () => import('./alumno/alumno-edit/alumno-edit.module').then( m => m.AlumnoEditPageModule)
  },
  {
    path: 'alumno-edit/:id',
    loadChildren: () => import('./alumno/alumno-edit/alumno-edit.module').then( m => m.AlumnoEditPageModule)
  },
  {
    path: 'profesor-list',
    loadChildren: () => import('./profesor/profesor-list/profesor-list.module').then( m => m.ProfesorListPageModule)
  },
  {
    path: 'profesor-edit',
    loadChildren: () => import('./profesor/profesor-edit/profesor-edit.module').then( m => m.ProfesorEditPageModule)
  },
  {
    path: 'profesor-edit/:id',
    loadChildren: () => import('./profesor/profesor-edit/profesor-edit.module').then( m => m.ProfesorEditPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
