<template>
  <div class="container">
    <div class="row justify-content-center pb-4">
      <div v-if="message.coffeeMessage" class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>I got it!</strong> I will send you a message {{ message.clientName }} as soon as I finish my coffee.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>

    <div class="row justify-content-center pb-4">
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
              <div class="form-group">
                <label for="name" class>Your name</label>
                <input
                  id="name"
                  v-model="form.name"
                  v-validate="'alpha_spaces|max:25'"
                  type="text"
                  name="name"
                  class="form-control"
                >
                <span v-if="errorsBE.name" class="form-text text-danger" v-text="geterrorsBE(errorsBE.name)" />
                <span class="form-text text-danger">{{ errors.first('name') }}</span>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="email" class>Your email</label>
                <input
                  id="email"
                  v-model="form.email"
                  v-validate="'email'"
                  name="email"
                  type="text"
                  class="form-control"
                >
                <span v-if="errorsBE.email" class="form-text text-danger" v-text="geterrorsBE(errorsBE.email)" />
                <span class="form-text text-danger">{{ errors.first('email') }}</span>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="subject" class>Subject</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  v-validate="'max:35'"
                  type="text"
                  name="subject"
                  class="form-control"
                >
                <span v-if="errorsBE.subject" class="form-text text-danger" v-text="geterrorsBE(errorsBE.subject)" />
                <span class="form-text text-danger">{{ errors.first('subject') }}</span>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="message">Your message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  v-validate="'max:200'"
                  type="text"
                  name="message"
                  rows="2"
                  class="form-control"
                />
                <span v-if="errorsBE.message" class="form-text text-danger" v-text="geterrorsBE(errorsBE.message)" />
                <span class="form-text text-danger">{{ errors.first('message') }}</span>
              </div>
            </div>
          </div>
          <div class="text-center text-md-left">
            <div class="control">
              <button class="btn btn-info" name="submit" disabled>
                Send
              </button>
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