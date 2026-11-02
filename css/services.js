const list = document.getElementById('service-list');
const searchBox = document.getElementById('service-search');
const categorySel = document.getElementById('service-category');
const sortSel = document.getElementById('service-sort');
const countText = document.getElementById('service-count');
let items = [];

// AJAX: load the services without reloading the page
fetch('data/offerings.json')
  .then(res => {
    if (!res.ok) throw new Error('Could not load services');
    return res.json();
  })
  .then(data => {
    items = data;
    fillCategories();
    render();
  })
  .catch(() => {
    list.textContent = 'Sorry, the services could not be loaded right now. Please try again later.';
  });

function fillCategories() {
  [...new Set(items.map(i => i.category))].sort().forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    categorySel.appendChild(opt);
  });
}

function render() {
  const term = searchBox.value.trim().toLowerCase();
  const cat = categorySel.value;

  const results = items
    .filter(i => cat === 'all' || i.category === cat)
    .filter(i => (i.name + ' ' + i.description + ' ' + i.category + ' ' + i.cost)
      .toLowerCase().includes(term))
    .sort((a, b) => sortSel.value === 'az'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name));

  list.innerHTML = '';
  countText.textContent = `${results.length} service${results.length === 1 ? '' : 's'} found`;

  if (results.length === 0) {
    list.textContent = 'No services match your search. Try a different word or category.';
    return;
  }
  results.forEach((item, index) => list.appendChild(buildCard(item, index)));
}

function buildCard(item, index) {
  const card = document.createElement('article');
  card.className = 'service-item';

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'accordion-header';
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'panel-' + index);
  btn.textContent = item.name;

  const tag = document.createElement('span');
  tag.className = 'service-tag';
  tag.textContent = item.category;
  btn.appendChild(tag);

  const panel = document.createElement('div');
  panel.className = 'accordion-panel';
  panel.id = 'panel-' + index;
  panel.hidden = true;

  const desc = document.createElement('p');
  desc.textContent = item.description;
  const more = document.createElement('p');
  more.textContent = item.details;
  const cost = document.createElement('p');
  cost.innerHTML = '<strong>Cost:</strong> ';
  cost.append(item.cost);
  const link = document.createElement('a');
  link.href = 'enquiry.html';
  link.textContent = 'Make an enquiry about this service';

  panel.append(desc, more, cost, link);

  // Accordion: open or close the panel
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
  });

  card.append(btn, panel);
  return card;
}

searchBox.addEventListener('input', render);
categorySel.addEventListener('change', render);
sortSel.addEventListener('change', render);