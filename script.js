function(){
    const form = document.getElementById('search-form');
    const grid = document.getElementById('recipes-grid');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const q = form.search.value.trim().toLowerCase();
        const cat = form.filter.value;
        [...grid.children].forEach(card=>{
          const title = card.querySelector('.card-title').textContent.toLowerCase();
          const matchQ = !q || title.includes(q);
          const matchCat = cat === 'all' || card.dataset.category === cat;
          card.style.display = (matchQ && matchCat) ? '' : 'none';
        });
      });
    document.getElementById('year').textContent = new Date().getFullYear();
}