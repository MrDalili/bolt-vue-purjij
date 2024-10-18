<template>
  <div class="home">
    <header class="hero">
      <h1 class="hero-title">帝联国际教育</h1>
      <p class="hero-subtitle">引领您的国际教育之旅</p>
      <button @click="openConsultation" class="cta-button">立即咨询</button>
    </header>

    <section class="services">
      <h2 class="section-title">我们的服务</h2>
      <div class="service-grid">
        <div class="service-item" v-for="service in services" :key="service.title">
          <div class="service-icon" :class="service.icon"></div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <router-link :to="service.link" class="learn-more">了解更多</router-link>
        </div>
      </div>
    </section>

    <section class="about-us">
      <h2 class="section-title">关于我们</h2>
      <div class="about-content">
        <div class="about-text">
          <p>帝联国际教育由2019年底毕业于帝国理工学院的宋子良（Vincent）先生创立，致力于为中国学生提供高质量、低成本的国际教育资源。</p>
          <ul class="about-stats">
            <li><strong>2</strong> 线下校区</li>
            <li><strong>40+</strong> 全职员工</li>
            <li><strong>20+</strong> 全职教师</li>
            <li><strong>150+</strong> 年均学生</li>
          </ul>
        </div>
        <div class="about-image"></div>
      </div>
      <router-link to="/about" class="learn-more">了解更多</router-link>
    </section>

    <section class="success-stories">
      <h2 class="section-title">成功案例</h2>
      <div class="story-carousel">
        <div class="story-item" v-for="story in successStories" :key="story.name">
          <div class="story-image"></div>
          <h3>{{ story.name }}</h3>
          <p>{{ story.description }}</p>
        </div>
      </div>
    </section>

    <section class="resources">
      <h2 class="section-title">精选资料</h2>
      <div class="resource-grid">
        <div class="resource-item" v-for="resource in featuredResources" :key="resource.title">
          <div class="resource-icon" :class="resource.icon"></div>
          <h3>{{ resource.title }}</h3>
          <p>{{ resource.description }}</p>
          <button @click="downloadResource(resource)" class="download-button">下载资料</button>
        </div>
      </div>
      <router-link to="/resources" class="learn-more">查看更多资料</router-link>
    </section>

    <section class="contact">
      <h2 class="section-title">联系我们</h2>
      <div class="contact-content">
        <div class="contact-info">
          <p><strong>电话：</strong> 400-123-4567</p>
          <p><strong>邮箱：</strong> info@dilianintl.com</p>
          <p><strong>地址：</strong> 北京市朝阳区</p>
        </div>
        <form @submit.prevent="submitForm" class="contact-form">
          <input type="text" placeholder="姓名" required>
          <input type="email" placeholder="邮箱" required>
          <textarea placeholder="留言" required></textarea>
          <button type="submit" class="submit-button">发送消息</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const services = ref([
  { title: 'A-Level课程', description: '为您的国际教育之旅打下坚实基础', icon: 'alevel-icon', link: '/a-level' },
  { title: '雅思培训', description: '提升您的英语能力，开启国际化未来', icon: 'ielts-icon', link: '/ielts' },
  { title: '背景提升', description: '为您的留学申请锦上添花', icon: 'background-icon', link: '/background' },
  { title: '留学申请', description: '专业团队助您圆梦世界名校', icon: 'application-icon', link: '/application' }
]);

const successStories = ref([
  { name: '李同学 - 哈佛大学', description: 'GPA 3.8，托福110，SAT 1500，成功申请哈佛大学计算机科学专业。' },
  { name: '张同学 - 牛津大学', description: 'A-Level 3A*，雅思8.0，成功申请牛津大学经济与管理专业。' },
  { name: '王同学 - 麻省理工学院', description: 'GPA 3.9，托福114，SAT 1560，成功申请麻省理工学院电子工程专业。' }
]);

const featuredResources = ref([
  { title: '2024年留学申请全攻略', description: '最新留学申请流程、注意事项和成功技巧', icon: 'guide-icon' },
  { title: 'TOP50大学申请要求汇总', description: '世界顶尖大学的录取标准和申请材料清单', icon: 'university-icon' },
  { title: '留学文书写作指南', description: '如何撰写一篇出色的个人陈述和文书', icon: 'writing-icon' }
]);

function openConsultation() {
  console.log("Open consultation");
}

function downloadResource(resource: any) {
  console.log(`Downloading resource: ${resource.title}`);
}

function submitForm() {
  console.log("Form submitted");
}
</script>

<style scoped>
.home {
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
}

.hero {
  background: linear-gradient(135deg, #1e5799 0%, #207cca 51%, #2989d8 100%);
  color: white;
  text-align: center;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('path_to_your_image.jpg') center center/cover no-repeat;
  opacity: 0.2;
  z-index: 0;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.cta-button {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.cta-button:hover {
  background-color: #ff8787;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.section-title {
  font-size: 2.5rem;
  color: #1e5799;
  text-align: center;
  margin-bottom: 2rem;
}

.services, .about-us, .success-stories, .resources, .contact {
  padding: 4rem 2rem;
}

.service-grid, .resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.service-item, .resource-item {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.service-item:hover, .resource-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.service-icon, .resource-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  background-color: #1e5799;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
}

.learn-more {
  display: inline-block;
  margin-top: 1rem;
  color: #1e5799;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.learn-more:hover {
  color: #2989d8;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.about-text {
  flex: 1;
}

.about-image {
  flex: 1;
  height: 300px;
  background-color: #e0e0e0;
  border-radius: 10px;
}

.about-stats {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
}

.about-stats li {
  text-align: center;
}

.about-stats strong {
  display: block;
  font-size: 2rem;
  color: #1e5799;
}

.story-carousel {
  display: flex;
  overflow-x: auto;
  gap: 2rem;
  padding: 1rem 0;
}

.story-item {
  flex: 0 0 300px;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.story-image {
  width: 100px;
  height: 100px;
  background-color: #e0e0e0;
  border-radius: 50%;
  margin: 0 auto 1rem;
}

.download-button {
  background-color: #1e5799;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.download-button:hover {
  background-color: #2989d8;
}

.contact-content {
  display: flex;
  gap: 2rem;
}

.contact-info, .contact-form {
  flex: 1;
}

.contact-form input, .contact-form textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  background-color: #1e5799;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #2989d8;
}

@media (max-width: 768px) {
  .about-content, .contact-content {
    flex-direction: column;
  }

  .about-stats {
    flex-wrap: wrap;
  }

  .about-stats li {
    flex-basis: 50%;
    margin-bottom: 1rem;
  }
}
</style>