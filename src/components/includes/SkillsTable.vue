<template>
  <div class="col-md">
    <h3 data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" class="py-4">{{ title }}</h3>
    <div class="list-group-flush">
      <div class="col-md">
        <div class="list-group-flush">
          <div v-for="item in table" v-bind:key="item.id" class="list-group-item py-2">
            <div data-aos="flip-right" data-aos-anchor-placement="top-bottom" class="row">
              <div class="col-3">
                <div v-if="title==='Backend'">
                  <div v-if="item.name=== 'Python'">
                    <img src="https://icongr.am/devicon/python-original.svg?size=45" />
                  </div>
                  <div v-else-if="item.name=== 'Java'">
                    <img src="https://icongr.am/devicon/java-original.svg?size=45" />
                  </div>
                  <div v-else-if="item.name=== '.NET'">
                    <img src="https://icongr.am/devicon/dot-net-original.svg?size=45" />
                  </div>
                  <div v-else-if="item.name=== 'C#'">
                    <img src="https://icongr.am/devicon/csharp-original.svg?size=45" />
                  </div>
                  <div v-else>
                    <i :class="[item.classItem]"></i>
                  </div>
                </div>

                <div v-else-if="title==='Frontend'">
                  <div v-if="item.name=== 'Vue'">
                    <img src="https://icongr.am/devicon/vuejs-original.svg?size=45" />
                  </div>
                  <div v-else-if="item.name=== 'CSS3'">
                    <img src="https://icongr.am/devicon/css3-original.svg?size=45" />
                  </div>
                  <div v-else-if="item.name=== 'NPM'">
                    <img src="https://icongr.am/devicon/npm-original-wordmark.svg?size=45" />
                  </div>
                  <div v-else-if="item.name=== 'HTML'">
                    <img src="https://icongr.am/devicon/html5-original.svg?size=45" />
                  </div>
                  <div v-else>
                    <i :class="[item.classItem]"></i>
                  </div>
                </div>

                <div v-else-if="title==='Others'">
                  <div v-if="item.name=== 'Linux'">
                    <img src="https://icongr.am/devicon/linux-original.svg?size=45" />
                  </div>
                  <div v-else-if="item.name=== 'GIMP'">
                    <img src="https://icongr.am/devicon/gimp-original.svg?size=45" />
                  </div>
                  <div v-else-if="item.name=== 'Slack'">
                    <img src="https://icongr.am/devicon/slack-original.svg?size=45" />
                  </div>
                  <div v-else-if="item.name=== 'Chrome Dev Tools'">
                    <img src="https://icongr.am/devicon/chrome-original.svg?size=45" />
                  </div>
                  <div v-else-if="item.name=== 'Webpack'">
                    <img src="https://icongr.am/devicon/webpack-original.svg?size=45" />
                  </div>
                  <div v-else-if="item.name=== 'Yarn'">
                    <img src="https://icongr.am/devicon/yarn-original.svg?size=45" />
                  </div>
                  <div v-else>
                    <i :class="[item.classItem]"></i>
                  </div>
                </div>
              </div>
              <div class="col">
                <h4 class="pt-2">{{ item.name }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: ["title", "table"]
};
</script>
