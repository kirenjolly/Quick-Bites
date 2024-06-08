document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const openSidebarBtn = document.getElementById('openSidebarBtn');
  const closebtn = document.getElementById('closebtn');

  openSidebarBtn.addEventListener('click', function () {
      sidebar.classList.add('active');
      overlay.style.display = 'block';
  });

  closebtn.addEventListener('click', function () {
      sidebar.classList.remove('active');
      overlay.style.display = 'none';
  });

  overlay.addEventListener('click', function () {
      sidebar.classList.remove('active');
      overlay.style.display = 'none';
  });

  document.addEventListener('click', function (event) {
      if (!sidebar.contains(event.target) && !openSidebarBtn.contains(event.target)) {
          sidebar.classList.remove('active');
          overlay.style.display = 'none';
      }
  });
});