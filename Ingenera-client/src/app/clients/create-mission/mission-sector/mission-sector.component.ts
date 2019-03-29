import { Component, OnInit ,  Input,
  Output, ViewEncapsulation, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mission-sector',
  templateUrl: './mission-sector.component.html',
  styleUrls: ['./mission-sector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MissionSectorComponent implements OnInit {

  @Input() sections: []
  @Input() SectionTitle: string;
  @Output() sectionSelected = new EventEmitter;
  SectionMainTitle
  constructor() { }

  ngOnInit() {
   
    this.SectionMainTitle = this.SectionTitle
    console.log( this.SectionMainTitle)
  }

}
