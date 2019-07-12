<template>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-body p-0">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 bg-danger p-0">
                <picture>
                  <source
                    media="(max-width: 550px)"
                    srcset="@/assets/images/modals/aiesecModal2.png"
                  />
                  <source
                    media="(min-width: 551px)"
                    srcset="@/assets/images/modals/aiesecModal3.png"
                  />
                  <img
                    src="@/assets/images/modals/aiesecModal3.png"
                    class="img-fluid"
                    alt="placeholder"
                  />
                </picture>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
              <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
            </div>
            <div class="row">
              <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
            </div>
            <div class="row">
              <div class="col-sm-9">
                Level 1: .col-sm-9
                <div class="row">
                  <div class="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
                  <div class="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="d-flex justify-content-center">
          <picture>
            <source

              media="(max-width: 550px)"
              srcset="@/assets/images/modals/aiesecModal2.png"
            />
            <source

              media="(min-width: 551px)"
              srcset="@/assets/images/modals/aiesecModal3.png"
            />
            <img  src="@/assets/images/modals/aiesecModal3.png" alt="placeholder" />
          </picture>
        </div>
        <h4 class="modal-title" id="myModalLabel">{{ modalData.title }}</h4>
        <div class="modal-body">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quod repellendus autem repellat accusantium laboriosam sequi. Corrupti laboriosam nam esse blanditiis debitis odio eligendi saepe, sequi velit corporis nemo sapiente.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>-->
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
	}
};
</script>
