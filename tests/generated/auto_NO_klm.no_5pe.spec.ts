import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_klm.no_5pe', ['https://www.klm.no/en?showredirectnotice=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
