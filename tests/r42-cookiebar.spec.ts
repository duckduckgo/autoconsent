import generateCMPTests from '../playwright/runner';

generateCMPTests('r42-cookiebar', ['https://www.zilverenkruis.nl/', 'https://www.fbto.nl/', 'https://www.centraalbeheer.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
