import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomdirectivesComponent } from './customdirectives/customdirectives.component';
import { DirectiveComponent } from './directive/directive.component';
import { EventlerComponent } from './eventler/eventler.component';
import { InputcomponentComponent } from './inputcomponent/inputcomponent.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { OnewayComponent } from './oneway/oneway.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformComponent } from './templateform/templateform.component';

const routes: Routes = [
  { path: 'input-component', component:InputcomponentComponent  },
  { path: 'event-component', component:EventlerComponent  },
  { path: 'oneway-component', component:OnewayComponent  },
  { path: 'directive-component', component:DirectiveComponent  },
  { path: 'customdirective-component', component:CustomdirectivesComponent  },
  { path: 'templateform-component', component:TemplateformComponent  },
  { path: 'reactiveform-component', component:ReactiveformComponent  },
  { path: 'lifecycle-component', component:LifecycleComponent  },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
