<template>
  <div id="contact" ref="contact-sec">
    <div class="container">
      <Title data-aos="fade-right" title="CONTACT" />
      <div>
        <section class="mb-5">
          <div
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <h4 class="text-center w-responsive mx-auto mb-0">
              Have a question or want to work together?
            </h4>
          </div>
        </section>
      </div>
    </div>
    <contact-form
      :form="form"
      :message="message"
      :errors-b-e="errorsBE"
      :validation-submit="validationSubmit"
      :geterrors-b-e="geterrorsBE"
      :clear-input-b-e="clearInputBE"
    />
  </div>
</template>

<script>
import { Validator } from 'vee-validate';
import Title from './includes/Title';
import ContactForm from './includes/ContactForm';

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
    ContactForm,
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
        coffeeMessage: true,
        clientName: '',
      },
      errorsBE: {},
    };
  },
  methods: {
    validationSubmit() {
      this.$validator.validate().then(valid => {
        if (!valid) return;
        this.errorsBE = { 
          name: 'Sorry, your name couldn\'t be sent',
          email: 'Sorry, your email couldn\'t be sent', 
          subject: 'Sorry, your subject couldn\'t be sent',
          message: 'Sorry, your message couldn\'t be sent',
        };
        console.warn('Oopsy Doopsy!!! This form is not longer working! Only frontend working - please visit my current website 🙂');
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
