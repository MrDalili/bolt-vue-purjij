<template>
  <div class="ielts-training">
    <header class="hero">
      <h1>IELTS 雅思培训</h1>
      <p class="tagline">提升您的英语能力，开启国际化未来</p>
      <button class="cta-button" @click="openConsultation">立即咨询</button>
    </header>

    <section class="course-settings">
      <h2>IELTS 课程设置</h2>
      <div class="settings-grid">
        <div class="setting-item" v-for="(setting, index) in courseSettings" :key="index">
          <div class="setting-icon" :class="setting.icon"></div>
          <h3>{{ setting.title }}</h3>
          <p>{{ setting.description }}</p>
        </div>
      </div>
    </section>

    <section class="ielts-skills">
      <h2>雅思四项技能培训</h2>
      <div class="skills-grid">
        <div class="skill-item" v-for="skill in ieltsSkills" :key="skill.name">
          <div class="skill-icon" :class="skill.icon"></div>
          <h3>{{ skill.name }}</h3>
          <ul>
            <li v-for="method in skill.methods" :key="method">{{ method }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="teaching-methods">
      <h2>教学方式</h2>
      <div class="methods-container">
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
      <button class="cta-button" @click="openConsultation">了解更多</button>
    </section>

    <section class="course-advantages">
      <h2>IELTS 课程优势</h2>
      <div class="advantages-grid">
        <div class="advantage-item" v-for="advantage in courseAdvantages" :key="advantage.title">
          <div class="advantage-icon" :class="advantage.icon"></div>
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.description }}</p>
        </div>
      </div>
      <button class="cta-button" @click="openConsultation">立即咨询</button>
    </section>

    <section class="education-advantages">
      <h2>帝联国际教育优势</h2>
      <div class="edu-advantages-container">
        <div class="edu-advantage-item" v-for="(advantage, index) in educationAdvantages" :key="index">
          <div class="edu-advantage-icon" :class="advantage.icon"></div>
          <div class="edu-advantage-content">
            <h3>{{ advantage.title }}</h3>
            <p>{{ advantage.description }}</p>
          </div>
        </div>
      </div>
      <button class="cta-button" @click="openConsultation">了解更多</button>
    </section>

    <section class="universities">
      <h2>接受 IELTS 成绩的大学</h2>
      <div class="university-grid">
        <div class="university-item" v-for="university in topUniversities" :key="university">
          <div class="university-logo"></div>
          <p>{{ university }}</p>
        </div>
      </div>
      <p class="more-info">以及更多世界顶尖大学...</p>
      <button class="cta-button" @click="openConsultation">查看完整列表</button>
    </section>

    <footer>
      <div class="contact-info">
        <h3>联系我们</h3>
        <p>电话：400-123-4567</p>
        <p>邮箱：info@dilianintl.com</p>
        <p>地址：北京市朝阳区</p>
      </div>
      <p class="slogan">帮助30万体制内外的中国学生进入世界前100名大学</p>
      <p class="legal">粤ICP备2024162354号-1 粤公网安备44010602012364号</p>
    </footer>

    <FloatingButtons />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FloatingButtons from './FloatingButtons.vue';

const courseSettings = ref([
  { title: '专业教学团队', description: '经验丰富的外教和中教', icon: 'team-icon' },
  { title: '个性化学习计划', description: '根据学生需求定制', icon: 'plan-icon' },
  { title: '全方位能力培养', description: '听说读写全面提升', icon: 'skills-icon' },
  { title: '真题模拟训练', description: '熟悉考试流程和题型', icon: 'exam-icon' },
  { title: '学习进度跟踪', description: '定期评估和反馈', icon: 'progress-icon' }
]);

