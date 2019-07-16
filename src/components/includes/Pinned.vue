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
				if (window.scrollY >= originalOffsetTop) {
					el.classList.add("stick");
				} else {
					el.classList.remove("stick");
				}
				if (window.scrollY > 0 && window.scrollY <= aboutOffset - 300) {
					Event.$emit("isActiveCover");
				} else if (
					window.scrollY > aboutOffset - 300 &&
          window.scrollY <= skillsOffset - 500
				) {
					Event.$emit("isActiveAbout");
				} else if (
					window.scrollY > skillsOffset - 500 &&
          window.scrollY <= portfolioOffset - 500
				) {
					Event.$emit("isActiveSkills");
				} else if (
					window.scrollY > portfolioOffset - 500 &&
          window.scrollY <= contactOffset + 300
				) {
					Event.$emit("isActivePortfolio");
				} else {
					Event.$emit("isActiveContact");
				}
			}, 200)
		);
	}
};
</script>
