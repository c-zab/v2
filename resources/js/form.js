window.Vue = require('vue');

if (process.env.MIX_APP_ENV === 'production') {
  Vue.config.devtools = false;
  Vue.config.debug = false;
  Vue.config.silent = true;
}

Vue.component('contact', require('./components/Contact.vue').default);

import VeeValidate, { Validator } from 'vee-validate';

Vue.use(VeeValidate);

const dict = {
  custom: {
    name: {
      alpha_spaces: "Please enter a valid name",
      max: "Please enter a name no longer than 25 characters",
    },
    email: {
      email: "Please enter a valid email",
    },
    subject: {
      max: "Please enter a subject no longer than 35 characters",
    },
    message: {
      max: "Please enter a message no longer than 200 characters",
    },
  },
};

Validator.localize("en", dict);

new Vue({
  el: '#form',
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      coffeeMessage: false,
      clientName: '',
      errorsBE: {},
    };
  },
  methods: {
    validationSubmit() {
      this.$validator.validate().then(valid => {
        if (!valid) return;

        Axios.post('/messages', {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        })
          .then(this.onSuccess)
          .catch(error => {
            this.errorsBE = error.response.data.errors;
            console.log('Oopsy Doopsy!!! Please try again!');
          });
      });
    },
    onSuccess(response) {
      console.log(response.data.message);
      this.clientName = response.data.clientName;
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
      this.$nextTick(() => {
        this.errors.clear();
        this.$nextTick(() => {
          this.$validator.reset();
        });
      });
      this.coffeeMessage = true;
    },
    geterrorsBE(field) {
      return `${field}`;
    },
    clearInputBE(field) {
      delete this.errorsBE[field];
    },
  },

  mounted() {
    let contact_sec = this.$refs["contact-sec"].offsetTop;
    Event.$emit("offsetContact", contact_sec);
  },

});
