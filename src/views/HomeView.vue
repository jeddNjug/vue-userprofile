<script setup>
import { ref, watch } from 'vue';
import iconWhatsapp from '../components/icons/IconWhatsapp.vue'; // icon for instagram
import iconLinkedin from '../components/icons/IconLinkedin.vue'; // icon for linkedin
import iconGithub from "../components/icons/IconGithub.vue";    //icon for github
import SkillSetProficiency from "../components/progressbar/SkillSetProficiency.vue";
import PageFooter from "../components/layout/PageFooter.vue";
import pageNavBar from "../components/layout/PageNavBar.vue";
const skills = ref([
  { title: "Html5", color: "bg-red-600 text-gray-100", precentage: 98 },
  { title: "Bootrap/Tailwind/Material Css", color: "bg-blue-600 text-gray-100", precentage: 87 },
  { title: "Vanilla Javascript, Jquery, Vue js", color: "bg-green-600 text-gray-100", precentage: 90 },
  { title: "Vanilla PHP, Blade PHP/Laravel ", color: "bg-purple-600 text-gray-100", precentage: 84 },
]), userColorTheme = ref(atob(localStorage.getItem('user-theme')));
watch(userColorTheme, function (value) {
  localStorage.setItem('user-theme', btoa(value.toString())); //for security reasons I alawys encrypt data before storing it on the local storage 
});
</script>
<template>
  <main :class="userColorTheme">
    <page-nav-bar v-model="userColorTheme"></page-nav-bar>

    <section class="pt-16 bg-skin-fill">
      <div class="w-full md:11/12 lg:w-8/12 xl:7/12 px-4 mx-auto">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div
                class="absolute rounded-full bg-gray-100 w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
                <div class="rounded-full bg-skin-img-accent w-full h-full overflow-auto">
                  <img
                    src="https://lh3.googleusercontent.com/a/AAcHTteLylPgLw_nb2UNi5kf-z1U2NFeo3k9JbXDLqV6UbDKHdk=s288-c-no">
                </div>
              </div>
              <div class="w-full px-4 flex justify-center text-center mt-20">
                <div class="relative">
                  <img alt="..."
                    src="https://lh3.googleusercontent.com/a/AAcHTteLylPgLw_nb2UNi5kf-z1U2NFeo3k9JbXDLqV6UbDKHdk=s288-c-no"
                    class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
                </div>
              </div>
            </div>
            <!-- start skills and address summary -->
            <div class="grid md:grid-cols-2">
              <div class="text-center mt-12">
                <h3 class="text-xl font-bold leading-normal mb-2 text-skin-base mb-2 dark:text-white font-nunito">
                  Jedidiah Mbugua Njuguna
                </h3>
                <div class="text-sm leading-normal mt-0 mb-2 font-bold uppercase dark:text-white font-nunito">
                  <i class="fa-duotone fa-location-dot mr-2 text-lg text-skin-muted"></i>
                  Nairobi, Kenya
                </div>
                <div class="mb-2 text-blueGray-600 mt-10">
                  <i class="fa-duotone fa-briefcase mr-2 text-lg text-skin-muted"></i>
                  Full Stack - Software developer
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i class="fa-duotone fa-building-columns mr-2 text-lg text-skin-muted"></i>
                  Bsc. Information Technology, University of Meru
                </div>
                <!-- start social media links -->
                <ul class="flex flex-row gap-2 mt-4 justify-center">
                  <!-- whatsapp -->
                  <a href="https://api.whatsapp.com/send?phone=0720239710" target="_blank">
                    <icon-whatsapp class="h-10 w-10 text-green-300 hover:text-green-600 transition"></icon-whatsapp>
                  </a>
                  <!-- linkedin -->
                  <a href="www.linkedin.com/in/jedidia-mbugua-8223b61b0" target="_blank">
                    <icon-linkedin class="h-10 w-10 text-blue-400 hover:text-blue-600 transition"></icon-linkedin>
                  </a>
                  <!-- github -->
                  <a href="https://github.com/jeddNjug" target="_blank">
                    <icon-github class="h-10 w-10 text-gray-500 hover:text-gray-800 transition"></icon-github>
                  </a>
                </ul>
                <!-- end social media links -->
              </div>
              <div class="mt-12 xs:border-t md:border-l border-blueGray-200 text-center md:pl-6">
                <h2 class="text-xl font-semibold leading-normal mb-2 text-skin-base mb-2 font-nunito">Skills Set <i
                    class="fa-duotone fa-badge-check text-skin-invert"></i></h2>
                <template v-for="(skill, i) in skills" :key="i">
                  <skill-set-proficiency :title="skill.title" :color="skill.color" :percentage="skill.precentage"
                    :index="i"></skill-set-proficiency>
                </template>

              </div>
            </div>
            <!-- end skills and address summary -->

            <!-- Start brief description section -->
            <div class="flex flex-wrap justify-center my-20">
              <div class="w-full lg:w-10/12 xl:9/12 px-4">
                <p class="mb-4 text-lg leading-relaxed text-skin-accent dark:text-white">
                  A full-stack developer with 7+ years of experience in the development industry. Posesses extensive
                  skills
                  in developing software ranging from websites to web apps that are user-friendly and also responsive to
                  give
                  users a better experience even when accessing them using mobile phones.
                  All projects are developed using the latest frameworks both on the client-side and server-side.
                </p>
              </div>
            </div>
            <!-- End brief description section -->
          </div>
        </div>
      </div>
      <page-footer></page-footer>
    </section>
  </main>
</template>
