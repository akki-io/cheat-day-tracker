<template>
  <div class="mt-4">
    <dl class="rounded-lg bg-gray-800 shadow-lg grid grid-cols-4">
      <div class="flex flex-col p-4 sm:p-6 text-center border-gray-700 sm:border-0 sm:border-r">
        <dt class="order-2 mt-2 leading-6 font-medium text-gray-500 text-xs sm:text-lg">days</dt>
        <dd class="order-1 text-4xl sm:text-5xl font-extrabold text-indigo-400">{{ days }}</dd>
      </div>
      <div class="flex flex-col p-4 sm:p-6 text-center border-gray-700 sm:border-0 sm:border-r">
        <dt class="order-2 mt-2 leading-6 font-medium text-gray-500 text-xs sm:text-lg">hours</dt>
        <dd class="order-1 text-4xl sm:text-5xl font-extrabold text-indigo-400">{{ hours }}</dd>
      </div>
      <div class="flex flex-col p-4 sm:p-6 text-center border-gray-700 sm:border-0 sm:border-r">
        <dt class="order-2 mt-2 leading-6 font-medium text-gray-500 text-xs sm:text-lg">minutes</dt>
        <dd class="order-1 text-4xl sm:text-5xl font-extrabold text-indigo-400">{{ minutes }}</dd>
      </div>
      <div class="flex flex-col p-4 sm:p-6 text-center">
        <dt class="order-2 mt-2 leading-6 font-medium text-gray-500 text-xs sm:text-lg">seconds</dt>
        <dd class="order-1 text-4xl sm:text-5xl font-extrabold text-indigo-400">{{ seconds }}</dd>
      </div>
    </dl>
    <p class="mt-2 tracking-tight font-extrabold text-white sm:mt-2 text-center text-indigo-400 text-xl sm:text-2xl">
      ago
    </p>
  </div>
</template>

<script>
export default {
  name: 'TimeSince',
  data() {
    return {
      interval: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      intervals: {
        second: 1000,
        minute: 1000 * 60,
        hour: 1000 * 60 * 60,
        day: 1000 * 60 * 60 * 24,
      },
    };
  },
  props: {
    date: {
      required: true,
      type: Date,
    },
  },
  created() {
    this.interval = setInterval(() => {
      this.updateDiffs();
    }, 1000);

    this.updateDiffs();
  },
  unmounted() {
    clearInterval(this.interval);
  },
  methods: {
    updateDiffs() {
      let diff = Math.abs(Date.now() - this.date.getTime());

      this.days = Math.floor(diff / this.intervals.day);
      diff -= this.days * this.intervals.day;

      this.hours = Math.floor(diff / this.intervals.hour);
      diff -= this.hours * this.intervals.hour;

      this.minutes = Math.floor(diff / this.intervals.minute);
      diff -= this.minutes * this.intervals.minute;

      this.seconds = Math.floor(diff / this.intervals.second);
    },
  },
};
</script>
