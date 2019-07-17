<template>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
      <div class="modal-content border-0">
        <div class="modal-body p-0">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 bg-danger p-0">
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="3000">
                      <picture>
                        <source media="(max-width: 550px)" :srcset="imageModal1" />
                        <source media="(min-width: 551px)" :srcset="imageModalXL1" />
                        <img :src="imageModalXL1" class="d-block w-100" alt="image" />
                      </picture>
                    </div>
                    <div class="carousel-item" data-interval="3000">
                      <picture>
                        <source media="(max-width: 550px)" :srcset="imageModal2" />
                        <source media="(min-width: 551px)" :srcset="imageModalXL2" />
                        <img :src="imageModalXL2" class="d-block w-100" alt="image" />
                      </picture>
                    </div>
                    <div class="carousel-item" data-interval="3000">
                      <picture>
                        <source media="(max-width: 550px)" :srcset="imageModal3" />
                        <source media="(min-width: 551px)" :srcset="imageModalXL3" />
                        <img :src="imageModal3" class="d-block w-100" alt="image" />
                      </picture>
                    </div>
                    <div class="carousel-item" data-interval="3000">
                      <picture>
                        <source media="(max-width: 550px)" :srcset="imageModal4" />
                        <source media="(min-width: 551px)" :srcset="imageModalXL4" />
                        <img :src="imageModal4" class="d-block w-100" alt="image" />
                      </picture>
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
                <h3 class="mb-0 mt-3">{{ modalData.title }}</h3>
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
	computed: {
		imageModal1() {
			return require("@/assets/images/modals/" + this.modalData.imageModal1);
		},
		imageModalXL1() {
			return require("@/assets/images/modals/" + this.modalData.imageModalXL1);
		},
		imageModal2() {
			return require("@/assets/images/modals/" + this.modalData.imageModal2);
		},
		imageModalXL2() {
			return require("@/assets/images/modals/" + this.modalData.imageModalXL2);
		},
		imageModal3() {
			return require("@/assets/images/modals/" + this.modalData.imageModal3);
		},
		imageModalXL3() {
			return require("@/assets/images/modals/" + this.modalData.imageModalXL3);
		},
		imageModal4() {
			return require("@/assets/images/modals/" + this.modalData.imageModal4);
		},
		imageModalXL4() {
			return require("@/assets/images/modals/" + this.modalData.imageModalXL4);
		}
	}
};
</script>
