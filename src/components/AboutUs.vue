<template>
  <div class="about-us">
    <header class="hero">
      <h1>关于帝联国际教育</h1>
      <p class="tagline">引领您的国际教育之旅</p>
    </header>

    <section class="our-story">
      <h2>我们的故事</h2>
      <div class="story-content">
        <div class="story-text">
          <p>
            帝联国际教育由2019年底毕业于帝国理工学院的宋子良（Vincent）先生创立，最初由一个G5背景的科学和工程团队开发。我们的使命是整合和输出英国顶尖大学的双语教师教育资源到中国社会，打破国际课程辅导高收费的传统。
          </p>
          <p>
            我们致力于为中国数十万IGCSE和A-Level学生提供质量最高、价格最低的综合线上线下国际课程中心。帝联的诞生源于那些需要它的人，我们努力成为一站式服务平台，在保证质量的前提下延伸到课程的各个方面。
          </p>
        </div>
        <div class="story-image"></div>
      </div>
    </section>

    <section class="our-growth">
      <h2>我们的成长</h2>
      <div class="growth-stats">
        <div class="stat-item">
          <span class="stat-number">2</span>
          <span class="stat-label">线下校区</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">40+</span>
          <span class="stat-label">全职员工</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">20+</span>
          <span class="stat-label">全职教师</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">150+</span>
          <span class="stat-label">年均学生</span>
        </div>
      </div>
    </section>

    <section class="our-team">
      <h2>我们的团队</h2>
      <div class="team-grid">
        <div v-for="dept in departments" :key="dept.name" class="team-card">
          <div class="team-icon" :class="dept.icon"></div>
          <h3>{{ dept.name }}</h3>
          <h4>{{ dept.subTitle }}</h4>
          <p>{{ dept.description }}</p>
        </div>
      </div>
    </section>

    <section class="our-vision">
      <h2>我们的愿景</h2>
      <div class="vision-content">
        <p>
          帝联国际教育致力于成为中国领先的国际教育服务提供商，我们的目标是：
        </p>
        <ul>
          <li>为学生提供世界一流的教育资源</li>
          <li>培养具有国际视野的未来领袖</li>
          <li>推动教育创新，提升学习体验</li>
          <li>建立广泛的国际合作网络</li>
        </ul>
      </div>
    </section>

    <section class="contact-us">
      <h2>联系我们</h2>
      <p>想了解更多关于帝联国际教育的信息？我们随时欢迎您的咨询！</p>
      <button @click="openConsultation" class="cta-button">立即咨询</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const departments = ref([
  { name: 'A-Level团队', subTitle: '教师团队', description: '经验丰富的A-Level专家', icon: 'icon-alevel' },
  { name: '雅思英语团队', subTitle: '教师团队', description: '专业的语言培训导师', icon: 'icon-ielts' },
  { name: '留学申请团队', subTitle: '文书老师', description: '资深的留学申请顾问', icon: 'icon-application' },
  { name: '新媒体部门', subTitle: '', description: '创新的内容创作团队', icon: 'icon-media' },
  { name: '校园运营团队', subTitle: '', description: '高效的校园管理专家', icon: 'icon-campus' }
]);

const openConsultation = () => {
  console.log("打开咨询");
};
</script>

<style scoped>
.about-us {
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
}

.hero {
  background: linear-gradient(135deg, #1e5799 0%,#207cca 51%,#2989d8 100%);
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tagline {
  font-size: 1.5rem;
  font-weight: 300;
}

section {
  margin-bottom: 4rem;
}

h2 {
  font-size: 2.5rem;
  color: #1e5799;
  margin-bottom: 2rem;
  text-align: center;
}

.our-story .story-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.story-text {
  flex: 1;
}

.story-image {
  flex: 1;
  height: 300px;
  background-color: #e0e0e0;
  border-radius: 10px;
}

.growth-stats {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.stat-item {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-10px);
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: #1e5799;
  display: block;
}

.stat-label {
  font-size: 1.2rem;
  color: #666;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.team-card {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-10px);
}

.team-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  background-color: #1e5799;
  border-radius: 50%;
}

.team-card h3 {
  color: #1e5799;
  margin-bottom: 0.5rem;
}

.team-card h4 {
  color: #666;
  font-weight: normal;
  margin-bottom: 1rem;
}

.vision-content {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.vision-content ul {
  list-style-type: none;
  padding-left: 0;
}

.vision-content li {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
}

.vision-content li::before {
  content: "•";
  color: #1e5799;
  font-size: 1.5rem;
  position: absolute;
  left: 0;
  top: -0.2rem;
}

.contact-us {
  text-align: center;
  background-color: #f8f9fa;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cta-button {
  background-color: #1e5799;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #2989d8;
}

@media (max-width: 768px) {
  .our-story .story-content {
    flex-direction: column;
  }

  .growth-stats {
    flex-wrap: wrap;
  }

  .stat-item {
    flex-basis: 45%;
    margin-bottom: 1rem;
  }
}
</style>