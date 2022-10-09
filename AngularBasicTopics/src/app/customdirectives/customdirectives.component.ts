import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DirectiveComponent } from '../directive/directive.component';

@Component({
  selector: 'app-customdirectives',
  templateUrl: './customdirectives.component.html',
  styleUrls: ['./customdirectives.component.css']
})
export class CustomdirectivesComponent implements OnInit, AfterViewInit {

  @ViewChild('p')
  p!: ElementRef;

  @ViewChild(DirectiveComponent)
  directivecomponent!: DirectiveComponent;

  @ViewChild("someElement") domReference:any;

  name:number;




  constructor(private el: ElementRef, private cd: ChangeDetectorRef) {
    this.name=10;
  }


  


  ngAfterViewInit(): void {
    this.petiketininicindengec();
    this.directivecomponent.deger = "sd";
    this.cd.detectChanges();
    console.log(this.domReference);
    this.domReference.nativeElement.autofocus=true;
    
  }

  ngOnInit(): void {

  }

  petiketininicindengec() {
    this.p.nativeElement.style.color = 'orange';
    this.p.nativeElement.innerHTML = "InnerHtml";
  }




}
