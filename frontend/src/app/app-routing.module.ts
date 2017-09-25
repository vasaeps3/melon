import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
    {
        path: "",
        loadChildren: "./admin/admin.module#AdminModule"
    },
    { path: "login", loadChildren: "./user/login/login.module#LoginModule" },
    { path: "signup", loadChildren: "./user/signup/signup.module#SignupModule" },
    { path: "not-found", loadChildren: "./not-found/not-found.module#NotFoundModule" },
    { path: "**", redirectTo: "not-found" }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutergModule { }
