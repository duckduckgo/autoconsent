import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alfaromeo.de_gvg', ['https://www.alfaromeo.de/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