const ieltsSkills = ref([
  {
    name: '听力',
    icon: 'listening-icon',
    methods: [
      '大量听力练习，包括各种口音和场景',
      '提高音素辨识能力',
      '训练快速记笔记技巧',
      '熟悉各类题型和答题策略'
    ]
  },
  {
    name: '口语',
    icon: 'speaking-icon',
    methods: [
      '一对一口语训练',
      '提高发音和语调',
      '扩展词汇和表达方式',
      '模拟考试情境，增强自信'
    ]
  },
  {
    name: '阅读',
    icon: 'reading-icon',
    methods: [
      '提高阅读速度和理解能力',
      '学习快速定位关键信息',
      '掌握各类题型的解题技巧',
      '扩大学术词汇量'
    ]
  },
  {
    name: '写作',
    icon: 'writing-icon',
    methods: [
      '学习各类作文结构和模板',
      '提高语法准确性和词汇多样性',
      '训练快速构思和组织观点',
      '定期写作练习和点评'
    ]
  }
]);

const courseAdvantages = ref([
  { title: '小班教学', description: '确保每位学生得到充分关注', icon: 'small-class-icon' },
  { title: '互动式教学', description: '提高学习兴趣和参与度', icon: 'interactive-icon' },
  { title: '考试技巧指导', description: '掌握IELTS考试答题策略', icon: 'strategy-icon' },
  { title: '模拟考试环境', description: '熟悉考试流程，减少紧张感', icon: 'simulation-icon' }
]);

const educationAdvantages = ref([
  { title: '优质师资', description: '来自世界顶尖大学的教师团队', icon: 'teacher-icon' },
  { title: '丰富经验', description: '多年国际教育服务经验', icon: 'experience-icon' },
  { title: '全面服务', description: '从语言培训到留学申请的一站式服务', icon: 'service-icon' },
  { title: '成功案例', description: '众多学生成功申请世界名校', icon: 'success-icon' }
]);

const topUniversities = ref([
  '牛津大学', '剑桥大学', '帝国理工学院', '伦敦大学学院', '爱丁堡大学', '曼彻斯特大学'
]);

function openConsultation() {
  console.log("Open consultation");
}
</script>

<style scoped>
.ielts-training {
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
}

.hero {
  background: linear-gradient(135deg, #1e5799 0%, #207cca 51%, #2989d8 100%);
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
  margin-bottom: 2rem;
}

h2 {
  font-size: 2.5rem;
  color: #1e5799;
  margin-bottom: 2rem;
  text-align: center;
}

section {
  margin-bottom: 4rem;
  padding: 2rem;
}

.settings-grid, .advantages-grid, .university-grid, .skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.setting-item, .advantage-item, .university-item, .skill-item {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.setting-item:hover, .advantage-item:hover, .university-item:hover, .skill-item:hover {
  transform: translateY(-5px);
}

.setting-icon, .advantage-icon, .method-icon, .edu-advantage-icon, .skill-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  background-color: #1e5799;
  border-radius: 50%;
}

.methods-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.method-item {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  flex-basis: 45%;
}

.edu-advantages-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.edu-advantage-item {
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.edu-advantage-item:hover {
  transform: translateX(10px);
}

.edu-advantage-content {
  margin-left: 1.5rem;
}

.university-logo {
  width: 100px;
  height: 100px;
  background-color: #e0e0e0;
  border-radius: 50%;
  margin: 0 auto 1rem;
}

.more-info {
  text-align: center;
  font-style: italic;
  margin-top: 1rem;
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

footer {
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
}

.contact-info {
  margin-bottom: 1rem;
}

.slogan {
  font-style: italic;
  margin-bottom: 1rem;
}

.legal {
  font-size: 0.8rem;
  color: #999;
}

.skill-item ul {
  list-style-type: none;
  padding-left: 0;
  text-align: left;
}

.skill-item li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.skill-item li::before {
  content: "•";
  color: #1e5799;
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.2rem;
  }

  .methods-container {
    flex-direction: column;
  }

  .method-item {
    flex-basis: 100%;
  }
}
</style>