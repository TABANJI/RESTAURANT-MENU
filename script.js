document.documentElement.classList.add('js');

const vegetableOption = { id: 'add-vegetables', name: 'Add vegetables', price: 30000, priceLabel: '30,000 LL' };

const menuCategories = {
  mana2eesh: { label: 'Mana2eesh' },
  'italian-pizza': { label: 'Italian Pizza' },
  'burger-sandwich': { label: 'Burger / Sandwich' },
  mu3ajaneit: { label: 'Mu3ajaneit' },
  desserts: { label: 'Desserts' }
};

const mobileMenuSections = [
  { id: 'mana2eesh', label: 'MANA2EESH' },
  { id: 'italian-pizza', label: 'ITALIAN PIZZA' },
  { id: 'mu3ajaneit', label: 'MU3AJANEIT' },
  { id: 'desserts', label: 'DESSERTS' }
];

const mobileMainSections = [
  { id: 'mini-bites', targetId: 'mana2eesh', label: 'MINI BITES' },
  { id: 'sandwiches-burgers', targetId: 'burger-sandwich', label: 'BURGER / SANDWICH' },
  { id: 'drinks', targetId: 'drinks-menu', label: 'DRINKS' },
  { id: 'gift-certificates', targetId: 'gift-certificates-menu', label: 'GIFT CERTIFICATES' }
];

