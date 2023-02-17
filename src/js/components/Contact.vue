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
            <p class="text-center w-responsive mx-auto mb-0 contact-text">
              Have a question or want to work together?
            </p>
          </div>
        </section>
      </div>
    </div>
    <contact-form
      :form="form"
      :pulse="pulse"
      :errors-b-e="errorsBE"
      :validation-submit="validationSubmit"
      :geterrors-b-e="geterrorsBE"
      :clear-input-b-e="clearInputBE"
      :form-items="formItems"
    />
  </div>
</template>

<script>
import { Validator } from "vee-validate";
import Title from "./includes/Title";
// import ContactForm from './includes/ContactForm';

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

export default {
  name: "Contact",
  components: {
    Title,
    // ContactForm,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      pulse: false,
      errorsBE: {},
      formItems: ["name", "email", "subject", "message"],
    };
  },
  methods: {
    validationSubmit() {
      this.$validator.validate().then((valid) => {
        if (!valid) return;
        this.formItems.forEach(
          (item) =>
            (this.errorsBE[item] = "Sorry, your message couldn't be sent"),
        );
        this.pulse = true;
        console.warn(
          "Oopsy Doopsy!!! This form is not longer working! Only frontend working - please visit my latest website 🙂",
        );
      });
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

<style lang="scss" scoped>
.contact-text {
  font-size: 1.3rem;
}
</style>