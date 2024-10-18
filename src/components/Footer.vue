<template>
  <footer>
    <div class="footer-content">
      <div class="contact-info">
        <h3>联系我们</h3>
        <p>电话：400-0000-000</p>
        <p>邮箱：info@iclinkedu.com</p>
        <p>地址：北京市朝阳区</p>
      </div>
      <div class="quick-links">
        <h3>快速链接</h3>
        <ul>
          <li><a href="#home">首页</a></li>
          <li><a href="#about">关于我们</a></li>
          <li><a href="#services">服务项目</a></li>
          <li><a href="#contact">联系我们</a></li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; 2023 iClink Education. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
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

ul {
  list-style: none;
  padding: 0;
}

a {
  color: #fff;
  text-decoration: none;
}

.copyright {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #555;
}
</style>