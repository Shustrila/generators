export default class AttackTeam {
  constructor(arr) {
    if (arr === undefined) throw new TypeError('no characters');
    this._characters = arr.sort((a, b) => (a.attack + a.attackRange - b.attack - b.attackRange));
  }

  * [Symbol.iterator]() {
    for (const i of this._characters) {
      yield i;
    }
  }
}
