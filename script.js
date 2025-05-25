document.getElementById('searchInput').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    document.querySelectorAll('.post').forEach(post => {
        const title = post.getAttribute('data-title').toLowerCase();
        post.style.display = title.includes(filter) ? 'block' : 'none';
    });
});
