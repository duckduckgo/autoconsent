import generateCMPTests from '../playwright/runner';

generateCMPTests('r42-cookiebar', ['https://zilverenkruis.nl/', 'https://www.averoachmea.nl/', 'https://www.centraalbeheer.nl/'], {
    onlyRegions: ['NL'],
});
