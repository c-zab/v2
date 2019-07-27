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
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./includes/Title";
// import ContactForm from "./includes/ContactForm";

export default {
  name: "contact",
  components: {
    Title
    // ContactForm
  }
};
</script>
