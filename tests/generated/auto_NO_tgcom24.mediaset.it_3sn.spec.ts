import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tgcom24.mediaset.it_3sn', ['https://www.tgcom24.mediaset.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
