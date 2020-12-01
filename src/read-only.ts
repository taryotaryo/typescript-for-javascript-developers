export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('ryota');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'taryo';
