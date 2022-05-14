export const SITE = {
	title: 'Документация Dialute',
	description: 'Подробное руководство по использованию фреймворка',
	defaultLanguage: 'ru_RU',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	// English: 'en',
	Russian: 'ru',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Section Header', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Page 2', link: 'en/page-2' },
		{ text: 'Page 3', link: 'en/page-3' },

		{ text: 'Another Section', header: true },
		{ text: 'Page 4', link: 'en/page-4' },
	],
	ru: [
		{ text: '', header: true },
		{ text: 'Знакомство с Dialute', header: true },
		{ text: '🌵 Введение', link: 'ru/1.introduction' },
		{ text: '🍃 Быстрый старт', link: 'ru/2.startup' },
		{ text: '🌱 Разработка CanvasApp', link: 'ru/3.canvasapp' },

		{ text: 'Продвинутые техники', header: true },
		{ text: '🍀 События', link: 'ru/4.events' },

		{ text: 'Документация по типам', header: true },
	],
};
