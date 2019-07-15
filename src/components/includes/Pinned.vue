<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { throttle } from "lodash";

export default {
	mounted() {
		let el = this.$el;
		let originalOffsetTop = el.offsetTop;
		window.addEventListener(
			"scroll",
			throttle(function() {
				el.classList[window.scrollY >= originalOffsetTop ? "add" : "remove"](
					"stick"
				);
				// console.log(window.scrollY);
			}, 300)
		);
	}
};
</script>
