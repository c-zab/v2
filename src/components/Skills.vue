<template>
  <div id="skills-sec" class="container">
    <Title title="SKILLS" />
    <div class="container">
      <div class="row">
        <SkillsTable title="Backend" :table="backendTable" />
        <SkillsTable title="Frontend" :table="frontendTable" />
        <SkillsTable title="Others" :table="othersTable" />
      </div>
      <h2 data-aos="zoom-in" class="text-center py-5">I also have experience working on</h2>
      <div class="row">
        <SkillsTable title="Backend" :table="expBackendTable" />
        <SkillsTable title="Frontend" :table="expFrontendTable" />
        <SkillsTable title="Others" :table="expOthersTable" />
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
	},
	data() {
		return {
			backendTable: [
				{
					id: 1,
					name: "Python"
				},
				{
					id: 2,
					name: "Django",
					classItem: "devicon-image devicon-django-plain colored"
				},
				{
					id: 3,
					name: "PHP",
					classItem: "devicon-image devicon-php-plain colored"
				},
				{
					id: 4,
					name: "Laravel",
					classItem: "devicon-image devicon-laravel-plain colored"
				},
				{
					id: 5,
					name: "MySQL",
					classItem: "devicon-image devicon-mysql-plain colored"
				},
				{
					id: 6,
					name: "Oracle DB",
					classItem: "devicon-image devicon-oracle-original colored"
				}
			],
			expBackendTable: [
				{
					id: 1,
					name: "Apache",
					classItem: "devicon-image devicon-apache-line colored"
				},
				{
					id: 2,
					name: "C#"
				},
				{
					id: 3,
					name: ".NET"
				},
				{
					id: 4,
					name: "Java"
				},
				{
					id: 5,
					name: "PostgreSQL",
					classItem: "devicon-image devicon-postgresql-plain colored"
				},
				{
					id: 6,
					name: "MongoDB",
					classItem: "devicon-image devicon-mongodb-plain colored"
				}
			],
			frontendTable: [
				{
					id: 1,
					name: "Vue"
				},
				{
					id: 2,
					name: "Javascript",
					classItem: "devicon-image devicon-javascript-plain colored"
				},
				{
					id: 3,
					name: "Bootstrap",
					classItem: "devicon-image devicon-bootstrap-plain colored"
				},
				{
					id: 4,
					name: "JQuery",
					classItem: "devicon-image devicon-jquery-plain colored"
				},
				{
					id: 5,
					name: "CSS3"
				},
				{
					id: 6,
					name: "NPM"
				},
				{
					id: 7,
					name: "HTML"
				}
			],
			expFrontendTable: [
				{
					id: 1,
					name: "React",
					classItem: "devicon-image devicon-react-plain colored"
				},
				{
					id: 2,
					name: "Less",
					classItem: "devicon-image devicon-less-plain-wordmark colored"
				},
				{
					id: 3,
					name: "Sass",
					classItem: "devicon-image devicon-sass-original colored"
				},
				{
					id: 4,
					name: "NodeJS",
					classItem: "devicon-image devicon-nodejs-plain colored"
				},
				{
					id: 5,
					name: "Typescript",
					classItem: "devicon-image devicon-typescript-plain colored"
				}
			],
			othersTable: [
				{
					id: 1,
					name: "Git",
					classItem: "devicon-image devicon-git-plain colored"
				},
				{
					id: 2,
					name: "GitHub",
					classItem: "devicon-image devicon-github-plain colored"
				},
				{
					id: 3,
					name: "GIMP"
				},
				{
					id: 4,
					name: "Photoshop",
					classItem: "devicon-image devicon-photoshop-plain colored"
				},
				{
					id: 5,
					name: "Linux"
				},
				{
					id: 6,
					name: "Debian",
					classItem: "devicon-image devicon-debian-plain colored"
				},
				{
					id: 7,
					name: "Slack"
				}
			],
			expOthersTable: [
				{
					id: 1,
					name: "Webpack"
				},
				{
					id: 2,
					name: "Babel",
					classItem: "devicon-image devicon-babel-plain colored"
				},
				{
					id: 3,
					name: "Yarn"
				},
				{
					id: 4,
					name: "Illustrator",
					classItem: "devicon-image devicon-illustrator-plain colored"
				},
				{
					id: 5,
					name: "Android Studio",
					classItem: "devicon-image devicon-android-plain colored"
				},
				{
					id: 6,
					name: "Chrome Dev Tools"
				}
			]
		};
	}
};
</script>
