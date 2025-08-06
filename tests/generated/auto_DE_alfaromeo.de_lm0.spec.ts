import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alfaromeo.de_lm0', ['https://www.alfaromeo.de/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
