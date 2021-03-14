<template>
  <div class="min-h-screen bg-gray-900 relative overflow-hidden">
    <div class="mx-auto max-w-md px-4 py-8 sm:px-6 sm:max-w-4xl">
      <div class="w-full">
        <p class="tracking-tight font-extrabold text-gray-300 text-center text-4xl sm:text-6xl">Last Cheat Meal Was</p>
        <time-since v-if="!loading" :date="dateSince"> </time-since>
        <p class="mt-4 tracking-tight font-bold text-gray-300 text-3xl sm:text-3xl text-center md:text-left">
          Cheat Meal History
        </p>
        <div class="rounded-lg bg-gray-800 shadow-lg overflow-hidden mt-4">
          <ul class="divide-y divide-gray-700">
            <li v-for="item in items" :key="item.id" class="px-4 py-4 sm:px-6">
              <div class="flex flex-col sm:flex-row space-x-2 sm:space-x-4 items-center">
                <div class="image">
                  <img class="sm:w-24 w-full rounded-xl" :src="item.image_url" alt="" />
                </div>
                <div class="content text-center sm:text-left mt-4 sm:mt-0">
                  <p class="text-xl font-medium text-gray-300">
                    {{ item.description }}
                  </p>
                  <p class="text-base text-indigo-400">
                    Secretly enjoyed this meal on
                    <time>{{ item.date | moment('dddd, MMMM Do YYYY') }}</time>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <footer-component></footer-component>
      </div>
    </div>
  </div>
</template>

<script>
import { API } from 'aws-amplify';
import { historyByDate } from '@/graphql/queries';
import TimeSince from '@/components/TimeSince';
import FooterComponent from '@/components/Footer';

export default {
  name: 'App',
  components: {
    TimeSince,
    FooterComponent,
  },
  async created() {
    await this.getItems();
  },
  data() {
    return {
      loading: true,
      items: [],
      dateSince: null,
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
      this.dateSince = new Date(Date.parse(this.items[0].date));
      this.dateSince.setDate(this.dateSince.getDate() + 1);
      this.loading = false;
    },
  },
};
</script>
