import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_carnivoranorwegia.no_7lv', ['https://carnivoranorwegia.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
