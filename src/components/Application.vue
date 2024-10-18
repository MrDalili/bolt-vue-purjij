<template>
  <div class="application">
    <h1>留学申请</h1>
    
    <section class="application-process">
      <h2>留学申请流程</h2>
      <div class="process-steps">
        <div class="step" v-for="step in 6" :key="step">
          <div class="step-icon">{{ step }}</div>
          <p>{{ getStepName(step) }}</p>
        </div>
      </div>
      <button @click="openConsultation" class="cta-button">立即咨询</button>
    </section>

    <section class="application-team">
      <h2>申请团队</h2>
      <div class="team-members">
        <div class="team-member">
          <h3>文书老师</h3>
          <div class="team-member-image"></div>
          <p>[更多教师信息，请联系帝联国际教育]</p>
        </div>
        <div class="team-member">
          <h3>咨询团队</h3>
          <div class="team-member-image"></div>
          <p>[更多教师信息，请联系帝联国际教育]</p>
        </div>
      </div>
      <button @click="openConsultation" class="cta-button">立即咨询</button>
    </section>

    <section class="popular-countries">
      <h2>热门留学国家</h2>
      <div class="country-grid">
        <div class="country-item" v-for="country in popularCountries" :key="country.name">
          <div class="country-flag"></div>
          <h3>{{ country.name }}</h3>
        </div>
      </div>
      <button @click="openConsultation" class="cta-button">立即咨询</button>
    </section>

    <section class="success-cases">
      <h2>成功案例</h2>
      <div class="case-grid">
        <div class="case-item" v-for="(caseItem, index) in successCases" :key="index">
          <div class="case-image"></div>
          <h3>{{ caseItem.title }}</h3>
          <p>{{ caseItem.description }}</p>
        </div>
      </div>
      <button @click="openConsultation" class="cta-button">立即咨询</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const openConsultation = () => {
  console.log("打开咨询");
};

const getStepName = (step: number) => {
  const stepNames = ['初步咨询', '评估规划', '选校定位', '材料准备', '递交申请', '跟踪结果'];
  return stepNames[step - 1];
};

const popularCountries = ref([
  { name: '美国' },
  { name: '英国' },
  { name: '加拿大' },
  { name: '澳大利亚' },
  { name: '新西兰' },
  { name: '日本' },
]);

const successCases = ref([
  {
    title: '李同学 - 哈佛大学',
    description: 'GPA 3.8，托福110，SAT 1500，成功申请哈佛大学计算机科学专业。'
  },
  {
    title: '张同学 - 牛津大学',
    description: 'A-Level 3A*，雅思8.0，成功申请牛津大学经济与管理专业。'
  },
  {
    title: '王同学 - 麻省理工学院',
    description: 'GPA 3.9，托福114，SAT 1560，成功申请麻省理工学院电子工程专业。'
  },
]);
</script>

<style scoped>
.application {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 1.5rem;
}

section {
  margin-bottom: 4rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.process-steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.step {
  text-align: center;
}

.step-icon {
  width: 50px;
  height: 50px;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 auto 1rem;
}

.cta-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  display: block;
  margin: 2rem auto 0;
}

.cta-button:hover {
  background-color: #0056b3;
}

.team-members {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
}

.team-member {
  text-align: center;
}

.team-member-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin: 0 auto 1rem;
}

.country-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.country-item {
  text-align: center;
}

.country-flag {
  width: 100px;
  height: 60px;
  background-color: #e0e0e0;
  margin: 0 auto 1rem;
}

.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.case-item {
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.case-image {
  width: 100%;
  height: 200px;
  background-color: #e0e0e0;
}

.case-item h3 {
  font-size: 1.2rem;
  margin: 1rem;
}

.case-item p {
  font-size: 0.9rem;
  margin: 0 1rem 1rem;
  color: #666;
}
</style>