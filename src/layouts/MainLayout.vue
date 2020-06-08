<template>
  <q-layout view="lHh Lpr lFf">
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
          Автовокзал
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          <q-btn to="/" flat round color="black" icon="mdi-facebook" />
          <q-btn to="/" flat round color="black" icon="mdi-twitter" />
          <q-btn to="/" flat round color="black" icon="mdi-instagram" />
        </q-item-label>
        <MenuLink
          v-for="link in menuLinks"
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
import MenuLink from 'components/MenuLink'

export default {
  name: 'MainLayout',

  components: {
    MenuLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      menuLinks: [
        {
          title: 'Головна',
          // caption: 'example.dev',
          icon: 'school',
          link: '/'
        },
        {
          title: 'Інформація',
          // caption: 'example.dev',
          icon: 'code',
          link: '/information'
        },
        {
          title: 'Автостанції',
          // caption: 'example.dev',
          icon: 'chat',
          link: '/stations'
        },
        {
          title: 'Про нас',
          // caption: 'example.dev',
          icon: 'record_voice_over',
          link: '/about'
        },
        {
          title: 'Контакти',
          // caption: 'example.dev',
          icon: 'rss_feed',
          link: '/contacts'
        }
      ]
    }
  }
}
</script>
