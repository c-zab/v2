<template>
  <div id="skills" ref="skills-sec" class="container">
    <Title title="SKILLS" />
    <div class="container">
      <div class="row justify-content-center">
        <SkillsTable title="Backend" :table="backendTable" />
        <SkillsTable title="Frontend" :table="frontendTable" />
        <SkillsTable title="Others" :table="othersTable" />
      </div>
      <h2 data-aos="zoom-in" class="text-center py-5">
        I also have experience working on
      </h2>
      <div class="row justify-content-center">
        <SkillsTable title="Backend" :table="expBackendTable" />
        <SkillsTable title="Frontend" :table="expFrontendTable" />
        <SkillsTable title="Others" :table="expOthersTable" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from './includes/Title';
import SkillsTable from './includes/SkillsTable';

export default {
  name: 'Skills',
  components: {
    Title,
    SkillsTable,
  },
  data() {
    return {
      backendTable: [
        {
          name: 'Node.js',
          svg: 'nodejs',
        },
        {
          name: 'Express.js',
          svg: 'express',
        },
        {
          name: 'MongoDB',
          svg: 'mongodb',
        },
        {
          name: 'PHP',
          classItem: 'devicon-image devicon-php-plain colored',
        },
        {
          name: 'Laravel',
          classItem: 'devicon-image devicon-laravel-plain colored',
        },
        {
          name: 'MySQL',
          classItem: 'devicon-image devicon-mysql-plain colored',
        },
        {
          name: 'Oracle DB',
          classItem: 'devicon-image devicon-oracle-original colored',
        },
      ],
      expBackendTable: [
        {
          name: 'Apache',
          classItem: 'devicon-image devicon-apache-line colored',
        },
        {
          name: 'Nginx',
          classItem: 'devicon-image devicon-nginx-original colored',
        },
        {
          name: 'Java',
          svg: 'java',
        },
        {
          name: 'PostgreSQL',
          classItem: 'devicon-image devicon-postgresql-plain colored',
        },
      ],
      frontendTable: [
        {
          name: 'React',
          classItem: 'devicon-image devicon-react-plain colored',
        },
        {
          name: 'Vue',
          svg: 'vuejs',
        },
        {
          name: 'Javascript',
          classItem: 'devicon-image devicon-javascript-plain colored',
        },
        {
          name: 'JQuery',
          classItem: 'devicon-image devicon-jquery-plain colored',
        },
        {
          name: 'Sass',
          classItem: 'devicon-image devicon-sass-original colored',
        },
        {
          name: 'CSS3',
          svg: 'css3',
        },
        {
          name: 'HTML',
          svg: 'html5',
        },
      ],
      expFrontendTable: [
        {
          name: 'Less',
          classItem: 'devicon-image devicon-less-plain-wordmark colored',
        },
        {
          name: 'Google APIs',
          svg: 'google',
        },
        {
          name: 'Bootstrap',
          classItem: 'devicon-image devicon-bootstrap-plain colored',
        },
        {
          name: 'Typescript',
          classItem: 'devicon-image devicon-typescript-plain colored',
        },
      ],
      othersTable: [
        {
          name: 'Git',
          classItem: 'devicon-image devicon-git-plain colored',
        },
        {
          name: 'GitHub',
          classItem: 'devicon-image devicon-github-plain colored',
        },
        {
          name: 'Webpack',
          svg: 'webpack',
        },
        {
          name: 'Babel',
          classItem: 'devicon-image devicon-babel-plain colored',
        },
        {
          name: 'NPM',
          svg: 'npm',
        },
        {
          name: 'Linux',
          svg: 'linux',
        },
        {
          name: 'Slack',
          svg: 'slack',
        },
      ],
      expOthersTable: [
        {
          name: 'Yarn',
          svg: 'yarn',
        },
        {
          name: 'Photoshop',
          classItem: 'devicon-image devicon-photoshop-plain colored',
        },
        {
          name: 'GIMP',
          svg: 'gimp',
        },
        {
          name: 'Chrome Dev Tools',
          svg: 'chrome',
        },
      ],
    };
  },
};
</script>
