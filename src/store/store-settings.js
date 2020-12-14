import { LocalStorage } from 'quasar'

const state = {
	settings: {
		show12HourTimeFormat: false,
		showTasksInOneList: false,
		taskCompletedColor: 'rgb(129,199,132)',
		taskNotCompletedColor: 'rgb(255,183,77)',
		taskCompletedSecondaryColor: 'rgb(129,199,132,0.2)',
		taskNotCompletedSecondaryColor: 'rgb(255,183,77,0.2)',
	}
}

const mutations = {
	setShow12HourTimeFormat(state, value) {
		state.settings.show12HourTimeFormat = value
	},
	setShowTasksInOneList(state, value) {
		state.settings.showTasksInOneList = value
	},
	setSettings(state, settings) {
		Object.assign(state.settings, settings)
	},
	setTaskCompletedColor(state, value) {
		state.settings.taskCompletedColor = value
	},
	setTaskNotCompletedColor(state, value) {
		state.settings.taskNotCompletedColor = value
	},
	setTaskCompletedSecondaryColor(state, value) {
		state.settings.taskCompletedSecondaryColor = value
	},
	setTaskNotCompletedSecondaryColor(state, value) {
		state.settings.taskNotCompletedSecondaryColor = value
	}
}

const actions = {
	setShow12HourTimeFormat({ commit, dispatch }, value) {
		commit('setShow12HourTimeFormat', value)
		dispatch('saveSettings')
	},
	setShowTasksInOneList({ commit, dispatch }, value) {
		commit('setShowTasksInOneList', value)
		dispatch('saveSettings')
	},
	setTaskCompletedColor({ commit, dispatch }, value) {
		commit('setTaskCompletedColor', value)
		const secondaryColor =  value.slice(0, value.length - 1) + ",0.2)";
		commit('setTaskCompletedSecondaryColor', secondaryColor)
		dispatch('saveSettings')
	},
	setTaskNotCompletedColor({ commit, dispatch }, value) {
		commit('setTaskNotCompletedColor', value)
		const secondaryColor =  value.slice(0, value.length - 1) + ",0.2)";
		commit('setTaskNotCompletedSecondaryColor', secondaryColor)
		dispatch('saveSettings')
	},
	saveSettings({ state }) {
		LocalStorage.set('settings', state.settings)
	},
	getSettings({ commit }) {
		let settings = LocalStorage.getItem('settings')
		if (settings) {
			commit('setSettings', settings)
		}
	}
}

const getters = {
	settings: state => {
		return state.settings
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}