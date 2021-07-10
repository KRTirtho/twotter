import { User } from "@/assets/users";
import { createStore } from "vuex";

export interface UserStore {
  user: User | null;
}

export default createStore<UserStore>({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
  },
  modules: {},
});
