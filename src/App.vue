<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <h3>{{ item.date }}</h3>
      <p>{{ item.description }}</p>
      <h3>{{ item.image_url }}</h3>
    </div>
  </div>
</template>

<script>
import { API } from 'aws-amplify';
import { historyByDate } from './graphql/queries';

export default {
  name: 'App',
  async created() {
    await this.getItems();
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getItems() {
      const items = await API.graphql({
        query: historyByDate,
        variables: {
          type: 'CHEAT',
          sortDirection: 'DESC',
        },
      });
      this.items = items.data.historyByDate.items;
    },
  },
};
</script>
