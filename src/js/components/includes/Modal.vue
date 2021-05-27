<template>
  <div>
    <div
      id="myModal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      :class="{ show ,'d-block': active}"
    >
      <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
        <div class="modal-content border-0">
          <div class="modal-body p-0">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 bg-danger p-0">
                  <picture>
                    <source media="(max-width: 550px)" type="image/webp" :srcset="require(`@/images/modals/${modalData.imageModalWebp}`)">
                    <source media="(max-width: 550px)" type="image/png" :srcset="require(`@/images/modals/${modalData.imageModal}`)">
                    <source media="(min-width: 551px)" type="image/webp" :srcset="require(`@/images/modals/${modalData.imageModalXLWebp}`)">
                    <source media="(min-width: 551px)" type="image/png" :srcset="require(`@/images/modals/${modalData.imageModalXL}`)">
                    <img
                      :src="require(`@/images/modals/${modalData.imageModalXL}`)"
                      type="image/png"
                      class="d-block w-100"
                      :alt="`${modalData.title} sample images`"
                    >
                  </picture>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-8 align-self-center">
                  <div class="row">
                    <div class="col-12">
                      <h3 class="mb-0 mt-3">
                        {{ modalData.title }}
                      </h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 text-muted">
                      <p class="pb-0">
                        {{ modalData.subtitle }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 offset-lg-1 align-self-center">
                  <div class="row my-2">
                    <div v-if="modalData.links.site" class="col-auto my-1 col-sm-auto text-center">
                      <a class="li-ic text-primary" :href="modalData.links.site">
                        <font-awesome-icon
                          icon="globe-americas"
                          size="1x"
                          class="text-info mx-2"
                        />Website
                      </a>
                    </div>
                    <div
                      v-if="modalData.links.repository == 'private'"
                      class="col-auto col-sm-auto text-center"
                    >
                      <p class="li-ic text-danger my-0" :href="modalData.links.repository">
                        <font-awesome-icon
                          :icon="['far', 'eye-slash']"
                          size="1x"
                          class="mx-2"
                        />Private Code
                      </p>
                    </div>
                    <div
                      v-else-if="modalData.links.repository"
                      class="col-auto col-sm-auto text-center"
                    >
                      <a class="li-ic" :href="modalData.links.repository">
                        <font-awesome-icon
                          icon="code"
                          size="1x"
                          class="text-info mx-2"
                        />Code
                      </a>
                    </div>
                    <div
                      v-if="modalData.links.volunteer"
                      class="col-auto my-1 col-sm-auto text-center"
                    >
                      <p class="li-ic my-0 text-success" :href="modalData.links.repository">
                        <font-awesome-icon
                          icon="hands-helping"
                          size="1x"
                          class="mx-2"
                        />Volunteer
                      </p>
                    </div>
                    <div
                      v-if="modalData.links.construction"
                      class="col-auto my-1 col-sm-auto text-center"
                    >
                      <p class="li-ic my-0 text-warning" :href="modalData.links.repository">
                        <font-awesome-icon
                          icon="tools"
                          size="1x"
                          class="mx-2"
                        />In progress
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <p class="border-top border-dark pt-2">
                    {{ modalData.description }}
                  </p>
                </div>
              </div>

              <div class="modal-footer align-self-center">
                <div
                  class="alert alert-primary mr-auto mb-0"
                  role="alert"
                >
                  <span>
                    The images shown above are only references of my work.
                  </span>
                </div>
                <button 
                  type="button" 
                  class="btn btn-danger" 
                  data-dismiss="modal"
                  @click="$emit('toggleModal')"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="active" class="modal-backdrop fade show" />
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modalData: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
      require: true,
    },
    show: {
      type: Boolean,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.alert-primary{
  span {
    font-size: 0.8rem;
  }
}
</style>