window.addEventListener("DOMContentLoaded", () => {
 
  document
  .getElementById('titlebar-minimize')
  .addEventListener('click', function() { invoke('titlebar_minimize');});

document
  .getElementById('titlebar-close')
  .addEventListener('click', function() { invoke('titlebar_close');});
  
});
