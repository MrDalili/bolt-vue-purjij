<template>
  <div class="a-level">
    <header class="hero">
      <h1>A-Level 课程</h1>
      <p class="tagline">为您的国际教育之旅打下坚实基础</p>
    </header>

    <section class="course-intro">
      <h2>课程介绍</h2>
      <div class="intro-content">
        <div class="intro-text">
          <p>A-Level（General Certificate of Education Advanced Level）是英国高中课程体系，也是英国学生的大学入学考试课程。在中国，A-Level 课程为学生提供了一个进入国外顶尖大学的有效途径。</p>
          <p>我们的 A-Level 课程结合了中国学生的学习特点和中国基础教育的优势，开设了包括基础数学、高等数学、物理、化学、会计、经济等课程供学生选择。</p>
        </div>
        <div class="intro-image"></div>
      </div>
    </section>

    <section class="destinations">
      <h2>A-Level 可以去哪里？</h2>
      <div class="destination-grid">
        <div v-for="destination in destinations" :key="destination" class="destination-item">
          <div class="destination-icon"></div>
          <span>{{ destination }}</span>
        </div>
      </div>
      <p class="destination-note">几乎所有以英语授课的国家和地区都认可 A-Level 课程证书。如果你有良好的 A-Level 成绩，可以直接申请作为大一新生就读世界知名大学。</p>
    </section>

    <section class="teaching-team">
      <h2>教学团队</h2>
      <div class="team-info">
        <div class="team-section">
          <h3>讲师团队</h3>
          <div class="teacher-avatars">
            <div class="teacher-avatar" v-for="n in 5" :key="n"></div>
          </div>
          <p>[购买课程后根据匹配的老师为准]</p>
        </div>
        <div class="team-section">
          <h3>后端交付团队</h3>
          <div class="support-icons">
            <div class="support-icon" v-for="n in 3" :key="n"></div>
          </div>
          <p>专业的后勤支持，确保您的学习体验无忧</p>
        </div>
      </div>
    </section>

    <section class="course-benefits">
      <h2>课程优势</h2>
      <div class="benefits-grid">
        <div class="benefit-item" v-for="benefit in courseBenefits" :key="benefit.title">
          <div class="benefit-icon" :class="benefit.icon"></div>
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.description }}</p>
        </div>
      </div>
    </section>

    <section class="teaching-methods">
      <h2>教学方式</h2>
      <div class="methods-container">
        <div class="method-item">
          <div class="method-icon online-icon"></div>
          <h3>线上教学</h3>
          <p>灵活的学习时间，随时随地学习</p>
        </div>
        <div class="method-item">
          <div class="method-icon offline-icon"></div>
          <h3>线下教学</h3>
          <p>面对面互动，深入理解知识点</p>
        </div>
        <div class="method-item">
          <div class="method-icon omo-icon"></div>
          <h3>OMO双师课堂</h3>
          <p>线上线下结合，优化学习体验</p>
        </div>
      </div>
    </section>

    <section class="class-mode">
      <h2>上课模式和流程</h2>
      <div class="mode-timeline">
        <div class="timeline-item" v-for="(item, index) in classModes" :key="index">
          <div class="timeline-icon">{{ index + 1 }}</div>
          <div class="timeline-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <h2>开启您的 A-Level 学习之旅</h2>
      <p>立即联系我们，获取更多课程信息和个性化学习方案</p>
      <button @click="openConsultation" class="cta-button">立即咨询</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const destinations = ref([
  '英国', '中国香港', '加拿大', '澳大利亚', '爱尔兰', '新加坡', '南非', '美国'
]);

const courseBenefits = ref([
  { title: '国际认可', description: 'A-Level 证书受到全球顶尖大学的认可', icon: 'globe-icon' },
  { title: '专业师资', description: '经验丰富的外教和中教团队', icon: 'teacher-icon' },
  { title: '个性化辅导', description: '根据学生需求定制学习计划', icon: 'plan-icon' },
  { title: '全面发展', description: '注重学术能力和软实力的培养', icon: 'growth-icon' }
]);

const classModes = ref([
  { title: '课前预习', description: '提前了解课程内容，做好学习准备' },
  { title: '课堂讲解', description: '老师深入讲解知识点，互动答疑' },
  { title: '课后复习', description: '回看课程录播，巩固所学知识' },
  { title: '作业批改', description: '老师批改作业，针对性指导' },
  { title: '答疑解惑', description: '一对一在线答疑，解决学习难题' }
]);

const openConsultation = () => {
  console.log("打开咨询");
};
</script>

<style scoped>
.a-level {
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
}

section {
  margin-bottom: 4rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.intro-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.intro-text {
  flex: 1;
}

.intro-image {
  flex: 1;
  height: 300px;
  background-color: #e0e0e0;
  border-radius: 10px;
}

.destination-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.destination-item {
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.destination-item:hover {
  transform: translateY(-5px);
}

.destination-icon {
  width: 60px;
  height: 60px;
  background-color: #1e5799;
  border-radius: 50%;
  margin: 0 auto 1rem;
}

.destination-note {
  text-align: center;
  font-style: italic;
  margin-top: 2rem;
}

.team-info {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.team-section {
  flex: 1;
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.teacher-avatars, .support-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.teacher-avatar, .support-icon {
  width: 50px;
  height: 50px;
  background-color: #e0e0e0;
  border-radius: 50%;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.benefit-item {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-5px);
}

.benefit-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  background-color: #1e5799;
  border-radius: 50%;
}

.methods-container {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
}

.method-item {
  flex: 1;
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.method-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  background-color: #1e5799;
  border-radius: 50%;
}

.mode-timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline-item {
  margin-bottom: 2rem;
  position: relative;
}

.timeline-icon {
  position: absolute;
  left: -2rem;
  width: 40px;
  height: 40px;
  background-color: #1e5799;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.timeline-content {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cta {
  text-align: center;
  background-color: #1e5799;
  color: white;
}

.cta-button {
  background-color: white;
  color: #1e5799;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 2rem;
}

.cta-button:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .intro-content, .team-info, .methods-container {
    flex-direction: column;
  }

  .destination-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>