const menuItems = [
  { id: 'mana-zaatar', name: 'Zaatar', category: 'mana2eesh', price: 70000, priceLabel: '70,000 LL', description: '', image: null, options: [vegetableOption], popular: true, filters: ['zaatar'] },
  { id: 'mana-cheese', name: 'Cheese', category: 'mana2eesh', price: 180000, priceLabel: '180,000 LL', description: '', image: null, options: [vegetableOption], popular: false, filters: ['cheese'] },
  { id: 'mana-spinach', name: 'Spinach', category: 'mana2eesh', price: 80000, priceLabel: '80,000 LL', description: '', image: null, options: [vegetableOption], popular: false, filters: ['other'] },
  { id: 'mana-kishek', name: 'Kishek', category: 'mana2eesh', price: 80000, priceLabel: '80,000 LL', description: '', image: null, options: [vegetableOption], popular: false, filters: ['other'] },
  { id: 'mana-lahm-b3ajeen', name: 'Lahm B3ajeen', category: 'mana2eesh', price: 180000, priceLabel: '180,000 LL', description: '', image: null, options: [vegetableOption], popular: false, filters: ['meat'] },
  { id: 'mana-zaatar-cheese', name: 'Zaatar & Cheese', category: 'mana2eesh', price: 150000, priceLabel: '150,000 LL', description: '', image: null, options: [vegetableOption], popular: true, filters: ['zaatar', 'cheese'] },
  { id: 'mana-duplex', name: 'Duplex', category: 'mana2eesh', price: 250000, priceLabel: '250,000 LL', description: '', image: null, options: [vegetableOption], popular: false, filters: ['other'] },
  { id: 'mana-cheese-ham', name: 'Cheese & Ham', category: 'mana2eesh', price: 250000, priceLabel: '250,000 LL', description: '', image: null, options: [vegetableOption], popular: false, filters: ['cheese', 'meat'] },
  { id: 'mana-cheese-soujouk', name: 'Cheese & Soujouk', category: 'mana2eesh', price: 300000, priceLabel: '300,000 LL', description: '', image: null, options: [vegetableOption], popular: false, filters: ['cheese', 'meat'] },
  { id: 'pizza-soujouk', name: 'Soujouk', category: 'italian-pizza', price: 600000, priceLabel: '600,000 LL', description: '', image: null, options: [], popular: false, filters: ['meat'] },
  { id: 'pizza-pepperoni', name: 'Pepperoni', category: 'italian-pizza', price: 600000, priceLabel: '600,000 LL', description: '', image: null, options: [], popular: true, filters: ['meat'] },
  { id: 'pizza-marguerita', name: 'Marguerita', category: 'italian-pizza', price: 500000, priceLabel: '500,000 LL', description: '', image: null, options: [], popular: false, filters: ['vegetarian'] },
  { id: 'pizza-vegetarian', name: 'Vegetarian', category: 'italian-pizza', price: 600000, priceLabel: '600,000 LL', description: '', image: null, options: [], popular: false, filters: ['vegetarian'] },
  { id: 'burger-sandwich-burger', name: 'Burger', category: 'burger-sandwich', price: 500000, priceLabel: '500,000 LL', description: '', image: null, options: [], popular: true, filters: ['burger'] },
  { id: 'burger-sandwich-batata', name: 'Batata Sandwich', category: 'burger-sandwich', price: 200000, priceLabel: '200,000 LL', description: '', image: null, options: [], popular: false, filters: ['sandwich'] },
  { id: 'burger-sandwich-italian', name: 'Italian Sandwich', category: 'burger-sandwich', price: 400000, priceLabel: '400,000 LL', description: '', image: null, options: [], popular: false, filters: ['sandwich'] },
  { id: 'burger-sandwich-chicken', name: 'Chicken Sandwich', category: 'burger-sandwich', price: 400000, priceLabel: '400,000 LL', description: '', image: null, options: [], popular: false, filters: ['sandwich'] },
  { id: 'burger-sandwich-biria', name: 'Biria Sandwich', category: 'burger-sandwich', price: 500000, priceLabel: '500,000 LL', description: '', image: null, options: [], popular: false, filters: ['sandwich'] },
  { id: 'mu3ajaneit-mini-pizza', name: 'Mini Pizza', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: true, filters: [] },
  { id: 'mu3ajaneit-mini-zaatar', name: 'Mini Zaatar', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-mini-cheese', name: 'Mini Cheese', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-mini-spinach', name: 'Mini Spinach', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-mini-hotdog', name: 'Mini Hotdog', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-halloum-rolls', name: 'Halloum Rolls', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-cheese-burek', name: 'Cheese Burek', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-kebbeh-meat', name: 'Kebbeh Meat', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-kebbeh-pumpkin', name: 'Kebbeh Pumpkin', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'dessert-nutella', name: 'Nutella', category: 'desserts', price: 300000, priceLabel: '300,000 LL', description: '', image: null, options: [], popular: true, filters: [] },
  { id: 'dessert-halawi', name: 'Halawi', category: 'desserts', price: 300000, priceLabel: '300,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'dessert-meghli', name: 'Meghli', category: 'desserts', price: 150000, priceLabel: '150,000 LL', description: '', image: null, options: [], popular: false, filters: [] }
];

const productGrid = document.querySelector('.product-grid');
const categoryHeading = document.querySelector('.mobile-menu-heading h2');
const categoryRow = document.querySelector('.mobile-category-row');
const subcategoryRow = document.querySelector('.mobile-subcategory-row');
const desktopCategoryGrid = document.querySelector('.category-grid');
const quickViewButtons = document.querySelectorAll('.mobile-action-row button');
const favoritesButton = quickViewButtons[1];
const desktopProductGrid = document.querySelector('.desktop-product-grid');
const desktopMenuNav = document.querySelector('.desktop-menu-nav');
const desktopSearchInput = document.querySelector('.desktop-search input');
const desktopPopularButton = document.querySelector('.desktop-popular-button');
const desktopFavoritesButton = document.querySelector('.desktop-favorites-button');
const favoritesStorageKey = 'miniBitesFavorites';
const loadFavorites = () => {
  try {
    const savedFavorites = JSON.parse(localStorage.getItem(favoritesStorageKey) || '[]');
    if (!Array.isArray(savedFavorites)) return new Set();
    const validProductIds = new Set(menuItems.map((item) => item.id));
    return new Set(savedFavorites.filter((id) => typeof id === 'string' && validProductIds.has(id)));
  } catch {
    return new Set();
  }
};
const favorites = loadFavorites();
const saveFavorites = () => {
  try {
    localStorage.setItem(favoritesStorageKey, JSON.stringify([...favorites]));
  } catch {
    // Favorites still work for the current page if storage is unavailable.
  }
};
const toggleFavorite = (productId) => {
  if (favorites.has(productId)) favorites.delete(productId); else favorites.add(productId);
  saveFavorites();
};
let activeMainSection = 'mini-bites';
let activeCategory = 'mana2eesh';
let activeFilter = 'mana2eesh';
let quickView = 'all';
let scrollSpyGroups = [];
let activeScrollGroupIndex = 0;
let scrollSpyTicking = false;
let lastScrollY = window.scrollY;
let programmaticScrollTimer = null;
const scrollActivationY = 226;
const scrollHysteresis = 32;
let desktopSearchTerm = '';
let desktopPopularOnly = false;
let desktopFavoritesOnly = false;
let desktopScrollSections = [];
let activeDesktopSection = 'desktop-mana2eesh';
let desktopScrollIndex = 0;
let desktopScrollTicking = false;
let desktopLastScrollY = window.scrollY;
let desktopProgrammaticTimer = null;
const desktopActivationY = 220;
const desktopHysteresis = 24;

const escapeHtml = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');

const favoriteIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"/></svg>';
const shareIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 10.51 6.83-3.98M8.59 13.49l6.83 3.98"/></svg>';

const productCardTemplate = (item) => {
  const isFavorite = favorites.has(item.id);
  const description = item.description ? `<p>${escapeHtml(item.description)}</p>` : '';
  const badge = item.popular ? '<mark>Popular</mark>' : '';
  const options = item.options.length ? `<button class="options-button" type="button" aria-label="Show options for ${escapeHtml(item.name)}"><span aria-hidden="true">↓</span> Show options</button>` : '';
  return `<article class="product-card reveal is-visible" data-product-id="${escapeHtml(item.id)}">
    <div class="product-media"><div class="product-image image-placeholder"><span>PRODUCT PHOTO</span>${badge}</div><button type="button" class="add-button mobile-add-button">+ ADD</button></div>
    <div class="product-body"><h3>${escapeHtml(item.name)}</h3>${description}<div class="product-options">${options}<div class="product-quick-actions"><button class="favorite-button${isFavorite ? ' is-active' : ''}" type="button" aria-label="${isFavorite ? 'Remove' : 'Add'} ${escapeHtml(item.name)} ${isFavorite ? 'from' : 'to'} favorites" aria-pressed="${isFavorite}">${favoriteIcon}</button><button class="share-button" type="button" aria-label="Share ${escapeHtml(item.name)}">${shareIcon}</button></div></div><div class="product-footer"><strong>${escapeHtml(item.priceLabel)}</strong><button type="button" class="add-button">Add to order <span>+</span></button></div></div>
  </article>`;
};

const desktopProductCardTemplate = (item) => {
  const isFavorite = favorites.has(item.id);
  const description = item.description ? `<p>${escapeHtml(item.description)}</p>` : '';
  const badge = item.popular ? '<mark>Popular</mark>' : '';
  const options = item.options.length ? `<button class="options-button" type="button"><span aria-hidden="true">↓</span> Show options</button>` : '';
  return `<article class="desktop-product-card product-card" data-product-id="${escapeHtml(item.id)}">
    <div class="desktop-product-image-wrap"><div class="product-image image-placeholder"><span>PRODUCT PHOTO</span>${badge}</div><button class="favorite-button${isFavorite ? ' is-active' : ''}" type="button" aria-label="${isFavorite ? 'Remove' : 'Add'} ${escapeHtml(item.name)} ${isFavorite ? 'from' : 'to'} favorites" aria-pressed="${isFavorite}">${favoriteIcon}</button></div>
    <div class="desktop-product-body"><h3>${escapeHtml(item.name)}</h3>${description}<div class="desktop-product-controls">${options}<button class="share-button" type="button" aria-label="Share ${escapeHtml(item.name)}">${shareIcon}</button></div></div>
    <div class="desktop-product-footer"><strong class="desktop-product-price">${escapeHtml(item.priceLabel)}</strong><button type="button" class="add-button">+ ADD</button></div>
  </article>`;
};

const itemsForCategory = (category) => menuItems.filter((item) => item.category === category && (quickView !== 'popular' || item.popular) && (quickView !== 'favorites' || favorites.has(item.id)));

const centerNavTab = (container, tab) => {
  if (!tab) return;
  const targetLeft = tab.offsetLeft - ((container.clientWidth - tab.offsetWidth) / 2);
  const maxLeft = Math.max(0, container.scrollWidth - container.clientWidth);
  container.scrollTo({ left: Math.min(maxLeft, Math.max(0, targetLeft)), behavior: 'smooth' });
};

const setActiveSubcategory = (filterId, center = true) => {
  const activeButton = subcategoryRow.querySelector(`[data-filter="${filterId}"]`);
  if (activeFilter === filterId && activeButton?.classList.contains('active')) return;
  activeFilter = filterId;
  subcategoryRow.querySelector('.active')?.classList.remove('active');
  activeButton?.classList.add('active');
  if (center) centerNavTab(subcategoryRow, activeButton);
};

const setActiveMainSection = (sectionId, center = true) => {
  const activeButton = categoryRow.querySelector(`[data-main-section="${sectionId}"]`);
  const isAlreadyActive = activeMainSection === sectionId && activeButton?.classList.contains('active');
  if (isAlreadyActive) return;
  activeMainSection = sectionId;
  categoryRow.querySelector('.active')?.classList.remove('active');
  activeButton?.classList.add('active');
  if (sectionId !== 'mini-bites') subcategoryRow.querySelector('.active')?.classList.remove('active');
  if (center) centerNavTab(categoryRow, activeButton);
};

const applyScrollGroup = (group) => {
  if (!group) return;
  const nextMainSection = group.dataset.mainSection;
  if (nextMainSection !== activeMainSection) setActiveMainSection(nextMainSection);
  if (nextMainSection === 'mini-bites') {
    const nextFilter = group.dataset.filter;
    if (nextFilter && (nextFilter !== activeFilter || !subcategoryRow.querySelector('.active'))) setActiveSubcategory(nextFilter);
  }
};

const findInitialScrollGroup = () => {
  let index = 0;
  scrollSpyGroups.forEach((group, groupIndex) => {
    if (group.getBoundingClientRect().top <= scrollActivationY) index = groupIndex;
  });
  return index;
};

const updateScrollSpy = () => {
  if (window.innerWidth > 768 || !scrollSpyGroups.length || programmaticScrollTimer) return;
  const scrollingDown = window.scrollY >= lastScrollY;
  if (scrollingDown) {
    while (activeScrollGroupIndex < scrollSpyGroups.length - 1 && scrollSpyGroups[activeScrollGroupIndex + 1].getBoundingClientRect().top <= scrollActivationY - scrollHysteresis) {
      activeScrollGroupIndex += 1;
    }
  } else {
    while (activeScrollGroupIndex > 0 && scrollSpyGroups[activeScrollGroupIndex].getBoundingClientRect().top > scrollActivationY + scrollHysteresis) {
      activeScrollGroupIndex -= 1;
    }
  }
  lastScrollY = window.scrollY;
  applyScrollGroup(scrollSpyGroups[activeScrollGroupIndex]);
};

const queueScrollSpy = () => {
  if (scrollSpyTicking) return;
  scrollSpyTicking = true;
  window.requestAnimationFrame(() => {
    updateScrollSpy();
    scrollSpyTicking = false;
  });
};

const startScrollSpy = () => {
  if (window.innerWidth > 768) {
    scrollSpyGroups = [];
    return;
  }
  scrollSpyGroups = [...productGrid.querySelectorAll('.product-group[data-main-section]')];
  if (!scrollSpyGroups.length) return;
  activeScrollGroupIndex = findInitialScrollGroup();
  lastScrollY = window.scrollY;
  applyScrollGroup(scrollSpyGroups[activeScrollGroupIndex]);
};

const scrollToMenuSection = (target) => {
  if (!target) return;
  window.clearTimeout(programmaticScrollTimer);
  programmaticScrollTimer = window.setTimeout(() => {
    programmaticScrollTimer = null;
    activeScrollGroupIndex = findInitialScrollGroup();
    lastScrollY = window.scrollY;
    applyScrollGroup(scrollSpyGroups[activeScrollGroupIndex]);
  }, 900);
  const targetTop = window.scrollY + target.getBoundingClientRect().top - scrollActivationY;
  window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
};

window.addEventListener('scroll', queueScrollSpy, { passive: true });

const renderProducts = () => {
  if (window.innerWidth > 768) {
    const items = itemsForCategory(activeCategory);
    productGrid.innerHTML = items.map(productCardTemplate).join('');
    startScrollSpy();
    return;
  }

  const miniBitesSections = mobileMenuSections.map((section, index) => {
    const sectionItems = itemsForCategory(section.id);
    const heading = index === 0 ? '' : `<div class="mobile-menu-heading"><span>MINI BITES</span><h2>${section.label}</h2></div>`;
    return `<section class="product-group" id="${section.id}" data-main-section="mini-bites" data-filter="${section.id}">${heading}${sectionItems.map(productCardTemplate).join('')}</section>`;
  }).join('');

  const burgerItems = itemsForCategory('burger-sandwich');
  const remainingSections = `
    <section class="product-group" id="burger-sandwich" data-main-section="sandwiches-burgers"><div class="mobile-menu-heading"><span>MINI BITES</span><h2>BURGER / SANDWICH</h2></div>${burgerItems.map(productCardTemplate).join('')}</section>
    <section class="product-group" id="drinks-menu" data-main-section="drinks"><div class="mobile-menu-heading"><span>MINI BITES</span><h2>DRINKS</h2></div><p class="menu-empty">No items in this section yet.</p></section>
    <section class="product-group" id="gift-certificates-menu" data-main-section="gift-certificates"><div class="mobile-menu-heading"><span>MINI BITES</span><h2>GIFT CERTIFICATES</h2></div><p class="menu-empty">No items in this section yet.</p></section>`;

  productGrid.innerHTML = miniBitesSections + remainingSections;
  startScrollSpy();
};

const renderSubcategories = () => {
  subcategoryRow.innerHTML = mobileMenuSections.map((section) => `<button class="${section.id === activeFilter ? 'active' : ''}" type="button" role="listitem" data-filter="${section.id}">${section.label}</button>`).join('');
};

const desktopSections = [
  { id: 'desktop-mana2eesh', title: 'MANA2EESH', category: 'mana2eesh', main: 'mini-bites' },
  { id: 'desktop-italian-pizza', title: 'ITALIAN PIZZA', category: 'italian-pizza', main: 'mini-bites' },
  { id: 'desktop-mu3ajaneit', title: 'MU3AJANEIT', category: 'mu3ajaneit', main: 'mini-bites' },
  { id: 'desktop-desserts', title: 'DESSERTS', category: 'desserts', main: 'mini-bites' },
  { id: 'desktop-burger-sandwich', title: 'SANDWICHES & BURGERS', category: 'burger-sandwich', main: 'sandwiches-burgers' },
  { id: 'desktop-drinks', title: 'DRINKS', category: null, main: 'drinks' },
  { id: 'desktop-gift-certificates', title: 'GIFT CERTIFICATES', category: null, main: 'gift-certificates' }
];

const desktopItemsForSection = (section) => {
  if (!section.category) return [];
  return menuItems.filter((item) => item.category === section.category && (!desktopPopularOnly || item.popular) && (!desktopFavoritesOnly || favorites.has(item.id)) && (!desktopSearchTerm || item.name.toLowerCase().includes(desktopSearchTerm)));
};

const setActiveDesktopSection = (sectionId) => {
  if (sectionId === activeDesktopSection && desktopMenuNav.querySelector(`[data-desktop-section="${sectionId}"].active`)) return;
  activeDesktopSection = sectionId;
  const section = desktopSections.find((item) => item.id === sectionId);
  desktopMenuNav.querySelectorAll('.active').forEach((link) => link.classList.remove('active'));
  if (section?.main === 'mini-bites') {
    desktopMenuNav.querySelector('[data-desktop-target="mini-bites"]')?.classList.add('active');
    desktopMenuNav.querySelector(`.desktop-subnav [data-desktop-section="${sectionId}"]`)?.classList.add('active');
  } else {
    desktopMenuNav.querySelector(`[data-desktop-section="${sectionId}"]`)?.classList.add('active');
  }
};

const getDesktopActivationY = () => {
  const distanceToBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
  return Math.min(window.innerHeight - 24, desktopActivationY + Math.max(0, window.innerHeight - desktopActivationY - distanceToBottom));
};

const findDesktopScrollIndex = () => {
  let index = 0;
  const activationY = getDesktopActivationY();
  desktopScrollSections.forEach((section, sectionIndex) => {
    if (section.getBoundingClientRect().top <= activationY) index = sectionIndex;
  });
  return index;
};

const updateDesktopScrollSpy = () => {
  if (window.innerWidth <= 768 || !desktopScrollSections.length || desktopProgrammaticTimer) return;
  const scrollingDown = window.scrollY >= desktopLastScrollY;
  const activationY = getDesktopActivationY();
  if (scrollingDown) {
    while (desktopScrollIndex < desktopScrollSections.length - 1 && desktopScrollSections[desktopScrollIndex + 1].getBoundingClientRect().top <= activationY - desktopHysteresis) desktopScrollIndex += 1;
  } else {
    while (desktopScrollIndex > 0 && desktopScrollSections[desktopScrollIndex].getBoundingClientRect().top > activationY + desktopHysteresis) desktopScrollIndex -= 1;
  }
  desktopLastScrollY = window.scrollY;
  setActiveDesktopSection(desktopScrollSections[desktopScrollIndex]?.id);
};

const queueDesktopScrollSpy = () => {
  if (desktopScrollTicking) return;
  desktopScrollTicking = true;
  window.requestAnimationFrame(() => {
    updateDesktopScrollSpy();
    desktopScrollTicking = false;
  });
};

const startDesktopScrollSpy = () => {
  if (window.innerWidth <= 768) {
    desktopScrollSections = [];
    return;
  }
  desktopScrollSections = [...desktopProductGrid.querySelectorAll('.desktop-menu-section')];
  desktopScrollIndex = findDesktopScrollIndex();
  desktopLastScrollY = window.scrollY;
  setActiveDesktopSection(desktopScrollSections[desktopScrollIndex]?.id);
};

const renderDesktopProducts = () => {
  if (window.innerWidth <= 768) return;
  desktopProductGrid.innerHTML = desktopSections.map((section) => {
    const items = desktopItemsForSection(section);
    const content = items.length ? items.map(desktopProductCardTemplate).join('') : `<p class="desktop-empty-section">${section.category ? 'No matching items.' : 'No verified menu items are available for this section yet.'}</p>`;
    return `<section class="desktop-menu-section" id="${section.id}" data-desktop-main="${section.main}"><header class="desktop-section-heading"><span>MINI BITES</span><h2>${section.title}</h2></header>${content}</section>`;
  }).join('');
  startDesktopScrollSpy();
};

const scrollToDesktopSection = (target) => {
  if (!target) return;
  window.clearTimeout(desktopProgrammaticTimer);
  desktopProgrammaticTimer = window.setTimeout(() => {
    desktopProgrammaticTimer = null;
    desktopScrollIndex = findDesktopScrollIndex();
    desktopLastScrollY = window.scrollY;
    setActiveDesktopSection(desktopScrollSections[desktopScrollIndex]?.id);
  }, 800);
  window.scrollTo({ top: Math.max(0, window.scrollY + target.getBoundingClientRect().top - desktopActivationY), behavior: 'smooth' });
};

const updateFavoritesCount = () => {
  favoritesButton.lastChild.textContent = ` Favorites: ${favorites.size}`;
  desktopFavoritesButton.querySelector('span:last-child').textContent = `Favorites: ${favorites.size}`;
};
const setQuickView = (view) => {
  quickView = view;
  activeFilter = 'mana2eesh';
  quickViewButtons.forEach((button, index) => button.classList.toggle('active', (view === 'popular' && index === 0) || (view === 'favorites' && index === 1)));
  renderSubcategories();
  renderProducts();
};

renderSubcategories();
renderProducts();
renderDesktopProducts();
updateFavoritesCount();
window.addEventListener('scroll', queueDesktopScrollSpy, { passive: true });

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('main section[id]');
const updateActiveNavigation = () => {
  let currentSection = 'home';
  sections.forEach((section) => { if (window.scrollY >= section.offsetTop - 180) currentSection = section.id; });
  navLinks.forEach((link) => {
    const target = link.getAttribute('href').slice(1);
    link.classList.toggle('active', target === currentSection || (target === 'menu' && currentSection === 'best-sellers'));
  });
};
window.addEventListener('scroll', updateActiveNavigation, { passive: true });
updateActiveNavigation();

productGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.product-card');
  if (!card) return;
  const item = menuItems.find((product) => product.id === card.dataset.productId);
  if (!item) return;
  const addButton = event.target.closest('.add-button');
  if (addButton) {
    const originalText = addButton.firstChild.textContent;
    addButton.firstChild.textContent = 'Added ';
    addButton.classList.add('added');
    window.setTimeout(() => { addButton.firstChild.textContent = originalText; addButton.classList.remove('added'); }, 1400);
    return;
  }
  if (event.target.closest('.favorite-button')) {
    toggleFavorite(item.id);
    updateFavoritesCount();
    renderProducts();
  }
});

desktopProductGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.desktop-product-card');
  if (!card) return;
  const item = menuItems.find((product) => product.id === card.dataset.productId);
  if (!item) return;
  const addButton = event.target.closest('.add-button');
  if (addButton) {
    addButton.textContent = 'Added';
    addButton.classList.add('added');
    window.setTimeout(() => { addButton.textContent = '+ ADD'; addButton.classList.remove('added'); }, 1400);
    return;
  }
  if (event.target.closest('.favorite-button')) {
    toggleFavorite(item.id);
    updateFavoritesCount();
    renderDesktopProducts();
  }
});

desktopMenuNav.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#desktop-"]');
  if (!link) return;
  event.preventDefault();
  const sectionId = link.dataset.desktopSection || link.getAttribute('href').slice(1);
  const target = document.getElementById(sectionId);
  setActiveDesktopSection(sectionId);
  scrollToDesktopSection(target);
});

desktopSearchInput.addEventListener('input', () => {
  desktopSearchTerm = desktopSearchInput.value.trim().toLowerCase();
  renderDesktopProducts();
});

desktopPopularButton.addEventListener('click', () => {
  desktopPopularOnly = !desktopPopularOnly;
  if (desktopPopularOnly) desktopFavoritesOnly = false;
  desktopPopularButton.classList.toggle('active', desktopPopularOnly);
  desktopFavoritesButton.classList.toggle('active', desktopFavoritesOnly);
  renderDesktopProducts();
});

