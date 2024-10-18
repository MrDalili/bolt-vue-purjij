<template>
  <div class="full-time">
    <h1>脱产全日制</h1>

    <section class="intro">
      <h2>课程介绍</h2>
      <p>帝联国际教育的脱产全日制课程为学生提供全面的学习体验，帮助学生快速提升学术能力和语言水平，为海外留学做好充分准备。我们的课程设置科学合理，教学团队经验丰富，为学生提供最优质的教育资源。</p>
    </section>

    <section class="course-features">
      <h2>课程特点</h2>
      <div class="feature-grid">
        <div class="feature-item" v-for="feature in courseFeatures" :key="feature.title">
          <div class="feature-icon" :class="feature.icon"></div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <section class="course-structure">
      <h2>课程结构</h2>
      <div class="structure-timeline">
        <div class="timeline-item" v-for="(item, index) in courseStructure" :key="index">
          <div class="timeline-icon">{{ index + 1 }}</div>
          <div class="timeline-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="faculty">
      <h2>师资力量</h2>
      <div class="teacher-grid">
        <div class="teacher-item" v-for="teacher in teachers" :key="teacher.name">
          <div class="teacher-image"></div>
          <h3>{{ teacher.name }}</h3>
          <p>{{ teacher.title }}</p>
          <p>{{ teacher.description }}</p>
        </div>
      </div>
    </section>

    <section class="facilities">
      <h2>教学设施</h2>
      <div class="facility-grid">
        <div class="facility-item" v-for="facility in facilities" :key="facility.name">
          <div class="facility-icon" :class="facility.icon"></div>
          <h3>{{ facility.name }}</h3>
          <p>{{ facility.description }}</p>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <h2>学生反馈</h2>
      <div class="testimonial-carousel">
        <div class="testimonial-item" v-for="testimonial in testimonials" :key="testimonial.name">
          <p>"{{ testimonial.content }}"</p>
          <div class="testimonial-author">
            <div class="author-image"></div>
            <div class="author-info">
              <h4>{{ testimonial.name }}</h4>
              <p>{{ testimonial.background }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="enrollment">
      <h2>报名流程</h2>
      <ol class="enrollment-steps">
        <li v-for="step in enrollmentSteps" :key="step">{{ step }}</li>
      </ol>
      <button @click="openEnrollment" class="cta-button">立即报名</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const courseFeatures = ref([
  { title: '小班教学', description: '每班不超过15人，确保每位学生得到充分关注', icon: 'class-icon' },
  { title: '个性化辅导', description: '根据学生个人情况制定学习计划，定期进行一对一辅导', icon: 'tutor-icon' },
  { title: '全英文环境', description: '营造全英文学习氛围，提高学生的语言应用能力', icon: 'language-icon' },
  { title: '模拟考试', description: '定期进行模拟考试，帮助学生熟悉考试流程和题型', icon: 'exam-icon' }
]);

const courseStructure = ref([
  { title: '入学评估', description: '对学生进行全面评估，了解学生的学术水平和语言能力' },
  { title: '基础课程', description: '夯实学生的学科基础知识，提高英语听说读写能力' },
  { title: '强化训练', description: '针对性地进行学科知识强化和考试技巧训练' },
  { title: '模拟考试', description: '进行全真模拟考试，找出不足并有针对性地进行改进' },
  { title: '留学申请', description: '指导学生完成留学申请材料，进行面试训练' }
]);

const teachers = ref([
  { name: '张教授', title: 'A-Level数学教师', description: '剑桥大学数学博士，拥有10年A-Level教学经验' },
  { name: '李博士', title: 'IELTS培训专家', description: '英国曼彻斯特大学语言学博士，IELTS考官' },
  { name: '王老师', title: '留学申请顾问', description: '哈佛大学教育学硕士，曾任某知名大学招生官' }
]);

const facilities = ref([
  { name: '多媒体教室', description: '配备先进的教学设备，为学生提供优质的学习环境', icon: 'classroom-icon' },
  { name: '图书馆', description: '藏书丰富，包括各类学科教材和英语学习资料', icon: 'library-icon' },
  { name: '自习室', description: '安静舒适的自习环境，24小时开放', icon: 'study-room-icon' },
  { name: '休息区', description: '提供舒适的休息空间，帮助学生放松身心', icon: 'lounge-icon' }
]);

const testimonials = ref([
  { name: '李同学', background: '现就读于牛津大学', content: '帝联的全日制课程为我的留学申请提供了巨大帮助。老师们都很专业，课程安排也很合理。' },
  { name: '王同学', background: '成功申请哈佛大学', content: '在帝联的学习经历让我受益匪浅。不仅提高了学术水平，还锻炼了我的独立思考能力。' },
  { name: '张同学', background: 'IELTS考试获得8分', content: '帝联的英语培训课程非常出色。通过系统的学习和练习，我的英语水平有了显著提升。' }
]);

const enrollmentSteps = ref([
  '在线预约或电话咨询',
  '参加免费试听课',
  '进行入学测试和评估',
  '确定学习计划',
  '签订培训协议',
  '缴纳学费',
  '正式开始学习'
]);

const openEnrollment = () => {
  console.log('打开报名表单');
  // 实现报名表单逻辑
};
</script>

<style scoped>
.full-time {
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

.feature-grid, .teacher-grid, .facility-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-item, .teacher-item, .facility-item {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature-item:hover, .teacher-item:hover, .facility-item:hover {
  transform: translateY(-5px);
}

.feature-icon, .facility-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  background-color: #e0e0e0;
  border-radius: 50%;
}

.structure-timeline {
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
  background-color: #007bff;
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

.teacher-image, .author-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin: 0 auto 1rem;
}

.testimonial-carousel {
  display: flex;
  overflow-x: auto;
  gap: 2rem;
  padding: 1rem 0;
}

.testimonial-item {
  flex: 0 0 300px;
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.testimonial-author {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.author-image {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}

.enrollment-steps {
  padding-left: 1.5rem;
  margin-bottom: 2rem;
}

.enrollment-steps li {
  margin-bottom: 0.5rem;
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
  margin: 0 auto;
}

.cta-button:hover {
  background-color: #0056b3;
}
</style>