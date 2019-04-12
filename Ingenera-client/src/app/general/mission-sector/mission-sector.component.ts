import {
  Component, OnInit, ViewEncapsulation, Output, EventEmitter
} from '@angular/core';
@Component({
  selector: 'app-mission-sector',
  templateUrl: './mission-sector.component.html',
  styleUrls: ['./mission-sector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MissionSectorComponent implements OnInit {
  @Output() sellectedSectors = new EventEmitter;
  sectionslist = [
    { id: 1, name: 'CONCEPTION ELECTRONIQUE', title: 'NTIC', active: false },
    { id: 2, name: 'INFORMATIQUE', title: 'NTIC', active: false },
    { id: 3, name: 'SYSTEMES EMBARQUES', title: 'NTIC', active: false },
    { id: 4, name: 'MECATRONIQUE', title: 'NTIC', active: false },
    { id: 5, name: 'REALITE VIRTUELLE & AUGMENTEE', title: 'NTIC', active: false },
    { id: 6, name: 'CYBERSECURITE', title: 'NTIC', active: false },
    { id: 7, name: 'IA & ALGORITHME', title: 'DATA SCIENCES', active: false },
    { id: 8, name: 'BUSINESS INTELLIGENCE', title: 'DATA SCIENCES', active: false },
    { id: 9, name: 'BIG DATA', title: 'DATA SCIENCES', active: false },
    { id: 10, name: 'AUTOMOBILE', title: 'TRANSPORT & MOBILITE', active: false },
    { id: 11, name: 'FERROVIAIRE', title: 'TRANSPORT & MOBILITE', active: false },
    { id: 12, name: 'AERONAUTIQUE', title: 'TRANSPORT & MOBILITE', active: false },
    { id: 13, name: 'NAVAL', title: 'TRANSPORT & MOBILITE', active: false },
    { id: 14, name: 'R&D', title: 'MANUFACTURING', active: false },
    { id: 15, name: 'PRODUCTION', title: 'MANUFACTURING', active: false },
    { id: 16, name: 'LOGISTIQUE', title: 'MANUFACTURING', active: false },
    { id: 17, name: 'QUALITE', title: 'MANUFACTURING', active: false },
    { id: 18, name: 'ACHATS', title: 'MANUFACTURING', active: false },
    { id: 19, name: 'R&STRATEGIE & INTELLIGENCE ECONOMIQUE', title: 'PROJECT MANAGEMENT', active: false },
    { id: 20, name: 'FINANCEMENT DE L’INNOVATION', title: 'PROJECT MANAGEMENT', active: false },
    { id: 21, name: 'TRANSFORMATION DIGITALE', title: 'PROJECT MANAGEMENT', active: false },
    { id: 22, name: 'CONDUITE DU CHANGEMENT', title: 'PROJECT MANAGEMENT', active: false },
    { id: 23, name: 'DEVELOPPEMENT COMMERCIAL', title: 'GESTION DE L’ACTIVITE', active: false },
    { id: 24, name: 'CONTROLE DE GESTION', title: 'GESTION DE L’ACTIVITE', active: false },
    { id: 25, name: 'AUDIT & FINANCE', title: 'GESTION DE L’ACTIVITE', active: false },
    { id: 26, name: 'COMPTABILITE', title: 'GESTION DE L’ACTIVITE', active: false },
    { id: 27, name: 'DEVELOPPEMENT DURABLE RSE', title: 'GESTION DE L’ACTIVITE', active: false },
    { id: 28, name: 'MANAGEMENT & ORGANISATON RH', title: 'GESTION DE L’ACTIVITE', active: false },
    { id: 29, name: 'ENVIRONNEMENT & ENERGIE', title: 'ENVIRONNEMENT & ENERGIE', active: false },
    { id: 30, name: 'SANTE', title: 'SANTE', active: false },
    { id: 31, name: 'AGROALIMENTAIRE', title: 'AGROALIMENTAIRE', active: false },
    { id: 32, name: 'BTP, GENIE CIVIL & URBANISME', title: 'BTP, GENIE CIVIL & URBANISME', active: false }
  ]
  sections = [
    {
      title: 'NTIC', section: [
        { id: 1, name: 'CONCEPTION ELECTRONIQUE', title: 'NTIC' },
        { id: 2, name: 'INFORMATIQUE', title: 'NTIC' },
        { id: 3, name: 'SYSTEMES EMBARQUES', title: 'NTIC' },
        { id: 4, name: 'MECATRONIQUE', title: 'NTIC' },
        { id: 5, name: 'REALITE VIRTUELLE & AUGMENTEE', title: 'NTIC' },
        { id: 6, name: 'CYBERSECURITE', title: 'NTIC' },
      ]
    },
    {
      title: 'DATA SCIENCES', section: [
        { id: 7, name: 'IA & ALGORITHME', title: 'DATA SCIENCES' },
        { id: 8, name: 'BUSINESS INTELLIGENCE', title: 'DATA SCIENCES' },
        { id: 9, name: 'BIG DATA', title: 'DATA SCIENCES' },

      ]
    },
    {
      title: 'TRANSPORT & MOBILITE', section: [
        { id: 10, name: 'AUTOMOBILE', title: 'TRANSPORT & MOBILITE', },
        { id: 11, name: 'FERROVIAIRE', title: 'TRANSPORT & MOBILITE', },
        { id: 12, name: 'AERONAUTIQUE', title: 'TRANSPORT & MOBILITE', },
        { id: 13, name: 'NAVAL', title: 'TRANSPORT & MOBILITE', },
      ]
    },
    {
      title: 'MANUFACTURING', section: [
        { id: 14, name: 'R&D', title: 'MANUFACTURING' },
        { id: 15, name: 'PRODUCTION', title: 'MANUFACTURING' },
        { id: 16, name: 'LOGISTIQUE', title: 'MANUFACTURING' },
        { id: 17, name: 'QUALITE', title: 'MANUFACTURING' },
        { id: 18, name: 'ACHATS', title: 'MANUFACTURING' },
      ]
    },
    {
      title: 'PROJECT MANAGEMENT', section: [
        { id: 19, name: 'R&STRATEGIE & INTELLIGENCE ECONOMIQUE', title: 'PROJECT MANAGEMENT' },
        { id: 20, name: 'FINANCEMENT DE L’INNOVATION', title: 'PROJECT MANAGEMENT' },
        { id: 21, name: 'TRANSFORMATION DIGITALE', title: 'PROJECT MANAGEMENT' },
        { id: 22, name: 'CONDUITE DU CHANGEMENT', title: 'PROJECT MANAGEMENT' },
      ]
    },
    {
      title: 'GESTION DE L’ACTIVITE', section: [
        { id: 23, name: 'DEVELOPPEMENT COMMERCIAL', title: 'GESTION DE L’ACTIVITE' },
        { id: 24, name: 'CONTROLE DE GESTION', title: 'GESTION DE L’ACTIVITE' },
        { id: 25, name: 'AUDIT & FINANCE', title: 'GESTION DE L’ACTIVITE' },
        { id: 26, name: 'COMPTABILITE', title: 'GESTION DE L’ACTIVITE' },
        { id: 27, name: 'DEVELOPPEMENT DURABLE RSE', title: 'GESTION DE L’ACTIVITE' },
        { id: 28, name: 'MANAGEMENT & ORGANISATON RH', title: 'GESTION DE L’ACTIVITE' },

      ]
    }
    ,
    {
      title: 'ENVIRONNEMENT & ENERGIE', section: [
        { id: 29, name: 'ENVIRONNEMENT & ENERGIE', title: 'ENVIRONNEMENT & ENERGIE' }]
    },

    {
      title: 'SANTE', section: [
        { id: 30, name: 'SANTE', title: 'SANTE' }
      ]
    }
    , {
      title: 'AGROALIMENTAIRE', section: [
        { id: 31, name: 'AGROALIMENTAIRE', title: 'AGROALIMENTAIRE' }
      ]
    }

    , {
      title: 'BTP, GENIE CIVIL & URBANISME', section: [
        { id: 32, name: 'BTP, GENIE CIVIL & URBANISME', title: 'BTP, GENIE CIVIL & URBANISME' }
      ]
    }
  ]
  
  constructor() { 
  }
  ngOnInit() {
  }
  selectedSections={
   // 0:false,
    1:false,
    2:false,
    3:false,
    4:false,
    5:false,
    6:false,
    7:false,
    8:false,
    9:false,
    10:false,
    11:false,
    12:false,
    13:false,
    14:false,
    15:false,
    16:false,
    17:false,
    18:false,
    19:false,
    20:false,
    21:false,
    22:false,
    23:false,
    24:false,
    25:false,
    26:false,
    27:false,
    28:false,
    29:false,
    30:false,
    31:false,
    32:false,
  }
  selectSection(section) {
    this.sectionslist[section.id-1].active = !this.sectionslist[section.id-1].active
    this.selectedSections[section.id] = !this.selectedSections[section.id]
    this.sellectedSectors.emit(this.sectionslist); // send the updated list to parent
  }
}
