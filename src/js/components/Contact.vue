<template>
  <div id="contact" ref="contact-sec">
    <div class="container">
      <Title data-aos="fade-right" title="CONTACT" />
      <div>
        <section class="mb-0">
          <div
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <h4
              class="text-center w-responsive mx-auto mb-0"
            >
              Have a question or want to work together?
            </h4>
          </div>
        </section>
      </div>
    </div>
    <slot
      :form="form"
      :message="message"
      :errorsBE="errorsBE"
      :validationSubmit="validationSubmit"
      :geterrorsBE="geterrorsBE"
      :clearInputBE="clearInputBE"
    />
  </div>
</template>

<script>
import { Validator } from 'vee-validate';
import Title from './includes/Title';

const dict = {
  custom: {
    name: {
      alpha_spaces: 'Please enter a valid name',
      max: 'Please enter a name no longer than 25 characters',
    },
    email: {
      email: 'Please enter a valid email',
    },
    subject: {
      max: 'Please enter a subject no longer than 35 characters',
    },
    message: {
      max: 'Please enter a message no longer than 200 characters',
    },
  },
};

Validator.localize('en', dict);

export default {
  name: 'Contact',
  components: {
    Title,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      message: {
        coffeeMessage: false,
        clientName: '',
      },
      errorsBE: {},
    };
  },
  methods: {
    validationSubmit() {
      this.$validator.validate().then(valid => {
        if (!valid) return;
        Axios.post('/messages', {
          name: this.form.name,
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
        })
          .then(this.onSuccess)
          .catch(error => {
            this.errorsBE = error.response.data.errors;
            console.log('Oopsy Doopsy!!! Please try again!');
          });
      });
    },
    onSuccess(response) {
      this.message.clientName = response.data.clientName;
      this.form.name = '';
      this.form.email = '';
      this.form.subject = '';
      this.form.message = '';
      this.$nextTick(() => {
        this.errors.clear();
        this.$nextTick(() => {
          this.$validator.reset();
        });
      });
      this.message.coffeeMessage = true;
    },
    geterrorsBE(field) {
      return `${field}`;
    },
    clearInputBE(field) {
      delete this.errorsBE[field];
    },
  },
};
</script>
