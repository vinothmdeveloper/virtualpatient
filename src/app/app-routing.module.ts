import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'select-virtual-hospital',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'select-virtual-hospital',
    loadChildren: () => import('./select-virtual-hospital/select-virtual-hospital.module').then( m => m.SelectVirtualHospitalPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'search-virtual-hospital/:id',
    resolve: {
      svData: DataResolverService
    },
    loadChildren: () => import('./search-virtual-hospital/search-virtual-hospital.module').then( m => m.SearchVirtualHospitalPageModule),
    canActivate: [AuthGuard]
  },  
  {
    path: 'pt-profile',
    loadChildren: () => import('./pt-profile/pt-profile.module').then( m => m.PtProfilePageModule),
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
