import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_klm.no_kzr', ['https://www.klm.no/en?showredirectnotice=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
