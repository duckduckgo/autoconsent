import generateCMPTests from '../playwright/runner';

generateCMPTests('webtoffee-cookie-consent', [
    'https://www.mergermarket.com/',
    'https://www.etsi.org/',
    'https://www.valeo.com/',
    'https://www.smartschool.be/',
    // classic bar variant without a reject button
    'https://www.interac.ca/',
]);

// banner is only shown to EU/UK visitors
generateCMPTests('webtoffee-cookie-consent', ['https://www.humanitas.it/'], {
    skipRegions: ['US'],
});

// CCPA "Do Not Sell or Share" variant (US visitors only)
generateCMPTests('webtoffee-cookie-consent', ['https://commute.org/', 'https://everytownresearch.org/'], {
    onlyRegions: ['US'],
});
