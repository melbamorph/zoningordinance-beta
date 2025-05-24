// Navigation menu behavior
(function() {
  function isArticlePage(path) {
    return /\/article-\d+\//.test(path);
  }

  document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname;
    if (!isArticlePage(path)) {
      // assume home page -> expand article 1
      var a1 = document.querySelector('.sidebar-nav a[href*="/article-1/"]');
      if (a1 && a1.parentElement) {
        a1.parentElement.classList.add('active');
      }
    }
  });
})();
