<template>
  <q-page padding>
		<q-list
			class="q-mb-md"
			bordered
			padding>
		  <q-item-label header>Settings</q-item-label>

		  <q-item tag="label" v-ripple>
		    <q-item-section>
		      <q-item-label>Show 12 hour time format</q-item-label>
		    </q-item-section>
		    <q-item-section side >
		      <q-toggle
		      	v-model="show12HourTimeFormat"
		      	color="blue" />
		    </q-item-section>
		  </q-item>

		  <q-item tag="label" v-ripple>
		    <q-item-section>
		      <q-item-label>Show tasks in one list</q-item-label>
		    </q-item-section>
		    <q-item-section side >
		      <q-toggle
		      	v-model="showTasksInOneList"
		      	color="blue" />
		    </q-item-section>
		  </q-item>

			<q-item tag="label" v-ripple>
		    <q-item-section>
		      <q-item-label>Completed tasks list color</q-item-label>
		    </q-item-section>
		    <q-item-section side >
		      <q-btn
            no-caps
            outline
            flat
						class="color-btn"
          >
            <template slot="default">
              <div class="custom-selector-btn">
                <div
                  class="box-color"
                  :style="`background: ${taskCompletedColor};`"
                ></div>
                <q-icon
                  name="expand_more"
                  class="box-color-icon"
                ></q-icon>
              </div>
            </template>
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-color
                v-model="taskCompletedColor"
                format-mode="rgba"
              />
            </q-popup-proxy>
          </q-btn>
		    </q-item-section>
		  </q-item>

			<q-item tag="label" v-ripple>
		    <q-item-section>
		      <q-item-label>Not completed tasks list color</q-item-label>
		    </q-item-section>
		    <q-item-section side >
		      <q-btn
            no-caps
            outline
            flat
						class="color-btn"
          >
            <template slot="default">
              <div class="custom-selector-btn">
                <div
                  class="box-color"
                  :style="`background: ${taskNotCompletedColor};`"
                ></div>
                <q-icon
                  name="expand_more"
                  class="box-color-icon"
                ></q-icon>
              </div>
            </template>
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-color
                v-model="taskNotCompletedColor"
                format-mode="rgba"
              />
            </q-popup-proxy>
          </q-btn>
		    </q-item-section>
		  </q-item>

		</q-list>

		<q-list bordered padding>
		  <q-item-label header>More</q-item-label>

		  <q-item
		  	to="/settings/help"
		  	tag="label"
		  	v-ripple>
		    <q-item-section>
		      <q-item-label>Help</q-item-label>
		    </q-item-section>
		    <q-item-section side >
		      <q-icon name="chevron_right" /> 
		    </q-item-section>
		  </q-item>

		  <q-item
		  	@click="visitOurWebsite"
		  	tag="label"
		  	v-ripple>
		    <q-item-section>
		      <q-item-label>Visit our website</q-item-label>
		    </q-item-section>
		    <q-item-section side >
		      <q-icon name="chevron_right" /> 
		    </q-item-section>
		  </q-item>

		  <q-item
		  	@click="emailUs"
		  	tag="label"
		  	v-ripple>
		    <q-item-section>
		      <q-item-label>Email us</q-item-label>
		    </q-item-section>
		    <q-item-section side >
		      <q-icon name="chevron_right" /> 
		    </q-item-section>
		  </q-item>

		</q-list>

  </q-page>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { openURL } from 'quasar'

	export default {
		computed: {
			...mapGetters('settings', ['settings']),
			show12HourTimeFormat: {
				get() {
					return this.settings.show12HourTimeFormat
				},
				set(value) {
					this.setShow12HourTimeFormat(value)
				} 
			},
			showTasksInOneList: {
				get() {
					return this.settings.showTasksInOneList
				},
				set(value) {
					this.setShowTasksInOneList(value)
				}
			},
			taskCompletedColor: {
				get() {
					return this.settings.taskCompletedColor
				},
				set(value) {
					this.setTaskCompletedColor(value)
				}
			},
			taskNotCompletedColor: {
				get() {
					return this.settings.taskNotCompletedColor
				},
				set(value) {
					this.setTaskNotCompletedColor(value)
				}
			},
		},
		methods: {
			...mapActions('settings', ['setShow12HourTimeFormat', 'setShowTasksInOneList', 'setTaskCompletedColor', 'setTaskNotCompletedColor']),
			visitOurWebsite() {
				openURL('http://www.google.com')
			},
			emailUs() {
				window.location.href = 'mailto:hello@awesometodo?subject=Awesome Todo Feedback'
			}
		}
	}
</script>

<style lang="scss">
.q-btn.color-btn {
	.q-btn__wrapper {
		padding: 0;
		border-radius: 10px;
	}
	.custom-selector-btn {
		background: #f9f9f9;
		padding: 10px;
		display: inline-flex;
		align-items: center;
		border-radius: 10px;
		.box-color {
			width: 32px;
			height: 25px;
			border-radius: 5px;
			border: solid 1px #dadbdd;
		}
		.box-color-icon {
			font-size: .75em;
			margin-left: .9em;
		}
	}
	.custom-selector-label {
		font-size: .9em;
		margin-left: 2em;
		font-weight: normal;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		color: #1b1e24;
	}
}
	
</style>
