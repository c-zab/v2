<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <form
          name="contact-form"
          action="/messages"
          method="POST"
          @submit.prevent="validationSubmit"
          @keydown="clearInputBE($event.target.name)"
        >
          <div class="row">
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
                >
                <small v-if="errorsBE.email" class="form-error-message text-danger" v-text="geterrorsBE(errorsBE.email)" />
                <small class="form-error-message text-danger">{{ errors.first('email') }}</small>
              </div>
            </div>
          </div>

          <div class="row">
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
                >
                <small v-if="errorsBE.subject" class="form-error-message text-danger" v-text="geterrorsBE(errorsBE.subject)" />
                <small class="form-error-message text-danger">{{ errors.first('subject') }}</small>
              </div>
            </div>
          </div>

          <div class="row">
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
                />
                
                <small v-if="errorsBE.message" class="form-error-message text-danger" v-text="geterrorsBE(errorsBE.message)" />
                <small class="form-error-message text-danger">{{ errors.first('message') }}</small>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-2 text-center text-md-left">
              <div class="control">
                <button class="btn btn-info" name="submit">
                  Send
                </button>
              </div>
            </div>

            <div class="col-10">
              <div v-if="message.coffeeMessage" class="alert alert-warning fade show text-center mb-0">
                <strong>Hi{{ message.clientName }}!</strong> This form is no longer maintained
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
    message: {
      type: Object,
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
</style>