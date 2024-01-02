import { calculateRatio, multiplyRatio } from "../utils/calculateRatio";

interface List {
  name: string;
  recipe: undefined | number;
  myAmount: undefined | number;
}

class Ingredient {
  #list: List[];
  #standard: string | undefined;

  constructor(list: List[] = []) {
    this.#list = list;
  }

  add({ name, recipe }: { name: string; recipe: number }) {
    this.#list.push({ name, recipe, myAmount: undefined });
  }

  delete(name: string) {
    this.#list = this.#list.filter((el) => {
      el.name !== name;
    });
  }

  setStandard(name: string) {
    this.#standard = name;
  }

  getStandardAmount() {
    const standard = this.#list.find((el) => el.name === this.#standard);
    if (standard?.recipe !== undefined && standard?.myAmount !== undefined) {
      const ratio = calculateRatio(standard.recipe, standard.myAmount);

      this.#list.forEach((el) => {
        if (el.recipe !== undefined) {
          el.myAmount = multiplyRatio(el.recipe, ratio);
        }
      });
    }
  }

  getList() {
    const list = this.#list;
    return list;
  }
}

export default Ingredient;
