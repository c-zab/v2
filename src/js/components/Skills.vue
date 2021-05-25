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
          classItem: 'devicon-image devicon-nodejs-plain colored',
          altText: 'Node.js icon',
        },
        {
          name: 'Express.js',
          classItem: 'devicon-image devicon-express-original colored',
          altText: 'Express.js icon',
        },
        {
          name: 'MongoDB',
          svgPath: 'mongodb',
          altText: 'MongoDB icon',
        },
        {
          name: 'PHP',
          classItem: 'devicon-image devicon-php-plain colored',
          altText: 'PHP icon',
        },
        {
          name: 'Laravel',
          classItem: 'devicon-image devicon-laravel-plain colored',
          altText: 'Laravel icon',
        },
        {
          name: 'MySQL',
          classItem: 'devicon-image devicon-mysql-plain colored',
          altText: 'MySQL icon',
        },
        {
          name: 'Oracle DB',
          classItem: 'devicon-image devicon-oracle-original colored',
          altText: 'DB icon',
        },
      ],
      expBackendTable: [
        {
          name: 'Apache',
          classItem: 'devicon-image devicon-apache-line colored',
          altText: 'Apache icon',
        },
        {
          name: 'Nginx',
          classItem: 'devicon-image devicon-nginx-original colored',
          altText: 'Nginx icon',
        },
        {
          name: 'Java',
          svgPath: 'java',
          altText: 'Java icon',
        },
        {
          name: 'PostgreSQL',
          classItem: 'devicon-image devicon-postgresql-plain colored',
          altText: 'PostgreSQL icon',
        },
      ],
      frontendTable: [
        {
          name: 'React',
          classItem: 'devicon-image devicon-react-plain colored',
          altText: 'React icon',
        },
        {
          name: 'Vue',
          svgPath: 'vuejs',
          altText: 'Vue icon',
        },
        {
          name: 'Javascript',
          classItem: 'devicon-image devicon-javascript-plain colored',
          altText: 'Javascript icon',
        },
        {
          name: 'JQuery',
          classItem: 'devicon-image devicon-jquery-plain colored',
          altText: 'JQuery icon',
        },
        {
          name: 'Sass',
          classItem: 'devicon-image devicon-sass-original colored',
          altText: 'Sass icon',
        },
        {
          name: 'CSS3',
          svgPath: 'css3',
          altText: 'CSS3 icon',
        },
        {
          name: 'HTML',
          svgPath: 'html5',
          altText: 'HTML icon',
        },
      ],
      expFrontendTable: [
        {
          name: 'Less',
          classItem: 'devicon-image devicon-less-plain-wordmark colored',
          altText: 'Less icon',
        },
        {
          name: 'Google APIs',
          svgPath: 'google',
          altText: 'APIs icon',
        },
        {
          name: 'Bootstrap',
          classItem: 'devicon-image devicon-bootstrap-plain colored',
          altText: 'Bootstrap icon',
        },
        {
          name: 'Typescript',
          classItem: 'devicon-image devicon-typescript-plain colored',
          altText: 'Typescript icon',
        },
      ],
      othersTable: [
        {
          name: 'Git',
          classItem: 'devicon-image devicon-git-plain colored',
          altText: 'Git icon',
        },
        {
          name: 'GitHub',
          classItem: 'devicon-image devicon-github-plain colored',
          altText: 'GitHub icon',
        },
        {
          name: 'Webpack',
          svgPath: 'webpack',
          altText: 'Webpack icon',
        },
        {
          name: 'Babel',
          classItem: 'devicon-image devicon-babel-plain colored',
          altText: 'Babel icon',
        },
        {
          name: 'NPM',
          classItem: 'devicon-image devicon-npm-original-wordmark colored',
          altText: 'NPM icon',
        },
        {
          name: 'Linux',
          svgImage: 'linux',
          altText: 'Linux icon',
        },
        {
          name: 'Slack',
          svgPath: 'slack',
          altText: 'Slack icon',
        },
      ],
      expOthersTable: [
        {
          name: 'Yarn',
          classItem: 'devicon-image devicon-yarn-plain colored',
          altText: 'Yarn icon',
        },
        {
          name: 'Photoshop',
          classItem: 'devicon-image devicon-photoshop-plain colored',
          altText: 'Photoshop icon',
        },
        {
          name: 'GIMP',
          svgImage: 'gimp',
          altText: 'GIMP icon',
        },
        {
          name: 'Chrome Dev Tools',
          svgPath: 'chrome',
          altText: 'Tools icon',
        },
      ],
    };
  },
};
</script>
