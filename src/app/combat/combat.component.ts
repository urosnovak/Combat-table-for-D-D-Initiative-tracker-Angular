import { Component, OnInit } from '@angular/core';

interface Combatant {
  name: string;
  initiative: number;
  health: number;
}

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {
  combatants: Combatant[] = [];
  sortBy: keyof Combatant | undefined;
  name: string | undefined;
  initiative: number | undefined;
  health: number | undefined;

  ngOnInit(): void {
    
  }

  sort(property: keyof Combatant) {
    this.sortBy = property;
    this.combatants.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
  }

  decrementHealth(combatant: Combatant) {
    combatant.health--;
  }

  incrementHealth(combatant: Combatant) {
    combatant.health++;
  }

  addItem() {
    if (this.name && typeof this.initiative !== 'undefined' && typeof this.health !== 'undefined') {
      this.combatants.push({ name: this.name, initiative: this.initiative, health: this.health });
      this.name = '';
      this.initiative = undefined;
      this.health = undefined;
    }
  }

  remove(combatant: Combatant) {
    this.combatants = this.combatants.filter(c => c !== combatant);
  }
}
