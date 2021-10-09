// esse arquivo tem a função de importar as rotas dos modulos criados em outros projetos
//Esse arquivo contem as rotas para todos os links dos projetos feitos anteriormente
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//importando o componete inicio
import {InicioComponent} from './inicio';

//faz export das rotas pra ficar disponivel pro modulo principal
export const routes = [
    {    //o path vazio significa que é a raiz do projeto,e é redirecionado para o dashboard
        path: '',
        component: InicioComponent
    },
    /// '...' significa que pega todas as rotas e concatena aqui,do dashboard
    //acrescente todas as rotas dos componentes criados nos outros projetos
    // ...DashboardRoutes,


];

//ngmodule é o que diz se e decorador ou nao
@NgModule({
    imports:[
        //forRoot garante que e modulo unico da aplicação
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule ]
})

export class AppRoutingModule{}