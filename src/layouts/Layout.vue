<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="item in essentialLinks" 
          :key="item.title"
          :to="item.link"
          :icon="item.icon"
          :label="item.title" />
      </q-tabs>
    </q-footer>

    <q-drawer
      :breakpoint="767"
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Todo',
          icon: 'list',
          link: '/'
        },
        {
          title: 'Settings',
          icon: 'settings',
          link: '/settings'
        },
      ]
    }
  }
}
</script>
<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
</style>