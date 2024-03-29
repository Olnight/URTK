import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    date: {
      type: Number,
      required: true
    }
  },

  computed: {
    formattedDate() {
      return new Date(this.date).toLocaleString(navigator.language,
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });  
    //   const options = { year: 'numeric', month: 'short', day: 'numeric' };
    //   return new Date(this.date).toLocaleDateString(navigator.language, options);
    }
  },
  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="new Date(date).toISOString().split('T')[0]">{{ formattedDate }}</time>
      </li>
    </ul>`,
});
