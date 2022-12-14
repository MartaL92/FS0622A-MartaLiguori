import { Component, NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { LoginPage } from "./auth/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { PreferitiComponent } from "./components/preferiti/preferiti.component";
import { UserComponent } from "./components/user/user.component";

const routes: Routes = [
  {
    path: "users",
    component: UserComponent
  },
  {
    path: "",
    component: LoginPage
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "favourite",
    component: PreferitiComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
