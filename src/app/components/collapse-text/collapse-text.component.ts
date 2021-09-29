import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapse-text',
  templateUrl: './collapse-text.component.html',
  styleUrls: ['./collapse-text.component.scss']
})
export class CollapseTextComponent implements OnInit {

  constructor() { }
  @Input() text: any;
  @Input() index: number;
  active : boolean = false;
  ngOnInit(): void {
  }
  getIdCheckBox(id : number) : string{
    return 'checkBox' + id;
  }
  getCollapseContainerId(id : number) : string{
    return 'collapseExample' + id;
  }
  toggleIsShown() : void{
    this.active = !this.active;
  }

}
