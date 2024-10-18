<template>
  <header>
    <nav>
      <img src="/logo.png" alt="iClink Education Logo" class="logo">
      <ul>
        <li><a href="#home">首页</a></li>
        <li><a href="#about">关于我们</a></li>
        <li><a href="#services">服务项目</a></li>
        <li><a href="#contact">联系我们</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  height: 50px;
}

ul {
  display: flex;
  list-style: none;
}

li {
  margin-left: 2rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>