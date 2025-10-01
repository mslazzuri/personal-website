// Tab navigation
function showTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));

  switch (tabId)
  {
    case "profile":
      document.querySelector('.tab-btn:nth-child(1)').classList.add('active');
      document.getElementById('profile').classList.add('active');
      break;
    
    case "skills":
      document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
      document.getElementById('skills').classList.add('active');
      break;
    
    case "projects":
      document.querySelector('.tab-btn:nth-child(3)').classList.add('active');
      document.getElementById('projects').classList.add('active');
      break;

    case "about-me":
      document.querySelector('.tab-btn:nth-child(4)').classList.add('active');
      document.getElementById('about-me').classList.add('active');    
      break;

    case "contact-me":
      document.querySelector('.tab-btn:nth-child(5)').classList.add('active');
      document.getElementById('contact-me').classList.add('active');    
      break;
    
    default:
      break;
  }
}

// On page load, show profile tab
showTab('profile');