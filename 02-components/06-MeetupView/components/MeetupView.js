import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupCover from './MeetupCover.js';
import MeetupInfo from './MeetupInfo.js'; 
import MeetupAgenda from './MeetupAgenda.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';
import MeetupDescription from './MeetupDescription.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupAgendaItem,
    MeetupAgenda,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>

      <meetup-cover :title="meetup.title"  :image="meetup.image"></meetup-cover>
      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description"></meetup-description>
            <h3>Программа</h3>
            <meetup-agenda v-if="meetup.agenda.length !== 0" :agenda="meetup.agenda"></meetup-agenda>
            <ui-alert v-else>Программа пока пуста...</ui-alert>
          </div>
          <div class="meetup__aside">
          <meetup-info :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date"></meetup-info>
          </div>
        </div>
      </ui-container>
    </div>`,
});
