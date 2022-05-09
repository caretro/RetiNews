import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsDetailComponent } from './pages/news-detail/news-detail.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
  // { path: "home", loadChildren: () => import("./pages/home/home.module").then(m => m.HomeModule) },
  // { path: "admin", loadChildren: () => import("./pages/admin/admin.module").then(m => m.AdminModule) },
  { path: "news/:id", component: NewsDetailComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
