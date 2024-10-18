<template>
  <div class="floating-buttons">
    <button class="float-button" v-for="(button, index) in floatingButtons" :key="index" @click="button.action">
      <div class="icon-placeholder" :class="button.icon"></div>
      <span>{{ button.text }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const floatingButtons = ref([
  { text: '在线客服', action: openOnlineService, icon: 'service-icon' },
  { text: '电话咨询', action: openPhoneConsultation, icon: 'phone-icon' },
  { text: '微信咨询', action: openWeChatConsultation, icon: 'wechat-icon' },
  { text: '费用咨询', action: openCostInquiry, icon: 'cost-icon' },
  { text: '试听预约', action: openAuditionAppointment, icon: 'calendar-icon' }
]);

function openOnlineService() {
  console.log("Open online service");
}

function openPhoneConsultation() {
  console.log("Open phone consultation");
}

function openWeChatConsultation() {
  console.log("Open WeChat consultation");
}

function openCostInquiry() {
  console.log("Open cost inquiry");
}

function openAuditionAppointment() {
  console.log("Open audition appointment");
}
</script>

<style scoped>
.floating-buttons {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.float-button {
  display: flex;
  align-items: center;
  background-color: #1e5799;
  color: white;
  border: none;
  padding: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
}

.float-button:hover {
  background-color: #2989d8;
  transform: scale(1.05);
}

.icon-placeholder {
  width: 20px;
  height: 20px;
  background-color: white;
  margin-right: 5px;
  border-radius: 3px;
}

@media (max-width: 768px) {
  .floating-buttons {
    display: none;
  }
}
</style>