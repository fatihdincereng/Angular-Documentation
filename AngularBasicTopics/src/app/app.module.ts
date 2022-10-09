import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputcomponentComponent } from './inputcomponent/inputcomponent.component';
import { ChildcompoenntComponent } from './childcompoennt/childcompoennt.component';
import { EventlerComponent } from './eventler/eventler.component';
import { OnewayComponent } from './oneway/oneway.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomdirectivesComponent } from './customdirectives/customdirectives.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildlifecycleComponent } from './childlifecycle/childlifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    InputcomponentComponent,
    ChildcompoenntComponent,
    EventlerComponent,
    OnewayComponent,
    DirectiveComponent,
    CustomdirectivesComponent,
    CustomdirectiveDirective,
    TemplateformComponent,
    ReactiveformComponent,
    LifecycleComponent,
    ChildlifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
