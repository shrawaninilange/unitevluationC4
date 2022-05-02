const init = {};

import { } from "./action";

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    default:
      return {...store ,todo : [...store.todo, pay]}
  }
};