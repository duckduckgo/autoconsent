import generateCMPTests from '../playwright/runner';

// stores show the bar only in regions that require consent
generateCMPTests('focal-cookie-bar', ['https://hacksmith.store/en-no', 'https://www.zuckersuessverlag.de/'], {
    onlyRegions: ['GB', 'DE', 'NO'],
});
generateCMPTests('focal-cookie-bar', ['https://obumi.de/'], {
    onlyRegions: ['DE'],
});
