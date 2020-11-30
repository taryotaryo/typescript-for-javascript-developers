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
  secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this.secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }
}

let card = new MynumberCard('taryo', 1234567890);
console.log(card.owner);