desktopFavoritesButton.addEventListener('click', () => {
  desktopFavoritesOnly = !desktopFavoritesOnly;
  if (desktopFavoritesOnly) desktopPopularOnly = false;
  desktopFavoritesButton.classList.toggle('active', desktopFavoritesOnly);
  desktopPopularButton.classList.toggle('active', desktopPopularOnly);
  renderDesktopProducts();
});

categoryRow.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-main-section]');
  if (!button) return;
  const nextMainSection = button.dataset.mainSection;
  const wasQuickView = quickView !== 'all';
  quickView = 'all';
  quickViewButtons.forEach((quickButton) => quickButton.classList.remove('active'));
  if (wasQuickView) renderProducts();
  setActiveMainSection(nextMainSection);
  if (nextMainSection === 'mini-bites') setActiveSubcategory('mana2eesh');
  const targetId = mobileMainSections.find((section) => section.id === nextMainSection)?.targetId;
  const target = document.getElementById(targetId);
  scrollToMenuSection(target);
});

desktopCategoryGrid.addEventListener('click', (event) => {
  const categoryLink = event.target.closest('[data-category]');
  if (!categoryLink) return;
  activeCategory = categoryLink.dataset.category;
  activeFilter = activeCategory;
  quickView = 'all';
  categoryHeading.textContent = menuCategories[activeCategory].label.toUpperCase();
  quickViewButtons.forEach((quickButton) => quickButton.classList.remove('active'));
  renderSubcategories();
  renderProducts();
});

