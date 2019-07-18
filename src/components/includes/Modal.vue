<template>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
      <div class="modal-content border-0">
        <div class="modal-body p-0">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 bg-danger p-0">
                <picture>
                  <source media="(max-width: 550px)" :srcset="imageModal" />
                  <source media="(min-width: 551px)" :srcset="imageModalXL" />
                  <img :src="imageModalXL1" class="d-block w-100" alt="image" />
                </picture>
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
		imageModal() {
			return require("@/assets/images/modals/" + this.modalData.imageModal);
		},
		imageModalXL() {
			return require("@/assets/images/modals/" + this.modalData.imageModalXL);
		}
	}
};
</script>
