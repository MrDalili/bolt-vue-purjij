<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于我们</router-link>
        <router-link to="/a-level">A-Level课程</router-link>
        <router-link to="/background">背景提升</router-link>
        <router-link to="/ielts">雅思语培</router-link>
        <router-link to="/application">留学申请</router-link>
        <router-link to="/resources">干货资料</router-link>
        <router-link to="/full-time">脱产全日制</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <div class="footer-content">
        <div class="contact-info">
          <h3>联系我们</h3>
          <p>电话：400-123-4567</p>
          <p>邮箱：info@dilianintl.com</p>
          <p>地址：北京市朝阳区</p>
        </div>
        <div class="quick-links">
          <h3>快速链接</h3>
          <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
            <li><router-link to="/a-level">A-Level课程</router-link></li>
            <li><router-link to="/ielts">雅思语培</router-link></li>
            <li><router-link to="/application">留学申请</router-link></li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2023 帝联国际教育. 保留所有权利.</p>
      </div>
    </footer>

    <FloatingButtons />
  </div>
</template>

<script setup lang="ts">
import FloatingButtons from './components/FloatingButtons.vue';
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  background-color: #1e5799;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav a:hover, nav a.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}

main {
  min-height: calc(100vh - 200px);
}

footer {
  background-color: #333;
  color: white;
  padding: 2rem 0;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info, .quick-links {
  flex: 1;
}

.quick-links ul {
  list-style: none;
  padding: 0;
}

.quick-links a {
  color: white;
  text-decoration: none;
}

.copyright {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #555;
}

@media (max-width: 768px) {
  nav {
    flex-wrap: wrap;
  }

  nav a {
    flex-basis: calc(50% - 1rem);
    text-align: center;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .contact-info, .quick-links {
    margin-bottom: 2rem;
  }
}
</style>