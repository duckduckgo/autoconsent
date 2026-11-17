import generateCMPTests from '../playwright/runner';

generateCMPTests('jobbland', ['https://jobbland.se/', 'https://www.jobbsafari.se/'], {
    onlyRegions: ['SE', 'DE'],
});
