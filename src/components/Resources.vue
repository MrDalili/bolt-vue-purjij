<template>
  <div class="resources">
    <h1>干货资料</h1>

    <section class="featured-resources">
      <h2>精选资料</h2>
      <div class="resource-grid">
        <div class="resource-item" v-for="resource in featuredResources" :key="resource.title">
          <div class="resource-icon" :class="resource.icon"></div>
          <h3>{{ resource.title }}</h3>
          <p>{{ resource.description }}</p>
          <button @click="downloadResource(resource)" class="download-button">下载资料</button>
        </div>
      </div>
    </section>

    <section class="resource-categories">
      <h2>资料分类</h2>
      <div class="category-grid">
        <div class="category-item" v-for="category in resourceCategories" :key="category.name">
          <div class="category-icon" :class="category.icon"></div>
          <h3>{{ category.name }}</h3>
          <ul>
            <li v-for="item in category.items" :key="item">{{ item }}</li>
          </ul>
          <button @click="exploreCategory(category)" class="explore-button">探索更多</button>
        </div>
      </div>
    </section>

    <section class="latest-articles">
      <h2>最新文章</h2>
      <div class="article-list">
        <div class="article-item" v-for="article in latestArticles" :key="article.title">
          <div class="article-image"></div>
          <div class="article-content">
            <h3>{{ article.title }}</h3>
            <p>{{ article.summary }}</p>
            <a href="#" @click.prevent="readArticle(article)" class="read-more">阅读全文</a>
          </div>
        </div>
      </div>
    </section>

    <section class="resource-request">
      <h2>没找到你需要的资料？</h2>
      <p>告诉我们你想要的资料，我们会尽快为你准备！</p>
      <button @click="openResourceRequest" class="cta-button">申请资料</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const featuredResources = ref([
  { title: '2024年留学申请全攻略', description: '最新留学申请流程、注意事项和成功技巧', icon: 'guide-icon' },
  { title: 'TOP50大学申请要求汇总', description: '世界顶尖大学的录取标准和申请材料清单', icon: 'university-icon' },
  { title: '留学文书写作指南', description: '如何撰写一篇出色的个人陈述和文书', icon: 'writing-icon' },
  { title: '留学考试备考策略', description: 'TOEFL、IELTS、SAT、GRE等考试的备考技巧', icon: 'exam-icon' }
]);

const resourceCategories = ref([
  { name: '留学国家指南', icon: 'country-icon', items: ['美国', '英国', '加拿大', '澳大利亚', '新西兰', '日本'] },
  { name: '专业选择指南', icon: 'major-icon', items: ['工程类', '商科类', '艺术类', '医学类', 'IT类'] },
  { name: '签证申请指南', icon: 'visa-icon', items: ['学生签证', '工作签证', '旅游签证', '签证面试技巧'] },
  { name: '海外生活指南', icon: 'life-icon', items: ['住宿', '交通', '饮食', '文化适应', '安全须知'] }
]);

const latestArticles = ref([
  { title: '如何选择适合自己的留学中介？', summary: '本文将为你提供选择留学中介的关键考虑因素和注意事项...' },
  { title: '2024年最新留学趋势分析', summary: '探讨后疫情时代留学形势的变化和新兴热门专业...' },
  { title: '留学省钱攻略：如何申请奖学金？', summary: '详细介绍各类奖学金的申请条件、流程和技巧...' }
]);

const downloadResource = (resource: any) => {
  console.log(`Downloading resource: ${resource.title}`);
  // 实现下载逻辑
};

const exploreCategory = (category: any) => {
  console.log(`Exploring category: ${category.name}`);
  // 实现类别探索逻辑
};

const readArticle = (article: any) => {
  console.log(`Reading article: ${article.title}`);
  // 实现文章阅读逻辑
};

const openResourceRequest = () => {
  console.log('Opening resource request form');
  // 实现资料申请表单逻辑
};
</script>

<style scoped>
.resources {
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

.resource-grid, .category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.resource-item, .category-item {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.resource-item:hover, .category-item:hover {
  transform: translateY(-5px);
}

.resource-icon, .category-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  background-color: #e0e0e0;
  border-radius: 50%;
}

.download-button, .explore-button, .cta-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.download-button:hover, .explore-button:hover, .cta-button:hover {
  background-color: #0056b3;
}

.category-item ul {
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
}

.category-item li {
  margin-bottom: 0.5rem;
}

.article-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.article-item {
  display: flex;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.article-image {
  width: 200px;
  background-color: #e0e0e0;
}

.article-content {
  padding: 1.5rem;
  flex: 1;
}

.read-more {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.resource-request {
  text-align: center;
}

.resource-request p {
  margin-bottom: 1.5rem;
}

.cta-button {
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
}
</style>