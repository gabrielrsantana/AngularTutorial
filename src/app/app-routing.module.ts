// esse arquivo tem a função de importar as rotas dos modulos criados em outros projetos
//Esse arquivo contem as rotas para todos os links dos projetos feitos anteriormente
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//importando o componete inicio
import { ComponenteComponent } from "./componente";
import { DiretivasComponent } from "./diretivas";
import {InicioComponent} from './inicio';
import { ModulosComponent } from "./modulos";
import { PipesComponent } from "./pipes";
import { TypescriptComponent } from "./typescript";

//faz export das rotas pra ficar disponivel pro modulo principal
export const routes = [
    {    //o path vazio significa que é a raiz do projeto,e se tiver redicrectTo é redirecionado 
        path: '',
        component: InicioComponent
    },
    {    
        path: 'typescript',
        component: TypescriptComponent

    },
    {    
        path: 'modulos',
        component: ModulosComponent

    },
    {    
        path: 'componentes',
        component: ComponenteComponent

    },
    {    
        path: 'diretivas',
        component: DiretivasComponent

    },
    {    
        path: 'pipes',
        component: PipesComponent

    }

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