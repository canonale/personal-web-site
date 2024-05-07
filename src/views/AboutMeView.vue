<script setup lang="ts">
import IconOpenIA from "@/components/icons/IconOpenIA.vue";
import IconEmail from "@/components/icons/IconEmail.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconPin from "@/components/icons/IconPin.vue";
</script>
<template>
  <div class="my-20 py-20 px-4 xl:px-0 container">
    <h1 class="main-title mb-8">About Me</h1>
    <h2 id="adri-n-garc-a-casas">Adrián García Casas</h2>
    <p>
      <IconPin class="w-8 inline" />Valladolid, Spain<br />
      <IconEmail class="w-8 inline" /><a href="mailto:canonale@gmail.com"
        >canonale@gmail.com</a
      ><br />
      <IconPhone class="w-8 inline" /><a href="tel:+34669299226"
        >(+34) 669 29 92 26</a
      >
    </p>
    <h2 id="professional-summary-">Professional Summary:</h2>
    <p>
      Dynamic and results-oriented professional with a strong background in
      software engineering and proven leadership skills. Transitioned from a
      successful career as a software engineer to a managerial role, adept at
      fostering team collaboration, empowering decision-making, and cultivating
      a culture of continuous learning. Skilled in managing cloud-native
      applications, AWS infrastructure, automation using Ansible, and
      implementing infrastructure as code with Terraform. Proficient in Python
      for API development.
    </p>
    <h2 id="experience-">Experience:</h2>
    <h3 id="manager-2017-present-">Manager (2017 - Present)</h3>
    <p class="text-cyan-700">
      <a href="https://mlean.com">Mobile Lean</a>, Spain
    </p>
    <ul class="list">
      <li>
        Lead a team of software engineers, fostering an environment of
        collaboration, innovation, and continuous improvement.
      </li>
      <li>
        Spearheaded initiatives to streamline development processes, resulting
        in increased efficiency and faster time to market.
      </li>
      <li>
        Implemented best practices for cloud-native application development and
        maintenance, ensuring high availability and scalability.
      </li>
      <li>
        Managed AWS infrastructure, optimizing resource utilization and
        cost-effectiveness.
      </li>
      <li>
        Utilized Ansible for automating repetitive tasks and enhancing system
        reliability.
      </li>
      <li>
        Implemented infrastructure as code principles using Terraform, leading
        to improved infrastructure management and deployment consistency.
      </li>
      <li>
        Mentored team members, encouraging experimentation, risk-taking, and
        learning from failures.
      </li>
      <li>
        Developed and maintained robust, scalable software solutions using
        cutting-edge technologies.
      </li>
    </ul>
    <h3 id="manager-2008-2017-">Manager (2008 - 2017)</h3>
    <p class="text-cyan-400">
      <a href="https://www.cosmomedia.es">Cosmomedia</a>, Spain
    </p>
    <ul class="list">
      <li>
        Contributed to the design and implementation of cloud-native
        applications, ensuring reliability and scalability.
      </li>
      <li>
        Managed AWS resources and services to support application deployment and
        operation.
      </li>
      <li>
        Utilized Ansible for configuration management and automation of
        infrastructure tasks.
      </li>
      <li>
        Implemented infrastructure as code practices using Terraform to manage
        cloud resources efficiently.
      </li>
      <li>
        Developed and maintained APIs using Python, facilitating seamless
        integration with other systems and services.
      </li>
    </ul>
    <h2 id="education-">Education:</h2>
    <p>
      Bachelor&#39;s degree in Telecominications, University of Valladolid, 2005
    </p>
    <h2 id="skills-">Skills:</h2>
    <ul class="list">
      <li>Leadership and Team Management</li>
      <li>Cloud Native Application Development</li>
      <li>AWS Infrastructure Management</li>
      <li>Ansible Automation</li>
      <li>Terraform</li>
      <li>Python Development</li>
      <li>Agile Methodologies</li>
    </ul>

    <div class="mt-8">
      <p class="text-center text-gray-400">
        Made with <IconOpenIA class="w-8 inline" />
      </p>
    </div>
  </div>
</template>

<style scoped>
.list {
  @apply list-disc ml-4;
}
</style>
