import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fiat.de_5i1', ['https://www.fiat.de/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
