// Basic JavaScript to Add Interactivity

document.addEventListener('DOMContentLoaded', () => {
  console.log('Medical Knowledge Hub loaded successfully!');

  // Example: Highlight active section in navigation
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelectorAll('nav ul li a').forEach(item => item.classList.remove('active'));
          link.classList.add('active');

          const target = document.querySelector(link.getAttribute('href'));
          window.scrollTo({
              top: target.offsetTop - 50,
              behavior: 'smooth'
          });
      });
  });

  // Example: Feature alert
  const features = document.querySelectorAll('#features ul li');
  features.forEach(feature => {
      feature.addEventListener('click', () => {
          alert(`You selected the feature: ${feature.textContent}`);
      });
  });
});

// 打開 LINE 聊天
function openLineChat() {
    // 將以下的 YOUR_LINE_URL 替換為您的 LINE 官方帳號聊天 URL
    window.open('https://line.me/R/ti/p/YOUR_LINE_URL', '_blank');
}
