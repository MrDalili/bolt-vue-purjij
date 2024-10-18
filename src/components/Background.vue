<template>
  <div class="background">
    <header class="hero">
      <h1>背景提升</h1>
      <p class="tagline">为您的留学申请锦上添花</p>
    </header>

    <section class="international-competition">
      <h2>国际竞赛</h2>
      <div class="competition-grid">
        <div class="competition-item" v-for="competition in competitions" :key="competition.name">
          <div class="competition-icon" :class="competition.icon"></div>
          <h3>{{ competition.name }}</h3>
        </div>
      </div>
      <div class="benefits">
        <h3>参与国际竞赛的收获：</h3>
        <ul>
          <li v-for="benefit in competitionBenefits" :key="benefit">{{ benefit }}</li>
        </ul>
      </div>
      <button @click="openConsultation" class="cta-button">立即咨询</button>
    </section>

    <section class="research-papers">
      <h2>科研论文</h2>
      <div class="research-content">
        <div class="research-image"></div>
        <div class="research-text">
          <h3>科研项目</h3>
          <p>通过参与世界知名大学的科研项目，申请者可以有效提高自己的科研背景，并获得世界知名大学的推荐信，大大提高了科研背景和申请成功率。</p>
          <h3>收获：</h3>
          <ul>
            <li v-for="benefit in researchBenefits" :key="benefit">{{ benefit }}</li>
          </ul>
        </div>
      </div>
      <button @click="openConsultation" class="cta-button">立即咨询</button>
    </section>

    <section class="internship">
      <h2>优质实习</h2>
      <div class="internship-content">
        <p>在知名公司提供数据分析、金融、会计、市场营销、运营、开发、物流供应链等高价值实习岗位。深度参与项目，全面提升申请者的软实力。</p>
        <div class="internship-grid">
          <div class="internship-item" v-for="internship in internships" :key="internship">
            <div class="internship-icon"></div>
            <span>{{ internship }}</span>
          </div>
        </div>
        <h3>收获：</h3>
        <ul>
          <li v-for="benefit in internshipBenefits" :key="benefit">{{ benefit }}</li>
        </ul>
      </div>
      <button @click="openConsultation" class="cta-button">立即咨询</button>
    </section>

    <section class="summer-school">
      <h2>暑期学校游学</h2>
      <div class="summer-school-content">
        <div class="summer-school-image"></div>
        <div class="summer-school-text">
          <p>参加世界顶尖大学的暑期学校，体验海外学习生活，提前适应国际化教育环境。</p>
          <h3>优势：</h3>
          <ul>
            <li>亲身体验名校学习氛围</li>
            <li>提前适应海外学习生活</li>
            <li>结识来自世界各地的朋友</li>
            <li>获得名校教授的推荐信</li>
          </ul>
        </div>
      </div>
      <button @click="openConsultation" class="cta-button">立即咨询</button>
    </section>

    <section class="international-conference">
      <h2>国际会议论文单项服务</h2>
      <div class="conference-content">
        <h3>EI/SCOPUS 期刊论文（全程辅导版）</h3>
        <ul>
          <li v-for="feature in conferenceFeatures" :key="feature">{{ feature }}</li>
        </ul>
      </div>
      <button @click="openConsultation" class="cta-button">立即咨询</button>
    </section>

    <section class="international-epq">
      <h2>国际 EPQ 独立研究项目</h2>
      <div class="epq-content">
        <p>国际 EPQ 项目（OxfordAQA International Extended Project Qualification）是牛津 AQA 考试局专门为国际高中生设置的一项基于研究的学习认证。国际 EPQ 旨在通过项目式学习培养学生的独立研究能力。</p>
        <div class="epq-features">
          <div class="epq-feature" v-for="feature in epqFeatures" :key="feature">
            <div class="feature-icon"></div>
            <span>{{ feature }}</span>
          </div>
        </div>
      </div>
      <button @click="openConsultation" class="cta-button">立即咨询</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const competitions = ref([
  { name: 'AMC', icon: 'amc-icon' },
  { name: '滑铁卢大学国际数学竞赛', icon: 'waterloo-icon' },
  { name: 'BMO', icon: 'bmo-icon' },
  { name: 'MAT', icon: 'mat-icon' },
  { name: 'STEP', icon: 'step-icon' },
  { name: 'PAT', icon: 'pat-icon' },
  { name: 'Physics Bowl', icon: 'physics-bowl-icon' }
]);

const competitionBenefits = ref([
  '丰富您的简历',
  '提高您的学术实力',
  '增加您的专业录取概率',
  '增加您申请奖学金的概率'
]);

const researchBenefits = ref([
  '顶尖大学学者的个人推荐信',
  '提高口头表达和项目汇报能力',
  '团队合作能力'
]);

const internships = ref([
  '数据分析', '金融', '会计', '市场营销', '运营', '开发', '物流供应链'
]);

const internshipBenefits = ref([
  '世界知名公司的实习经验',
  '全面了解世界知名公司工作者的日常生活',
  '世界知名公司高管的个人推荐信'
]);

const conferenceFeatures = ref([
  '远程一对一指导',
  '100% 覆盖所有学科，文/理/工/商/计算机',
  '100% 量身定制选题，匹配教授，自由选题',
  '独立第一作者，权威期刊，专业保障硬输出'
]);

const epqFeatures = ref([
  '无专业限制',
  '无需考试',
  '自选课题',
  '导师指导',
  '培养研究能力'
]);

const openConsultation = () => {
  console.log("打开咨询");
};
</script>

<style scoped>
.background {
  font-family: 'Arial', sans-serif;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  background: linear-gradient(135deg, #1e5799 0%,#207cca 51%,#2989d8 100%);
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  border-radius: 10px;
  margin-bottom: 3rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tagline {
  font-size: 1.5rem;
  font-weight: 300;
}

h2 {
  font-size: 2.5rem;
  color: #1e5799;
  margin-bottom: 2rem;
  text-align: center;
  border-bottom: 2px solid #1e5799;
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.8rem;
  color: #1e5799;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 4rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

section:hover {
  transform: translateY(-5px);
}

.competition-grid, .internship-grid, .epq-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.competition-item, .internship-item, .epq-feature {
  text-align: center;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.competition-item:hover, .internship-item:hover, .epq-feature:hover {
  transform: translateY(-5px);
}

.competition-icon, .internship-icon, .feature-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  background-color: #e0e0e0;
  border-radius: 50%;
}

.benefits ul, .research-text ul, .internship-content ul, .summer-school-text ul, .conference-content ul {
  list-style-type: none;
  padding-left: 0;
}

.benefits li, .research-text li, .internship-content li, .summer-school-text li, .conference-content li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.benefits li::before, .research-text li::before, .internship-content li::before, .summer-school-text li::before, .conference-content li::before {
  content: "•";
  color: #1e5799;
  font-size: 1.5rem;
  position: absolute;
  left: 0;
  top: -0.2rem;
}

.cta-button {
  background-color: #1e5799;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
  display: block;
  margin: 2rem auto 0;
}

.cta-button:hover {
  background-color: #2989d8;
  transform: scale(1.05);
}

.research-content, .summer-school-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.research-image, .summer-school-image {
  flex: 1;
  height: 300px;
  background-color: #e0e0e0;
  border-radius: 10px;
}

.research-text, .summer-school-text {
  flex: 1;
}

@media (max-width: 768px) {
  .research-content, .summer-school-content {
    flex-direction: column;
  }

  .competition-grid, .internship-grid, .epq-features {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>