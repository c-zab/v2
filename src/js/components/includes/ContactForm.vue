<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <form
          name="contact-form"
          @submit.prevent="validationSubmit"
          @keydown="clearInputBE($event.target.name)"
        >
          <div
            class="row"
            data-aos="flip-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="700"
            data-aos-anchor-placement="bottom-bottom"
          >
            <div class="col-md-6">
              <div class="form-group form-item">
                <label for="name" class>Name*</label>
                <input
                  id="name"
                  v-model="form.name"
                  v-validate="'alpha_spaces|max:25'"
                  type="text"
                  name="name"
                  class="form-control"
                  :class="{'is-invalid': errors.first('name')}"
                >
                <small v-if="errorsBE.name" class="text-danger form-error-message" v-text="geterrorsBE(errorsBE.name)" />
                <small class="text-danger form-error-message">{{ errors.first('name') }}</small>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group form-item">
                <label for="email" class>Email*</label>
                <input
                  id="email"
                  v-model="form.email"
                  v-validate="'email'"
                  name="email"
                  type="text"
                  class="form-control"
                  :class="{'is-invalid': errors.first('email')}"
                >
                <small v-if="errorsBE.email" class="form-error-message text-danger" v-text="geterrorsBE(errorsBE.email)" />
                <small class="form-error-message text-danger">{{ errors.first('email') }}</small>
              </div>
            </div>
          </div>

          <div
            class="row"
            data-aos="flip-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="700"
            data-aos-anchor-placement="top-bottom"
          >
            <div class="col-md-12">
              <div class="form-group form-item">
                <label for="subject" class>Subject*</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  v-validate="'max:35'"
                  type="text"
                  name="subject"
                  class="form-control"
                  :class="{'is-invalid': errors.first('subject')}"
                >
                <small v-if="errorsBE.subject" class="form-error-message text-danger" v-text="geterrorsBE(errorsBE.subject)" />
                <small class="form-error-message text-danger">{{ errors.first('subject') }}</small>
              </div>
            </div>
          </div>

          <div
            class="row"
            data-aos="flip-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="700"
            data-aos-anchor-placement="top-bottom"
          >
            <div class="col-md-12">
              <div class="form-group form-item">
                <label for="message">Message*</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  v-validate="'max:200'"
                  type="text"
                  name="message"
                  rows="2"
                  class="form-control"
                  :class="{'is-invalid': errors.first('message') }"
                />
                
                <small v-if="errorsBE.message" class="form-error-message text-danger" v-text="geterrorsBE(errorsBE.message)" />
                <small class="form-error-message text-danger">{{ errors.first('message') }}</small>
              </div>
            </div>
          </div>
          <div
            class="row align-items-center"
            data-aos="flip-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="700"
            data-aos-anchor-placement="top-bottom"
          >
            <div class="col-2 text-center text-md-left">
              <div class="control">
                <button class="btn btn-info" name="submit" :disabled="isFormCompleted">
                  Send
                </button>
              </div>
            </div>

            <div class="col-10">
              <div class="alert alert-warning fade show text-center mb-0" :class="{pulse}">
                <small>
                  <strong>Hi{{ (form.name.length > 0) ? ' ' + form.name : '' }}!</strong> This form is no longer maintained. Please visit my latest website 🙂!
                </small>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    form: {
      type: Object,
      required: true,
    },
    pulse: {
      type: Boolean,
      required: true,
    },
    errorsBE: {
      type: Object,
      required: true,
    },
    validationSubmit: {
      type: Function,
      required: true,
    },
    clearInputBE: {
      type: Function,
      required: true,
    },
    geterrorsBE: {
      type: Function,
      required: true,
    },
    formItems: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isFormCompleted: function () {
      return this.formItems.some(item => this.form[item].length === 0) || this.errors.items.length > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
  .form-item {
    position: relative;
    margin-bottom: 2em;
  }
  .form-error-message {
    position: absolute;
    bottom: calc(-1.7 * 1em);
  }
  .pulse {
    animation: pulse 1s infinite ease-in-out alternate;
  }

  @keyframes pulse {
    from { transform: scale(1.0); }
    to { transform: scale(1.1); }
  }
</style>