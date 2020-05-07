export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const state = () => ({
    isActive: false
});

export const mutations = {
    [TOGGLE_MODAL](state) {
        state.isActive = !state.isActive;
    }
};

export const actions = {
    toggleModal({ commit }) {
        commit(TOGGLE_MODAL);
    }
};
