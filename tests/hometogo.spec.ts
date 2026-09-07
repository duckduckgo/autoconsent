import generateCMPTests from '../playwright/runner';

// hometogo.com serves a banner with an explicit reject button; the other HomeToGo Group
// brands only offer "Cookie settings", so the reject path goes through the settings modal.
const urls = ['https://www.hometogo.com/', 'https://www.casamundo.com/', 'https://www.hometogo.de/'];

generateCMPTests('hometogo', urls, { mobile: false });
generateCMPTests('hometogo', urls, { mobile: true });
