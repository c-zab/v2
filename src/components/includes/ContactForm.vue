<template>
  <div>
    <form id="contact-form" name="contact-form" action="#" method="POST">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="name" class>Your name</label>
            <input
              v-validate="'required|alpha_spaces'"
              type="text"
              v-model="name"
              id="name"
              name="name"
              class="form-control"
            />
            <span class="form-text text-danger">{{ errors.first('name') }}</span>
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label for="email" class>Your email</label>
            <input
              v-validate="'required|email'"
              name="email"
              type="text"
              v-model="email"
              id="email"
              class="form-control"
            />
            <span class="form-text text-danger">{{ errors.first('email') }}</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="subject" class>Subject</label>
            <input
              v-validate="'required|max:35'"
              type="text"
              v-model="subject"
              id="subject"
              name="subject"
              class="form-control"
            />
            <span class="form-text text-danger">{{ errors.first('subject') }}</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="message">Your message</label>
            <textarea
              v-validate="'required|max:200'"
              v-model="message"
              type="text"
              id="message"
              name="message"
              rows="2"
              class="form-control"
            ></textarea>
            <span class="form-text text-danger">{{ errors.first('message') }}</span>
          </div>
        </div>
      </div>
      <div class="text-center text-md-left">
        <button class="btn btn-info" @click="onSubmit">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
import { Validator } from "vee-validate";
const dict = {
	custom: {
		name: {
			required: "Your name is required",
			alpha_spaces: "Please enter a valid name"
		},
		email: {
			required: "Your email is required",
			email: "Please enter a valid email"
		},
		subject: {
			required: "A subject is required",
			max: "Please enter a subject no longer than 35 characters"
		},
		message: {
			required: "A message is required",
			max: "Please enter a message no longer than 200 characters"
		}
	}
};

Validator.localize("en", dict);

export default {
	data() {
		return {
			name: "",
			email: "",
			subject: "",
			message: ""
		};
	},
	methods: {
		onSubmit() {
			this.$validator.validate().then(valid => {
				if (!valid) {
					alert("not submitting");
				}
			});
		}
	}
};
</script>

<style>
</style>
