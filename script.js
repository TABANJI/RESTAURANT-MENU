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
  { id: 'mana-zaatar', ingredients: "Zaatar, olive oil", name: 'Zaatar', category: 'mana2eesh', price: 70000, priceLabel: '70,000 LL', description: '', image: "./images/zatar.png/манакиш із заатаром.png", options: [vegetableOption], popular: true, filters: ['zaatar'] },
  { id: 'mana-cheese', ingredients: "Akkawi cheese, mozzarella", name: 'Cheese', category: 'mana2eesh', price: 180000, priceLabel: '180,000 LL', description: '', image: "./images/zatar.png/Золотиста сирна манакіш на дерев’яній дошці.png", options: [vegetableOption], popular: false, filters: ['cheese'] },
  { id: 'mana-spinach', ingredients: "Spinach, onion, sumac, lemon juice, olive oil", name: 'Spinach', category: 'mana2eesh', price: 80000, priceLabel: '80,000 LL', description: '', image: "./images/zatar.png/سبаніакова манауше зі шпинатом і цибулею.png", options: [vegetableOption], popular: false, filters: ['other'] },
  { id: 'mana-kishek', ingredients: "Kishek, tomato, onion, olive oil", name: 'Kishek', category: 'mana2eesh', price: 80000, priceLabel: '80,000 LL', description: '', image: "./images/zatar.png/Домашня піца з кишеком і заатаром.png", options: [vegetableOption], popular: false, filters: ['other'] },
  { id: 'mana-lahm-b3ajeen', ingredients: "Seasoned minced meat, tomato, onion, parsley, spices", name: 'Lahm B3ajeen', category: 'mana2eesh', price: 180000, priceLabel: '180,000 LL', description: '', image: "./images/zatar.png/Традиційний лахмаджун із зеленню та овочами.png", options: [vegetableOption], popular: false, filters: ['meat'] },
  { id: 'mana-zaatar-cheese', ingredients: "Zaatar, olive oil, Akkawi cheese, mozzarella", name: 'Zaatar & Cheese', category: 'mana2eesh', price: 150000, priceLabel: '150,000 LL', description: '', image: "./images/zatar.png/Піца з сиром і заатаром на дерев’яній дошці.png", options: [vegetableOption], popular: true, filters: ['zaatar', 'cheese'] },
  { id: 'mana-duplex', ingredients: "Zaatar, cheese, spinach, lahm b3ajeen", name: 'Duplex', category: 'mana2eesh', price: 250000, priceLabel: '250,000 LL', description: '', image: "./images/zatar.png/Квартальна манакіш із чотирма смаками.png", options: [vegetableOption], popular: false, filters: ['other'] },
  { id: 'mana-cheese-ham', ingredients: "Akkawi cheese, mozzarella, ham", name: 'Cheese & Ham', category: 'mana2eesh', price: 250000, priceLabel: '250,000 LL', description: '', image: "./images/zatar.png/Апетитна піца пепероні з сиром.png", options: [vegetableOption], popular: false, filters: ['cheese', 'meat'] },
  { id: 'mana-cheese-soujouk', ingredients: "Akkawi cheese, mozzarella, soujouk", name: 'Cheese & Soujouk', category: 'mana2eesh', price: 300000, priceLabel: '300,000 LL', description: '', image: "./images/zatar.png/cheese-soujouk.png", options: [vegetableOption], popular: false, filters: ['cheese', 'meat'] },
  { id: 'pizza-soujouk', ingredients: "Tomato sauce, mozzarella, soujouk, bell pepper, onion", name: 'Soujouk', category: 'italian-pizza', price: 600000, priceLabel: '600,000 LL', description: '', image: "./images/zatar.png/soujouk.png", options: [], popular: false, filters: ['meat'] },
  { id: 'pizza-pepperoni', ingredients: "Tomato sauce, mozzarella, pepperoni", name: 'Pepperoni', category: 'italian-pizza', price: 600000, priceLabel: '600,000 LL', description: '', image: "./images/zatar.png/Апетитна піца пепероні з базиліком.png", options: [], popular: true, filters: ['meat'] },
  { id: 'pizza-marguerita', ingredients: "Tomato sauce, mozzarella, fresh basil, olive oil", name: 'Marguerita', category: 'italian-pizza', price: 500000, priceLabel: '500,000 LL', description: '', image: "./images/zatar.png/Апетитна неаполітанська піца Маргарита.png", options: [], popular: false, filters: ['vegetarian'] },
  { id: 'pizza-vegetarian', ingredients: "Tomato sauce, mozzarella, mushrooms, bell pepper, onion, olives", name: 'Vegetarian', category: 'italian-pizza', price: 600000, priceLabel: '600,000 LL', description: '', image: "./images/zatar.png/Апетитна овочева піца з базиліком.png", options: [], popular: false, filters: ['vegetarian'] },
  { id: 'burger-sandwich-burger', ingredients: "Beef patty, cheese, lettuce, tomato, onion, pickles, burger sauce", name: 'Burger', category: 'burger-sandwich', price: 500000, priceLabel: '500,000 LL', description: '', image: "./images/zatar.png/burger.png", options: [], popular: true, filters: ['burger'] },
  { id: 'burger-sandwich-batata', ingredients: "French fries, lettuce, tomato, pickles, garlic sauce, ketchup", name: 'Batata Sandwich', category: 'burger-sandwich', price: 200000, priceLabel: '200,000 LL', description: '', image: "./images/zatar.png/batata-sandwich.png", options: [], popular: false, filters: ['sandwich'] },
  { id: 'burger-sandwich-italian', ingredients: "Mozzarella, Italian cold cuts, tomato, lettuce, onion, sauce", name: 'Italian Sandwich', category: 'burger-sandwich', price: 400000, priceLabel: '400,000 LL', description: '', image: "./images/zatar.png/italian-sandwich.png", options: [], popular: false, filters: ['sandwich'] },
  { id: 'burger-sandwich-chicken', ingredients: "Grilled marinated chicken, lettuce, tomato, pickles, garlic sauce", name: 'Chicken Sandwich', category: 'burger-sandwich', price: 400000, priceLabel: '400,000 LL', description: '', image: "./images/zatar.png/chicken-sandwich.png", options: [], popular: false, filters: ['sandwich'] },
  { id: 'burger-sandwich-biria', ingredients: "Slow-cooked beef, cheese, onion, cilantro, birria sauce, lime", name: 'Biria Sandwich', category: 'burger-sandwich', price: 500000, priceLabel: '500,000 LL', description: '', image: "./images/zatar.png/biria-sandwich.png", options: [], popular: false, filters: ['sandwich'] },
  { id: 'mu3ajaneit-mini-pizza', ingredients: "Tomato sauce, mozzarella", name: 'Mini Pizza', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: "./images/zatar.png/Мініпіци на дерев’яній дошці.png", options: [], popular: true, filters: [] },
  { id: 'mu3ajaneit-mini-zaatar', ingredients: "Zaatar, olive oil", name: 'Mini Zaatar', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: "./images/zatar.png/Міні-манакіш із заатаром і кунжутом.png", options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-mini-cheese', ingredients: "Akkawi cheese, mozzarella", name: 'Mini Cheese', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: "./images/zatar.png/Золотисті міні-піци з сиром та базиліком.png", options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-mini-spinach', ingredients: "Spinach, onion, sumac, lemon juice", name: 'Mini Spinach', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: "./images/zatar.png/Міні-пироги зі шпинатом і сиром.png", options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-mini-hotdog', ingredients: "Mini hotdog sausage", name: 'Mini Hotdog', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: "./images/zatar.png/Золотисті міні-ковбаски в тісті.png", options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-halloum-rolls', ingredients: "Halloumi cheese, sesame", name: 'Halloum Rolls', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: "./images/zatar.png/Золотисті сирні рулетики з кунжутом.png", options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-cheese-burek', ingredients: "Cheese filling, sesame", name: 'Cheese Burek', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: "./images/zatar.png/Золотисті рулетики бурека з сиром.png", options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-kebbeh-meat', ingredients: "Bulgur, seasoned meat, onion, spices", name: 'Kebbeh Meat', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: "./images/zatar.png/Золотисті кібе на дерев’яній дошці.png", options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-kebbeh-pumpkin', ingredients: "Pumpkin, bulgur, onion, spices", name: 'Kebbeh Pumpkin', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: "./images/zatar.png/Золотисті кібе з гарбузовою начинкою.png", options: [], popular: false, filters: [] },
  { id: 'dessert-nutella', ingredients: "Nutella, banana, crushed nuts", name: 'Nutella', category: 'desserts', price: 300000, priceLabel: '300,000 LL', description: '', image: "./images/zatar.png/nutella.png", options: [], popular: true, filters: [] },
  { id: 'dessert-halawi', ingredients: "Halawa, pistachios", name: 'Halawi', category: 'desserts', price: 300000, priceLabel: '300,000 LL', description: '', image: "./images/zatar.png/halawi.png", options: [], popular: false, filters: [] },
  { id: 'dessert-meghli', ingredients: "Rice flour, sugar, cinnamon, caraway, anise, coconut, pistachios, mixed nuts", name: 'Meghli', category: 'desserts', price: 150000, priceLabel: '150,000 LL', description: '', image: "./images/zatar.png/meghli.png", options: [], popular: false, filters: [] },
  { id: 'drinks-pepsi', volume: '330 ml', name: 'Pepsi', category: 'drinks', price: 100000, priceLabel: '100,000 LL', description: '', image: "./images/zatar.png/Холодна Pepsi з льодом на дерев’яному столі.png", options: [], popular: false, filters: [] },
  { id: 'drinks-pepsi-diet', volume: '330 ml', name: 'Pepsi Diet', category: 'drinks', price: 100000, priceLabel: '100,000 LL', description: '', image: "./images/zatar.png/Холодний Pepsi Zero Sugar на льоду.png", options: [], popular: false, filters: [] },
  { id: 'drinks-7up', volume: '330 ml', name: '7UP', category: 'drinks', price: 100000, priceLabel: '100,000 LL', description: '', image: "./images/zatar.png/Освіжаючий 7UP з льодом на дерев’яному столі.png", options: [], popular: false, filters: [] },
  { id: 'drinks-mirinda', volume: '330 ml', name: 'Mirinda', category: 'drinks', price: 100000, priceLabel: '100,000 LL', description: '', image: "./images/zatar.png/Крижана Mirinda Orange на дереві.png", options: [], popular: false, filters: [] },
  { id: 'gift-card-10', name: 'Nicolas.S Gift Card', category: 'gift-certificates', price: 10, priceLabel: '$10', description: "A special gift for someone special.", image: "./images/zatar.png/Розкішна чорна подарункова картка ресторану.png", options: [], popular: false, filters: [] },
  { id: 'gift-card-20', name: 'Nicolas.S Gift Card', category: 'gift-certificates', price: 20, priceLabel: '$20', description: "A special gift for someone special.", image: "./images/zatar.png/Розкішна чорна подарункова картка Nicolas.S.png", options: [], popular: false, filters: [] },
  { id: 'gift-card-30', name: 'Nicolas.S Gift Card', category: 'gift-certificates', price: 30, priceLabel: '$30', description: "A special gift for someone special.", image: "./images/zatar.png/Елегантна подарункова картка ресторану Nicolas.S (1).png", options: [], popular: false, filters: [] }
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

const giftCardTerms = `<aside class="gift-card-terms"><h3>GIFT CARD TERMS</h3><p>Gift cards are denominated in USD. LBP equivalent is calculated at the restaurant's current exchange rate on the date of redemption. Gift cards are not redeemable for cash.</p></aside>`;

const ingredientsTemplate = (item) => item.ingredients ? `<div class="food-ingredients">${escapeHtml(item.ingredients)}</div>` : '';

const volumeTemplate = (item) => item.volume ? `<span class="drink-volume"><svg class="drink-volume-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="3" width="12" height="18" rx="3"/><path d="M7 7h10M7 17h10M10 5h4"/></svg><span>${escapeHtml(item.volume)}</span></span>` : '';

// The shared vegetableOption is legacy demo data, not a configured modifier.
const hasAvailableOptions = (item) => {
  if (item.category === 'drinks' || item.category === 'gift-certificates') return false;
  return [item.options, item.modifiers].some((entries) => Array.isArray(entries) && entries.some((option) =>
    option && (option !== vegetableOption || option.available === true) &&
    option.available !== false && option.enabled !== false &&
    typeof option.id === 'string' && option.id.trim() &&
    typeof option.name === 'string' && option.name.trim() &&
    (!Array.isArray(option.choices) || option.choices.some((choice) => choice && choice.available !== false && choice.enabled !== false))
  ));
};

const productCardTemplate = (item) => {
  const isFavorite = favorites.has(item.id);
  const description = item.description ? `<p>${escapeHtml(item.description)}</p>` : '';
  const badge = item.popular ? '<mark>Popular</mark>' : '';
  return `<article class="product-card reveal is-visible${item.category === 'gift-certificates' ? ' gift-card' : ''}${item.ingredients ? ' food-card' : ''}${item.ingredients ? ' food-card-no-options' : ''}" data-product-id="${escapeHtml(item.id)}" tabindex="0" aria-haspopup="dialog">
    <div class="product-media"><div class="product-image image-placeholder">${item.image ? `<img src="${escapeHtml(encodeURI(item.image))}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async">` : '<span>PRODUCT PHOTO</span>'}${badge}</div><button type="button" class="add-button mobile-add-button">+ ADD</button></div>
    <div class="product-body"><h3>${escapeHtml(item.name)}</h3>${description}${ingredientsTemplate(item)}<div class="product-options"><div class="product-quick-actions"><button class="favorite-button${isFavorite ? ' is-active' : ''}" type="button" aria-label="${isFavorite ? 'Remove' : 'Add'} ${escapeHtml(item.name)} ${isFavorite ? 'from' : 'to'} favorites" aria-pressed="${isFavorite}">${favoriteIcon}</button><button class="share-button" type="button" aria-label="Share ${escapeHtml(item.name)}">${shareIcon}</button></div></div><div class="product-footer"><strong>${escapeHtml(item.priceLabel)}</strong>${volumeTemplate(item)}<button type="button" class="add-button">Add to order <span>+</span></button></div></div>
  </article>`;
};

const desktopProductCardTemplate = (item) => {
  const isFavorite = favorites.has(item.id);
  const description = item.description ? `<p>${escapeHtml(item.description)}</p>` : '';
  const badge = item.popular ? '<mark>Popular</mark>' : '';
  return `<article class="desktop-product-card product-card${item.category === 'gift-certificates' ? ' gift-card' : ''}${item.ingredients ? ' food-card' : ''}${item.ingredients ? ' food-card-no-options' : ''}" data-product-id="${escapeHtml(item.id)}" tabindex="0" aria-haspopup="dialog">
    <div class="desktop-product-image-wrap"><div class="product-image image-placeholder">${item.image ? `<img src="${escapeHtml(encodeURI(item.image))}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async">` : '<span>PRODUCT PHOTO</span>'}${badge}</div><button class="favorite-button${isFavorite ? ' is-active' : ''}" type="button" aria-label="${isFavorite ? 'Remove' : 'Add'} ${escapeHtml(item.name)} ${isFavorite ? 'from' : 'to'} favorites" aria-pressed="${isFavorite}">${favoriteIcon}</button></div>
    <div class="desktop-product-body"><h3>${escapeHtml(item.name)}</h3>${item.category === 'gift-certificates' ? `<strong class="gift-card-value">${escapeHtml(item.priceLabel)}</strong>` : ''}${description}${item.ingredients ? `<strong class="food-card-price">${escapeHtml(item.priceLabel)}</strong>` : ''}${ingredientsTemplate(item)}<div class="desktop-product-controls"><button class="share-button" type="button" aria-label="Share ${escapeHtml(item.name)}">${shareIcon}</button></div></div>
    <div class="desktop-product-footer">${item.volume ? `<div class="drink-price-details"><strong class="desktop-product-price">${escapeHtml(item.priceLabel)}</strong>${volumeTemplate(item)}</div>` : `<strong class="desktop-product-price">${escapeHtml(item.priceLabel)}</strong>`}<button type="button" class="add-button">+ ADD</button></div>
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
    const heading = index === 0 ? '' : `<div class="mobile-menu-heading"><span>Nicolas.S</span><h2>${section.label}</h2></div>`;
    return `<section class="product-group" id="${section.id}" data-main-section="mini-bites" data-filter="${section.id}">${heading}${sectionItems.map(productCardTemplate).join('')}</section>`;
  }).join('');

  const burgerItems = itemsForCategory('burger-sandwich');
  const remainingSections = `
    <section class="product-group" id="burger-sandwich" data-main-section="sandwiches-burgers"><div class="mobile-menu-heading"><span>Nicolas.S</span><h2>BURGER / SANDWICH</h2></div>${burgerItems.map(productCardTemplate).join('')}</section>
    <section class="product-group" id="drinks-menu" data-main-section="drinks"><div class="mobile-menu-heading"><span>Nicolas.S</span><h2>DRINKS</h2></div>${itemsForCategory('drinks').map(productCardTemplate).join('')}</section>
    <section class="product-group" id="gift-certificates-menu" data-main-section="gift-certificates"><div class="mobile-menu-heading"><span>Nicolas.S</span><h2>GIFT CERTIFICATES</h2></div>${itemsForCategory('gift-certificates').map(productCardTemplate).join('')}${giftCardTerms}</section>`;

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
  { id: 'desktop-drinks', title: 'DRINKS', category: 'drinks', main: 'drinks' },
  { id: 'desktop-gift-certificates', title: 'GIFT CERTIFICATES', category: 'gift-certificates', main: 'gift-certificates' }
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
    return `<section class="desktop-menu-section" id="${section.id}" data-desktop-main="${section.main}"><header class="desktop-section-heading"><span>Nicolas.S</span><h2>${section.title}</h2></header>${content}${section.category === 'gift-certificates' ? giftCardTerms : ''}</section>`;
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

const cartStorageKey = 'nicolasSCart';
const readCart = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(cartStorageKey) || '{}');
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return {};
    return Object.fromEntries(Object.entries(saved).filter(([id, quantity]) => menuItems.some(item => item.id === id) && Number.isSafeInteger(quantity) && quantity > 0));
  } catch { return {}; }
};
let cart = readCart();
const cartTotals = () => menuItems.reduce((totals, item) => {
  const quantity = cart[item.id] || 0;
  totals[item.category === 'gift-certificates' ? 'usd' : 'll'] += item.price * quantity;
  totals.quantity += quantity;
  return totals;
}, { ll: 0, usd: 0, quantity: 0 });
const cartDialog = document.createElement('dialog');
cartDialog.className = 'cart-dialog';
cartDialog.setAttribute('aria-label', 'Shopping cart');
cartDialog.setAttribute('aria-modal', 'true');
document.body.append(cartDialog);
let cartOrigin = null;
let cartScroll = 0;
let cartBodyStyle = null;
const cartNumber = value => value.toLocaleString('en-US');
const updateCartBadge = () => {
  const total = cartTotals().quantity;
  document.querySelectorAll('.cart-trigger').forEach(button => {
    button.setAttribute('aria-label', 'Open cart, ' + total + ' items');
    const badge = button.querySelector('.cart-count');
    badge.textContent = total;
    badge.hidden = total === 0;
  });
};
const renderCart = () => {
  cartDialog.classList.remove('is-checkout');
  cartDialog.setAttribute('aria-label', 'Shopping cart');
  const totals = cartTotals();
  cartDialog.innerHTML = `<header class="cart-heading"><h2>Your cart</h2><button type="button" data-cart-close aria-label="Close cart">×</button></header>
    <div class="cart-content">${totals.quantity ? menuItems.filter(item => cart[item.id]).map(item => `<article class="cart-row" data-cart-id="${escapeHtml(item.id)}">
      <img src="${escapeHtml(encodeURI(item.image))}" alt="${escapeHtml(item.name)}">
      <div class="cart-row-info"><h3>${escapeHtml(item.name)}</h3><strong>${escapeHtml(item.priceLabel)}</strong>
        <div class="cart-row-actions"><div class="cart-quantity"><button type="button" data-cart-change="-1" ${cart[item.id] <= 1 ? 'disabled' : ''} aria-label="Decrease ${escapeHtml(item.name)} quantity">−</button><span aria-label="Quantity">${cart[item.id]}</span><button type="button" data-cart-change="1" aria-label="Increase ${escapeHtml(item.name)} quantity">+</button></div><button type="button" class="cart-remove" data-cart-remove aria-label="Remove ${escapeHtml(item.name)}">Remove</button></div>
      </div></article>`).join('') : '<p class="cart-empty">Your cart is empty.</p>'}</div>
    <footer class="cart-footer"><div class="cart-total"><span>Subtotal</span><strong>${cartNumber(totals.ll)} LL</strong></div>${totals.usd ? `<div class="cart-total"><span>Gift cards (USD)</span><strong>${cartNumber(totals.usd)}</strong></div>` : ''}<button type="button" class="cart-checkout" data-cart-checkout ${totals.quantity ? '' : 'disabled'}>CHECKOUT</button></footer>`;
};
const commitCart = () => {
  try { localStorage.setItem(cartStorageKey, JSON.stringify(cart)); } catch { /* Keep the current cart usable if storage is unavailable. */ }
  updateCartBadge();
  if (cartDialog.open) renderCart();
};
const changeCartQuantity = (id, change) => {
  if (!menuItems.some(item => item.id === id)) return;
  const quantity = (cart[id] || 0) + change;
  if (!Number.isSafeInteger(quantity) || quantity < 1) return;
  if (quantity > 0) cart[id] = quantity;
  else delete cart[id];
  commitCart();
};
let checkoutDraft = { customer: '', phone: '', orderType: 'delivery', address: '', building: '', deliveryNotes: '', notes: '' };
let pendingOrder = null;
const checkoutField = (name, label, required = false, type = 'text') => `<label class="checkout-field">${label}${required ? ' *' : ''}<input name="${name}" type="${type}" value="${escapeHtml(checkoutDraft[name])}" ${required ? 'required' : ''} aria-describedby="checkout-error-${name}" autocomplete="${name === 'customer' ? 'name' : name === 'phone' ? 'tel' : 'off'}"><span class="checkout-error" id="checkout-error-${name}"></span></label>`;
const checkoutItems = () => menuItems.filter(item => cart[item.id]).map(item => ({ id: item.id, name: item.name, price: item.price, currency: item.category === 'gift-certificates' ? 'USD' : 'LL', quantity: cart[item.id], total: item.price * cart[item.id] }));
const buildOrder = (draft) => ({
  customer: draft.customer.trim(), phone: draft.phone.trim(), orderType: draft.orderType,
  address: draft.orderType === 'delivery' ? { street: draft.address.trim(), building: draft.building.trim(), deliveryNotes: draft.deliveryNotes.trim() } : null,
  notes: draft.notes.trim(), paymentMethod: 'cash', items: checkoutItems(),
  subtotal: { LL: cartTotals().ll, USD: cartTotals().usd }, timestamp: new Date().toISOString()
});
const RESTAURANT_WHATSAPP = "96171000000";
const formatWhatsAppOrder = (order) => {
  const lines = [
    '🟡 NEW ORDER — Nicolas.S', '',
    'Customer: ' + order.customer,
    'Phone: ' + order.phone,
    'Order type: ' + (order.orderType === 'delivery' ? 'Delivery' : 'Pickup'),
    '', 'Items:',
    ...order.items.map(item => item.quantity + '× ' + item.name + ' — ' + (item.currency === 'USD' ? '$' + cartNumber(item.total) : cartNumber(item.total) + ' LL')),
    '', 'Subtotal: ' + cartNumber(order.subtotal.LL) + ' LL'
  ];
  if (order.subtotal.USD) lines.push('Gift cards total (USD): $' + cartNumber(order.subtotal.USD));
  lines.push('Payment: Cash');
  if (order.orderType === 'delivery' && order.address) {
    lines.push('', 'Address: ' + order.address.street);
    if (order.address.building) lines.push('Building / Floor / Apartment: ' + order.address.building);
    if (order.address.deliveryNotes) lines.push('Delivery notes: ' + order.address.deliveryNotes);
  }
  if (order.notes) lines.push('', 'Order notes: ' + order.notes);
  return lines.join('\n');
};
const orderWhatsAppUrl = order => 'https://wa.me/' + RESTAURANT_WHATSAPP + '?text=' + encodeURIComponent(formatWhatsAppOrder(order));

const renderCheckout = () => {
  if (!cartTotals().quantity) return renderCart();
  cartDialog.classList.add('is-checkout');
  cartDialog.setAttribute('aria-label', 'Checkout');
  const totals = cartTotals();
  cartDialog.innerHTML = `<header class="cart-heading"><button type="button" data-cart-back aria-label="Back to cart">←</button><h2>Checkout</h2><button type="button" data-cart-back aria-label="Back to cart">×</button></header>
  <form id="checkout-form" class="cart-content checkout-content" novalidate>
    <fieldset class="checkout-type"><legend class="checkout-legend">Order type</legend><label><input type="radio" name="orderType" value="delivery" ${checkoutDraft.orderType === 'delivery' ? 'checked' : ''}>Delivery</label><label><input type="radio" name="orderType" value="pickup" ${checkoutDraft.orderType === 'pickup' ? 'checked' : ''}>Pickup</label></fieldset>
    ${checkoutField('customer', 'Full name', true)}${checkoutField('phone', 'Phone number', true, 'tel')}
    <fieldset class="checkout-delivery" ${checkoutDraft.orderType === 'pickup' ? 'hidden disabled' : ''}><legend class="checkout-legend">Delivery details</legend>${checkoutField('address', 'Delivery address', true)}${checkoutField('building', 'Building / Floor / Apartment')}${checkoutField('deliveryNotes', 'Delivery notes (optional)')}</fieldset>
    <label class="checkout-field">Order notes (optional)<textarea name="notes" rows="2">${escapeHtml(checkoutDraft.notes)}</textarea></label>
    <fieldset class="checkout-payment"><legend>Payment method</legend><label><input type="radio" name="paymentMethod" value="cash" checked> Cash on delivery / pickup</label></fieldset>
    <section class="checkout-summary"><h3>Order summary</h3>${checkoutItems().map(item => `<div><span>${escapeHtml(item.name)} ×${item.quantity}</span><strong>${item.currency === 'USD' ? '$' + cartNumber(item.total) : cartNumber(item.total) + ' LL'}</strong></div>`).join('')}<div class="checkout-subtotal"><span>Subtotal</span><strong>${cartNumber(totals.ll)} LL</strong></div>${totals.usd ? `<div><span>Gift cards (USD)</span><strong>${'$' + cartNumber(totals.usd)}</strong></div>` : ''}</section>
    <p class="checkout-status" role="status"></p>
  </form><footer class="cart-footer"><button type="submit" form="checkout-form" class="cart-checkout">PLACE ORDER</button></footer>`;
};
cartDialog.addEventListener('input', event => {
  const field = event.target;
  if (!field.closest('#checkout-form') || !Object.hasOwn(checkoutDraft, field.name)) return;
  checkoutDraft[field.name] = field.value;
  pendingOrder = null;
  const error = cartDialog.querySelector('#checkout-error-' + field.name);
  if (error) { error.textContent = ''; field.removeAttribute('aria-invalid'); }
  cartDialog.querySelector('.checkout-status').textContent = '';
});
cartDialog.addEventListener('change', event => {
  if (event.target.name !== 'orderType') return;
  checkoutDraft.orderType = event.target.value;
  const delivery = cartDialog.querySelector('.checkout-delivery');
  delivery.hidden = checkoutDraft.orderType === 'pickup';
  delivery.disabled = delivery.hidden;
  pendingOrder = null;
  cartDialog.querySelector('.checkout-status').textContent = '';
});
cartDialog.addEventListener('submit', event => {
  if (event.target.id !== 'checkout-form') return;
  event.preventDefault();
  const form = event.target;
  for (const field of form.elements) if (Object.hasOwn(checkoutDraft, field.name) && (field.type !== 'radio' || field.checked)) checkoutDraft[field.name] = field.value;
  let firstInvalid = null;
  for (const name of ['customer', 'phone', ...(checkoutDraft.orderType === 'delivery' ? ['address'] : [])]) {
    const field = form.elements.namedItem(name);
    const invalid = !checkoutDraft[name].trim();
    field.setAttribute('aria-invalid', String(invalid));
    cartDialog.querySelector('#checkout-error-' + name).textContent = invalid ? 'Please fill in this field.' : '';
    if (invalid && !firstInvalid) firstInvalid = field;
  }
  if (firstInvalid) { pendingOrder = null; firstInvalid.focus(); return; }
  if (!cartTotals().quantity) { pendingOrder = null; cartDialog.querySelector('.checkout-status').textContent = 'Your cart is empty.'; return; }
  pendingOrder = buildOrder(checkoutDraft);
  cartDialog.querySelector('.checkout-status').textContent = 'Continue in WhatsApp and tap Send to submit your order. Your cart is saved.';
  window.location.assign(orderWhatsAppUrl(pendingOrder));
});

const closeCart = () => {
  cartDialog.close();
  if (cartBodyStyle === null) document.body.removeAttribute('style');
  else document.body.setAttribute('style', cartBodyStyle);
  window.scrollTo({ top: cartScroll, behavior: 'instant' });
  cartOrigin?.focus({ preventScroll: true });
};
document.querySelectorAll('.cart-trigger').forEach(button => button.addEventListener('click', () => {
  cartOrigin = button;
  cartScroll = window.scrollY;
  cartBodyStyle = document.body.getAttribute('style');
  renderCart();
  Object.assign(document.body.style, { position: 'fixed', top: '-' + cartScroll + 'px', width: '100%' });
  cartDialog.showModal();
  cartDialog.querySelector('[data-cart-close]').focus();
}));
cartDialog.addEventListener('cancel', event => { event.preventDefault(); if (cartDialog.classList.contains('is-checkout')) { renderCart(); cartDialog.querySelector('[data-cart-checkout]').focus(); } else closeCart(); });
cartDialog.addEventListener('click', event => {
  if (event.target === cartDialog) {
    const rect = cartDialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeCart();
    return;
  }
  const button = event.target.closest('button');
  if (!button || button.disabled) return;
  if (button.hasAttribute('data-cart-close')) return closeCart();
  if (button.hasAttribute('data-cart-back')) { renderCart(); cartDialog.querySelector('[data-cart-checkout]').focus(); return; }
  if (button.hasAttribute('data-cart-checkout')) {
    renderCheckout();
    cartDialog.querySelector('[name="customer"]')?.focus();
    return;
  }
  const row = button.closest('[data-cart-id]');
  if (!row) return;
  const id = row.dataset.cartId;
  if (button.hasAttribute('data-cart-remove')) { delete cart[id]; commitCart(); }
  else if (button.hasAttribute('data-cart-change')) changeCartQuantity(id, Number(button.dataset.cartChange));
  const nextRow = [...cartDialog.querySelectorAll('[data-cart-id]')].find(element => element.dataset.cartId === id);
  const nextButton = nextRow?.querySelector(button.hasAttribute('data-cart-remove') ? '[data-cart-remove]' : '[data-cart-change="' + button.dataset.cartChange + '"]');
  (nextButton && !nextButton.disabled ? nextButton : nextRow?.querySelector('[data-cart-change="1"]') || cartDialog.querySelector('[data-cart-close]')).focus();
});
window.addEventListener('storage', event => { if (event.key === cartStorageKey || event.key === null) { cart = readCart(); updateCartBadge(); if (cartDialog.open) renderCart(); } });
updateCartBadge();

const addProduct = (item, button) => {
  if (button.classList.contains('added')) return;
  changeCartQuantity(item.id, 1);
  const label = button.firstChild;
  const original = label.textContent;
  label.textContent = 'Added';
  button.classList.add('added');
  window.setTimeout(() => { label.textContent = original; button.classList.remove('added'); }, 1400);
};

productGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.product-card');
  if (!card) return;
  const item = menuItems.find((product) => product.id === card.dataset.productId);
  if (!item) return;
  const addButton = event.target.closest('.add-button');
  if (addButton) {
    addProduct(item, addButton);
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
    addProduct(item, addButton);
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

// One detail view for every menu item, using the existing product data.
const drinkUpsellTemplate = (item) => {
  if (!item.ingredients || item.category === 'drinks' || item.category === 'gift-certificates') return '';
  return `<section class="detail-drink-upsell" aria-labelledby="detail-drink-heading"><h3 id="detail-drink-heading">Add a drink?</h3><p class="detail-drink-hint">Choose one drink</p><div class="detail-drink-list">${menuItems.filter(drink => drink.category === 'drinks').map(drink => `<button type="button" class="detail-drink-row detail-drink-toggle" data-drink-id="${escapeHtml(drink.id)}" aria-pressed="false"><span class="detail-drink-info"><strong>${escapeHtml(drink.name)}</strong><span>${escapeHtml(drink.volume || '')}</span></span><span class="detail-drink-price">${escapeHtml(drink.priceLabel)}</span><svg class="detail-drink-check" viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-8"/></svg></button>`).join('')}</div></section>`;
};

const productDetailTemplate = (item) => `
  <div class="product-detail-handle" aria-hidden="true"></div>
  <button class="product-detail-close" type="button" aria-label="Close product details">×</button>
  <div class="product-detail-scroll">
    ${item.image ? `<img class="product-detail-image" src="${escapeHtml(encodeURI(item.image))}" alt="${escapeHtml(item.name)}">` : ''}
    <div class="product-detail-info">
      <h2 id="product-detail-title">${escapeHtml(item.name)}</h2>
      <strong class="product-detail-price">${escapeHtml(item.priceLabel)}</strong>
      ${volumeTemplate(item)}
      ${item.ingredients ? `<p class="product-detail-copy">${escapeHtml(item.ingredients)}</p>` : ''}
      ${item.description ? `<p class="product-detail-copy">${escapeHtml(item.description)}</p>` : ''}
      <div class="product-detail-actions">
        <button type="button" class="product-detail-favorite" aria-pressed="${favorites.has(item.id)}">${favoriteIcon}<span>Favorite</span></button>
        <button type="button" class="share-button" data-share-product="${escapeHtml(item.id)}">${shareIcon}<span>Share</span></button>
      </div>
      ${drinkUpsellTemplate(item)}
      <p class="product-detail-status" role="status"></p>
    </div>
  </div>
  <div class="product-detail-footer"><button class="product-detail-add" type="button">+ ADD</button></div>`;

const productDetail = document.createElement('dialog');
productDetail.className = 'product-detail';
productDetail.setAttribute('role', 'dialog');
productDetail.setAttribute('aria-modal', 'true');
productDetail.setAttribute('aria-labelledby', 'product-detail-title');
document.body.append(productDetail);
let selectedDrink = null;
let detailItem = null;
let detailOrigin = null;
let detailScroll = 0;
let detailBodyStyle = null;
let detailClosing = false;

const openProductDetail = (item, origin) => {
  if (productDetail.open) return;
  selectedDrink = null;
  detailItem = item;
  detailOrigin = origin;
  detailScroll = window.scrollY;
  detailBodyStyle = document.body.getAttribute('style');
  productDetail.innerHTML = productDetailTemplate(item);
  Object.assign(document.body.style, { position: 'fixed', top: '-' + detailScroll + 'px', width: '100%' });
  productDetail.showModal();
  productDetail.querySelector('.product-detail-close').focus();
};
const closeProductDetail = () => {
  if (!productDetail.open || detailClosing) return;
  detailClosing = true;
  productDetail.classList.add('is-closing');
  window.setTimeout(() => {
    productDetail.close();
    productDetail.classList.remove('is-closing');
    if (detailBodyStyle === null) document.body.removeAttribute('style');
    else document.body.setAttribute('style', detailBodyStyle);
    window.scrollTo({ top: detailScroll, behavior: 'instant' });
    const origin = detailOrigin?.isConnected ? detailOrigin : [...document.querySelectorAll('.product-card')].find(card => card.dataset.productId === detailItem.id && card.getClientRects().length);
    origin?.focus({ preventScroll: true });
    detailClosing = false;
  }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 220);
};
productDetail.addEventListener('cancel', (event) => { event.preventDefault(); closeProductDetail(); });
productDetail.addEventListener('click', (event) => {
  if (event.target === productDetail) {
    const rect = productDetail.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeProductDetail();
    return;
  }
  if (event.target.closest('.product-detail-close')) closeProductDetail();
  const drinkButton = event.target.closest('.detail-drink-toggle');
  if (drinkButton) {
    const drink = menuItems.find(item => item.id === drinkButton.dataset.drinkId && item.category === 'drinks');
    if (!drink) return;
    selectedDrink = selectedDrink?.id === drink.id ? null : drink;
    productDetail.querySelectorAll('.detail-drink-toggle').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.drinkId === selectedDrink?.id));
    });
    return;
  }
  const addButton = event.target.closest('.product-detail-add');
  if (addButton) {
    if (addButton.classList.contains('added')) return;
    addProduct(detailItem, addButton);
    if (selectedDrink) {
      // Use the shared add path without replacing the selection row's content.
      const feedback = document.createElement('button');
      feedback.textContent = '+ ADD';
      addProduct(selectedDrink, feedback);
    }
    selectedDrink = null;
    productDetail.querySelectorAll('.detail-drink-toggle').forEach(button => button.setAttribute('aria-pressed', 'false'));
    return;
  }
  const favorite = event.target.closest('.product-detail-favorite');
  if (favorite) {
    toggleFavorite(detailItem.id);
    updateFavoritesCount();
    renderProducts();
    renderDesktopProducts();
    favorite.setAttribute('aria-pressed', String(favorites.has(detailItem.id)));
  }
});
const shareProduct = async (item, button) => {
  const data = { title: item.name, text: item.name + ' — ' + item.priceLabel, url: window.location.href };
  try {
    if (navigator.share) await navigator.share(data);
    else if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(data.text + '\n' + data.url);
      if (productDetail.open) productDetail.querySelector('.product-detail-status').textContent = 'Link copied.';
      else { const previous = button.getAttribute('aria-label'); button.setAttribute('aria-label', 'Link copied'); window.setTimeout(() => previous === null ? button.removeAttribute('aria-label') : button.setAttribute('aria-label', previous), 2000); }
    } else window.prompt('Copy product link', data.text + '\n' + data.url);
  } catch (error) {
    if (error.name !== 'AbortError') {
      if (productDetail.open) productDetail.querySelector('.product-detail-status').textContent = 'Unable to share. Please try again.';
    }
  }
};
document.addEventListener('click', (event) => {
  const share = event.target.closest('.share-button');
  if (share) {
    const id = share.dataset.shareProduct || share.closest('[data-product-id]')?.dataset.productId;
    const item = menuItems.find(product => product.id === id);
    if (item) { event.preventDefault(); event.stopPropagation(); shareProduct(item, share); }
    return;
  }
  const card = event.target.closest('.product-card[data-product-id]');
  if (!card || event.target.closest('button, a, input, select, textarea, label')) return;
  const item = menuItems.find(product => product.id === card.dataset.productId);
  if (item) openProductDetail(item, card);
});
document.addEventListener('keydown', (event) => {
  if (!['Enter', ' '].includes(event.key) || !event.target.matches('.product-card[data-product-id]')) return;
  event.preventDefault();
  const item = menuItems.find(product => product.id === event.target.dataset.productId);
  if (item) openProductDetail(item, event.target);
});
