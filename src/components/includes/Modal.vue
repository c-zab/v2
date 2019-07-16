<template>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content border-0">
        <div class="modal-body p-0">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 bg-danger p-0">
                <!-- <picture>
                  <source
                    media="(max-width: 550px)"
                    srcset="@/assets/images/modals/aiesecModal.png"
                  />
                  <source
                    media="(min-width: 551px)"
                    srcset="@/assets/images/modals/aiesecModal2.png"
                  />
                  <img
                    src="@/assets/images/modals/aiesecModal.png"
                    class="img-fluid"
                    alt="placeholder"
                  />
                </picture>-->
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div
                      class="carousel-item"
                      v-for="(image, index) in modalData.modalImages"
                      :key="`image-${index}`"
                      :class="{ 'active': index === 0 }"
                      data-interval="6000"
                    >
                      <img :src="image" class="d-block w-100" alt="image" />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="prev"
                  >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="next"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h3 class="mb-0">{{ modalData.title }}</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-12 text-muted">
                <p class="border-bottom border-dark">{{ modalData.subtitle }}</p>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <p>{{ modalData.description }}</p>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "modal",
	props: {
		modalData: {
			type: Object,
			required: true
		}
	},
	computed: {}
};
</script>