subcategoryRow.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  const filterId = button.dataset.filter;
  const wasQuickView = quickView !== 'all';
  quickView = 'all';
  quickViewButtons.forEach((quickButton) => quickButton.classList.remove('active'));
  setActiveSubcategory(filterId);
  if (wasQuickView) renderProducts();
  if (activeMainSection !== 'mini-bites') {
    setActiveMainSection('mini-bites');
  }
  const target = document.getElementById(filterId);
  scrollToMenuSection(target);
});

quickViewButtons[0].addEventListener('click', () => setQuickView('popular'));
quickViewButtons[1].addEventListener('click', () => setQuickView('favorites'));
document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.main-nav');
const menuBackdrop = document.querySelector('.menu-backdrop');
const closeMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
  mobileMenu.classList.remove('is-open');
  menuBackdrop.classList.remove('is-visible');
  document.body.classList.remove('menu-open');
};
const openMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.setAttribute('aria-label', 'Close menu');
  mobileMenu.classList.add('is-open');
  menuBackdrop.classList.add('is-visible');
  document.body.classList.add('menu-open');
};

const resetToHomeMenu = () => {
  quickView = 'all';
  activeMainSection = 'mini-bites';
  activeCategory = 'mana2eesh';
  activeFilter = 'mana2eesh';
  desktopSearchTerm = '';
  desktopPopularOnly = false;
  desktopFavoritesOnly = false;

  quickViewButtons.forEach((button) => button.classList.remove('active'));
  categoryRow.querySelector('.active')?.classList.remove('active');
  categoryRow.querySelector('[data-main-section="mini-bites"]')?.classList.add('active');
  categoryHeading.textContent = 'MANA2EESH';
  desktopSearchInput.value = '';
  desktopPopularButton.classList.remove('active');
  desktopFavoritesButton.classList.remove('active');

  renderSubcategories();
  renderProducts();
  renderDesktopProducts();
  setActiveDesktopSection('desktop-mana2eesh');
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.querySelectorAll('.desktop-order-header .desktop-wordmark, .site-header .brand').forEach((homeLink) => {
  homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    resetToHomeMenu();
  });
});

menuToggle.addEventListener('click', () => menuToggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu());
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
menuBackdrop.addEventListener('click', closeMenu);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
let viewportWasMobile = window.innerWidth <= 768;
window.addEventListener('resize', () => {
  const viewportIsMobile = window.innerWidth <= 768;
  if (!viewportIsMobile) closeMenu();
  if (viewportIsMobile === viewportWasMobile) return;
  viewportWasMobile = viewportIsMobile;
  renderProducts();
  if (!viewportIsMobile) renderDesktopProducts();
});
