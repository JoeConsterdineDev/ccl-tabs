// Tabs

const tabs = document.getElementById('tabs-list');
const tabsLinks = tabs.querySelectorAll('li > a');
const tabItems = document.querySelectorAll('.tabs__content > .tabs__item');

// When tab clicked
const onTabsClick = (event) => {
	const tab = event.target;

	// Exit function if no tab
	if(!tab) return;

	// Remove active styles from all tabs
	tabsLinks.forEach((tab) => {
		tab.classList.remove('tabs__link--active');
	});

	// Tab items
	const tabHref = tab.getAttribute('href').split("#")[1];
	tabItems.forEach((item) => {
		item.classList.remove('active');

		if(item.id === tabHref) {
			item.classList.add('active');
		}
	});

	// Apply active style to clicked tab
	tab.classList.add('tabs__link--active');
	tab.classList.add('active');
}

// Loop over tab links
tabsLinks.forEach((tab) => {
	tab.addEventListener('click', onTabsClick);
});