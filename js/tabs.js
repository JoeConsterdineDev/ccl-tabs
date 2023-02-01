// Tabs

const tabs = document.querySelector('.tabs-list');
const tabsLinks = tabs.querySelectorAll('li > a');
const tabItems = document.querySelectorAll('.tabs-content > .tabs-item');

// When tab clicked
const onTabsClick = (event) => {
	const tab = event.target;

	// Exit function if no tab
	if(!tab) return;

	// Remove active styles from all tabs
	tabsLinks.forEach((tab) => {
		tab.classList.remove('active');
		tab.removeAttribute('aria-selected');
	});

	// Tab items
	const tabHref = tab.getAttribute('href').split("#")[1];
	tabItems.forEach((item) => {
		item.classList.remove('active');

		if(item.id === tabHref) {
			item.classList.add('active');
			tab.setAttribute('aria-selected', true);
		}
	});

	// Apply active style to clicked tab
	tab.classList.add('active');
}

// Loop over tab links
tabsLinks.forEach((tab) => {
	tab.addEventListener('click', onTabsClick);
});