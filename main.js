

  
  function changeTheme(theme) {
    const themeLink = document.getElementById('theme-link');
    if (theme === 'light') {
      themeLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
      setCookie('theme', 'light', 30); 
    } else if (theme === 'dark') {
      themeLink.href = 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/darkly/bootstrap.min.css';
      setCookie('theme', 'dark', 30);
    }
  }

  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  
  function getCookie(name) {
    const cookieName = `${name}=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  }

  
  const savedTheme = getCookie('theme');
  if (savedTheme) {
    changeTheme(savedTheme);
  }

  document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content');
    const button = document.querySelector('button');

    
    content.style.height = '50px'; 
});



function toggleContent() {
    const content = document.querySelector('.content');
    const button = document.querySelector('.showbutton');
    

    if (content.classList.contains('expanded')) {
        
        content.style.height = '50px';
        button.textContent = 'show more';
        content.classList.remove('expanded');
    } else {
        
        content.style.height = 'auto';
        button.textContent = 'hide';
        content.classList.add('expanded');
    }
}

  let timeoutId;


function showMessage() {
  const inactiveModal = new bootstrap.Modal(document.getElementById('inactiveModal'));
  inactiveModal.show(); 
}


function resetTimer() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(showMessage, 30000); 
}


resetTimer();


document.addEventListener('click', resetTimer);
document.addEventListener('mousemove', resetTimer);