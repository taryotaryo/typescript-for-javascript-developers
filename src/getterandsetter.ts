export {};

// * owner
//    * 所有者
//    * 初期化時に設定できる
//    * 途中で変更できない
//    * 参照できる。
// * secretNumber
//    * 個人番号
//    * 初期化時に設定できる
//    * 途中で変更できる
//    * 参照できる

class MynumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MynumberCard('taryo', 1234567890);
// card.owner = 'ryota';
console.log(card.owner);
// console.log(card.secretNumber);
// card._secretNumber;
console.log(card.debugPrint());
card.secretNumber = 11111111111;
console.log(card.debugPrint());
console.log(card.secretNumber);
