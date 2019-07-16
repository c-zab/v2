<template>
  <div id="contact">
    <div class="container">
      <Title data-aos="fade-right" title="CONTACT" />
      <div>
        <section class="mb-4">
          <div
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <h4
              class="text-center w-responsive mx-auto mb-5"
            >Have a question or want to work together?</h4>
          </div>

          <div ref="contact-sec" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
            <div class="row justify-content-center">
              <div class="col-lg-9">
                <form id="contact-form" name="contact-form" action="#" method="POST">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="name" class>Your name</label>
                        <input type="text" id="name" name="name" class="form-control" />
                        <small
                          v-if="false"
                          id="emailHelp"
                          class="form-text text-muted"
                        >We'll never share your email with anyone else.</small>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="email" class>Your email</label>
                        <input type="text" id="email" name="email" class="form-control" />
                        <small
                          v-if="false"
                          id="emailHelp"
                          class="form-text text-muted"
                        >We'll never share your email with anyone else.</small>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="subject" class>Subject</label>
                        <input type="text" id="subject" name="subject" class="form-control" />
                        <small
                          v-if="false"
                          id="emailHelp"
                          class="form-text text-muted"
                        >We'll never share your email with anyone else.</small>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="message">Your message</label>
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="2"
                          class="form-control"
                        ></textarea>
                        <small
                          v-if="false"
                          id="emailHelp"
                          class="form-text text-muted"
                        >We'll never share your email with anyone else.</small>
                      </div>
                    </div>
                  </div>
                </form>

                <div class="text-center text-md-left">
                  <button
                    class="btn btn-info"
                    onclick="document.getElementById('contact-form').submit();"
                    disabled
                  >Send</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./includes/Title";

export default {
	name: "contact",
	components: {
		Title
	},
	mounted() {
		let contact_sec = this.$refs["contact-sec"].offsetTop;
		Event.$emit("offsetContact", contact_sec);
	}
};
</script>
