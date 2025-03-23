<script>
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const navLink = document.getElementById('nav-link');
    const dropdownHead = document.getElementById('dropdown-head');
    const dropdown = document.getElementById('dropdown');

    burger.addEventListener('click', () => {
        navLink.classList.toggle('nav-hide');
    });

    dropdownHead.addEventListener('click', () => {
        dropdown.classList.toggle('nav-hide');
    });
});
</script>
