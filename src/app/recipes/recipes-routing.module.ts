import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.servise';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';

const recipesRoutes: Routes = [
    { 
        path: '', 
        component: RecipesComponent,
        children: [
            {path: '', component: RecipeStartComponent},
            {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
            {path: ':id', component: RecipesDetailComponent},
            {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
        ] 
    },
];
@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)],
    providers: [AuthGuard],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}