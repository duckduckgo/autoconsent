import generateCMPTests from '../playwright/runner';

generateCMPTests('livejasmin', ['https://www.livejasmin.com/en/girls/?forcedesktop=1'], { testOptIn: false });
generateCMPTests('livejasmin', ['https://m.livejasmin.com/en/girls/girl'], {
    testOptIn: false,
    onlyRegions: ['DE'],
    mobile: true,
});
