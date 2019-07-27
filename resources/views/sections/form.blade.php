<div ref="contact-sec" class="container">
	<div class="row justify-content-center pb-4">
		<div v-if="coffeeMessage" class="alert alert-success alert-dismissible fade show" role="alert">
			<strong>I got it!</strong> I will send you a message as soon as I finish my coffee.
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	</div>
	<div class="row justify-content-center pb-4">
		<div class="col-lg-9">
			<form name="contact-form" action="/messages" method="POST" @submit.prevent="validationSubmit">
				@csrf
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label for="name" class>Your name</label>
							<input required v-validate="'required|alpha_spaces'" type="text" v-model="name" id="name" name="name"
								class="form-control" />
							<span class="form-text text-danger">@{{ errors.first('name') }}</span>
						</div>
					</div>

					<div class="col-md-6">
						<div class="form-group">
							<label for="email" class>Your email</label>
							<input required v-validate="'required|email'" name="email" type="text" v-model="email" id="email"
								class="form-control" />
							<span class="form-text text-danger">@{{ errors.first('email') }}</span>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="subject" class>Subject</label>
							<input required v-validate="'required|max:35'" type="text" v-model="subject" id="subject" name="subject"
								class="form-control" />
							<span class="form-text text-danger">@{{ errors.first('subject') }}</span>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<label for="message">Your message</label>
							<textarea required v-validate="'required|max:200'" v-model="message" type="text" id="message"
								name="message" rows="2" class="form-control"></textarea>
							<span class="form-text text-danger">@{{ errors.first('message') }}</span>
						</div>
					</div>
				</div>
				<div class="text-center text-md-left">
					<div class="control">
						<button class="btn btn-info" name="submit">Send</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
