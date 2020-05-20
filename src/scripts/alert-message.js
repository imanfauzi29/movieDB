function alertMessage(icon, message){
    let fa = '';
    if(icon == 'success') {
      fa = '<i class="far fa-check-circle"></i>';
  }else {
      fa = '<i class="far fa-times-circle"></i>';
  }

  const alertElem = document.createElement('div');
  alertElem.setAttribute('id', 'c-alert');
  alertElem.innerHTML = `
  <div class="c-alert-overlay" tabindex="-1">
  <div class="c-alert-box" role="dialog">
  <div class="c-alert-icon">
  <span class="${icon}">${fa}</span>
  </div>
  <div class="c-alert-text">
  ${message}
  </div>
  <div class="c-alert-footer">
  <div class="c-alert-button">
  <div class="alert-button" id="alert-button">OK</div>
  </div>
  </div>
  </div>
  </div>
  `;
  document.querySelector('body').append(alertElem);

  const btnAlert = document.getElementById('alert-button');
  const overlay = document.querySelector('.c-alert-overlay');
  const box = document.querySelector('.c-alert-box');
  overlay.style = 'opacity: 1; display: inline-block';
    //close alert when push button
    btnAlert.addEventListener('click', () => {
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
  });
}

export default alertMessage;