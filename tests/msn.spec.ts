import generateCMPTests from '../playwright/runner';

generateCMPTests('msn', ['https://www.msn.com/en-gb', 'https://www.msn.com/de-de', 'https://www.msn.com/fr-fr'], {
    onlyRegions: ['UK', 'DE', 'FR'],
});
