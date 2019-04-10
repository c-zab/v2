<template>
  <div id="skills-sec" class="container">
    <Title title="SKILLS"/>
    <div class="container">
      <div class="row">
        <SkillsTable title="Backend"/>
        <SkillsTable title="Frontend"/>
        <SkillsTable title="Others"/>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./includes/Title";
import SkillsTable from "./includes/SkillsTable";

export default {
  name: "skills-sec",
  components: {
    Title,
    SkillsTable
  }
};
</script>

<style scoped>
</style>
