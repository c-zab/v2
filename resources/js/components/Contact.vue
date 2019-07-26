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
                <contact-form></contact-form>
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
import ContactForm from "./includes/ContactForm";

export default {
	name: "contact",
	components: {
		Title,
		ContactForm
	},
	mounted() {
		let contact_sec = this.$refs["contact-sec"].offsetTop;
		Event.$emit("offsetContact", contact_sec);
	}
};
</script>
