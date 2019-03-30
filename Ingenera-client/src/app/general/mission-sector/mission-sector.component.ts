import {
  Component, OnInit, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-mission-sector',
  templateUrl: './mission-sector.component.html',
  styleUrls: ['./mission-sector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MissionSectorComponent implements OnInit {

  SectionMainTitle;

  sections = [
    {
      title: 'NTIC', section: [
        { id: 1, name: 'CONCEPTION ELECTRONIQUE' },
        { id: 2, name: 'INFORMATIQUE' },
        { id: 3, name: 'SYSTEMES EMBARQUES' },
        { id: 4, name: 'MECATRONIQUE' },
        { id: 5, name: 'REALITE VIRTUELLE & AUGMENTEE' },
        { id: 6, name: 'CYBERSECURITE' },
      ]
    },
    {
      title: 'DATA SCIENCES', section: [
        { id: 7, name: 'IA & ALGORITHME' },
        { id: 8, name: 'BUSINESS INTELLIGENCE' },
        { id: 9, name: 'BIG DATA' },

      ]
    },
    {
      title: 'TRANSPORT & MOBILITE', section: [
        { id: 10, name: 'AUTOMOBILE' },
        { id: 11, name: 'FERROVIAIRE' },
        { id: 12, name: 'AERONAUTIQUE' },
        { id: 13, name: 'NAVAL' },
      ]
    },
    {
      title: 'MANUFACTURING', section: [
        { id: 14, name: 'R&D' },
        { id: 15, name: 'PRODUCTION' },
        { id: 16, name: 'LOGISTIQUE' },
        { id: 17, name: 'QUALITE' },
        { id: 18, name: 'ACHATS' },
      ]
    },
    {
      title: 'PROJECT MANAGEMENT', section: [
        { id: 19, name: 'R&STRATEGIE & INTELLIGENCE ECONOMIQUE' },
        { id: 20, name: 'FINANCEMENT DE L’INNOVATION' },
        { id: 21, name: 'TRANSFORMATION DIGITALE' },
        { id: 22, name: 'CONDUITE DU CHANGEMENT' },
      ]
    },
    {
      title: 'GESTION DE L’ACTIVITE', section: [
        { id: 23, name: 'DEVELOPPEMENT COMMERCIAL' },
        { id: 24, name: 'CONTROLE DE GESTION' },
        { id: 25, name: 'AUDIT & FINANCE' },
        { id: 26, name: 'COMPTABILITE' },
        { id: 27, name: 'DEVELOPPEMENT DURABLE RSE' },
        { id: 28, name: 'MANAGEMENT & ORGANISATON RH' },

      ]
    }
    ,
    {
      title: 'ENVIRONNEMENT & ENERGIE', section: [
        { id: 29, name: 'ENVIRONNEMENT & ENERGIE' }]
    },

    {
      title: 'SANTE', section: [
        { id: 30, name: 'SANTE' }
      ]
    }
    , {
      title: 'AGROALIMENTAIRE', section: [
        { id: 31, name: 'AGROALIMENTAIRE' }
      ]
    }

    , {
      title: 'BTP, GENIE CIVIL & URBANISME', section: [
        { id: 32, name: 'BTP, GENIE CIVIL & URBANISME' }
      ]
    }
  ]

  selectedSections = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
    32: false
  }

  constructor() { }

  ngOnInit() {
    console.log(this.SectionMainTitle)
  }

  selectSection(section) {
    this.selectedSections[section.id] = !this.selectedSections[section.id]
  }
}
