import generateCMPTests from '../playwright/runner';

generateCMPTests('r42-cookiebar', ['https://zilverenkruis.nl/', 'https://fbto.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
