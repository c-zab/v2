<template>
  <div class="container">
    <div class="row justify-content-center pb-4">
      <!-- <div v-if="props.message.coffeeMessage" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>I got it!</strong> I will send you a message @{{ props.message.clientName }} as soon as I finish my coffee.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div> -->
    </div>
    <div class="row justify-content-center pb-4">
      <div class="col-lg-9">
        <form
          name="contact-form"
          action="/messages"
          method="POST"
          @submit.prevent="props.validationSubmit"
          @keydown="props.clearInputBE($event.target.name)"
        >
          @csrf
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="name" class>Your name</label>
                <input
                  id="name"
                  v-model="props.form.name"
                  v-validate="'alpha_spaces|max:25'"
                  type="text"
                  name="name"
                  class="form-control"
                >
                <span v-if="props.errorsBE.name" class="form-text text-danger" v-text="props.geterrorsBE(props.errorsBE.name)" />
                <span class="form-text text-danger">@{{ errors.first('name') }}</span>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="email" class>Your email</label>
                <input
                  id="email"
                  v-model="props.form.email"
                  v-validate="'email'"
                  name="email"
                  type="text"
                  class="form-control"
                >
                <span v-if="props.errorsBE.email" class="form-text text-danger" v-text="props.geterrorsBE(props.errorsBE.email)" />
                <span class="form-text text-danger">@{{ errors.first('email') }}</span>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="subject" class>Subject</label>
                <input
                  id="subject"
                  v-model="props.form.subject"
                  v-validate="'max:35'"
                  type="text"
                  name="subject"
                  class="form-control"
                >
                <span v-if="props.errorsBE.subject" class="form-text text-danger" v-text="props.geterrorsBE(props.errorsBE.subject)" />
                <span class="form-text text-danger">@{{ errors.first('subject') }}</span>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="message">Your message</label>
                <textarea
                  id="message"
                  v-model="props.form.message"
                  v-validate="'max:200'"
                  type="text"
                  name="message"
                  rows="2"
                  class="form-control"
                />
                <span v-if="props.errorsBE.message" class="form-text text-danger" v-text="props.geterrorsBE(props.errorsBE.message)" />
                <span class="form-text text-danger">@{{ errors.first('message') }}</span>
              </div>
            </div>
          </div>
          <div class="text-center text-md-left">
            <div class="control">
              <button class="btn btn-info" name="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>