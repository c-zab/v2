<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { throttle } from "lodash";

export default {
	props: {
		isActiveCover: Boolean
	},
	data() {
		return {};
	},
	methods: {},
	mounted() {
		let el = this.$el;
		let originalOffsetTop = el.offsetTop;
		let skillsOffset = "";
		let aboutOffset = "";
		let portfolioOffset = "";
		let contactOffset = "";
		Event.$on("offsetSkills", val => {
			skillsOffset = val;
			console.log("TCL: mounted -> skillsOffset", skillsOffset);
		});
		Event.$on("offsetAbout", val => {
			aboutOffset = val;
			console.log("TCL: mounted -> aboutOffset", aboutOffset);
		});
		Event.$on("offsetPortfolio", val => {
			portfolioOffset = val;
			console.log("TCL: mounted -> portfolioOffset", portfolioOffset);
		});
		Event.$on("offsetContact", val => {
			contactOffset = val;
			console.log("TCL: mounted -> contactOffset", contactOffset);
		});
		window.addEventListener(
			"scroll",
			throttle(function() {
				el.classList[window.scrollY >= originalOffsetTop ? "add" : "remove"](
					"stick"
				);
				if (window.scrollY > 0 && window.scrollY <= aboutOffset) {
					Event.$emit("isActiveCover");
				}
				if (
					window.scrollY > aboutOffset - 300 &&
          window.scrollY <= skillsOffset
				) {
					Event.$emit("isActiveAbout");
				}
				if (
					window.scrollY > skillsOffset - 300 &&
          window.scrollY <= portfolioOffset
				) {
					Event.$emit("isActiveSkills");
				}
				if (
					window.scrollY > portfolioOffset - 300 &&
          window.scrollY <= contactOffset + 500
				) {
					Event.$emit("isActivePortfolio");
				}
				if (window.scrollY > contactOffset + 500) {
					Event.$emit("isActiveContact");
				}
			}, 300)
		);
	}
};
</script>
