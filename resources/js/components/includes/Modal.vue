<template>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
      <div class="modal-content border-0">
        <div class="modal-body p-0">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 bg-danger p-0">
                <picture>
                  <source media="(max-width: 550px)" :srcset="imageModalWebp" />
                  <source media="(max-width: 550px)" :srcset="imageModal" />
                  <source media="(min-width: 551px)" :srcset="imageModalXLWebp" />
                  <source media="(min-width: 551px)" :srcset="imageModalXL" />
                  <img :src="imageModalXLWebp" class="d-block w-100" alt="image" />
                </picture>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8 align-self-center">
                <div class="row">
                  <div class="col-12">
                    <h3 class="mb-0 mt-3">{{ modalData.title }}</h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 text-muted">
                    <p class="pb-0">{{ modalData.subtitle }}</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 offset-lg-1 align-self-center">
                <div class="row my-2">
                  <div v-if="modalData.links.site" class="col-auto my-1 col-sm-auto text-center">
                    <a class="li-ic" :href="modalData.links.site">
                      <i class="fas fa-globe-americas text-info mx-1"></i> Website
                    </a>
                  </div>
                  <div
                    v-if="modalData.links.repository == 'private'"
                    class="col-auto col-sm-auto text-center"
                  >
                    <p class="li-ic text-danger my-0" :href="modalData.links.repository">
                      <i class="fas fa-eye-slash mx-1"></i> Private Code
                    </p>
                  </div>
                  <div
                    v-else-if="modalData.links.repository"
                    class="col-auto col-sm-auto text-center"
                  >
                    <a class="li-ic" :href="modalData.links.repository">
                      <i class="fas fa-code text-info mx-1"></i> Code
                    </a>
                  </div>
                  <div
                    v-if="modalData.links.volunteer"
                    class="col-auto my-1 col-sm-auto text-center"
                  >
                    <p class="li-ic my-0 text-success" :href="modalData.links.repository">
                      <i class="fas fa-hands-helping mx-1"></i> Volunteer
                    </p>
                  </div>
                  <div
                    v-if="modalData.links.construction"
                    class="col-auto my-1 col-sm-auto text-center"
                  >
                    <p class="li-ic my-0 text-warning" :href="modalData.links.repository">
                      <i class="fas fa-tools mx-1"></i> In progress
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <p class="border-top border-dark pt-2">{{ modalData.description }}</p>
              </div>
            </div>

            <div class="modal-footer align-self-center">
              <div
                class="alert alert-primary mr-auto mb-0"
                role="alert"
              >The images shown above are only references of my work.</div>
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
    repository() {
      return this.modalData.links.repository === "private"
        ? "private my frien"
        : this.modalData.links.repository;
    },
    imageModal() {
      return "/images/modals/" + this.modalData.imageModal;
    },
    imageModalWebp() {
      return "/images/modals/" + this.modalData.imageModalWebp;
    },
    imageModalXL() {
      return "/images/modals/" + this.modalData.imageModalXL;
    },
    imageModalXLWebp() {
      return "/images/modals/" + this.modalData.imageModalXLWebp;
    }
  }
};
</script>
