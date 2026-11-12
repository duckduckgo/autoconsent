import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'bundesarchiv-cookiebanner',
    ['https://www.bundesarchiv.de/', 'https://www.stasi-mediathek.de/', 'https://www.ddr-im-blick.de/', 'https://www.bundesbildstelle.de/'],
    {},
);
