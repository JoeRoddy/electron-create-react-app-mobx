import { observable, computed, action } from "mobx";

class WordStore {
  @observable name;

  @action("Change name")
  changeWordTo(name) {
    this.name = name;
  }

  @computed
  get currentWord() {
    return this.name;
  }
}

const wordStore = new WordStore();
export default wordStore;
