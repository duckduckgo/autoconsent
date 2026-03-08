import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_de.edelwhite.swiss_uj4', ['https://de.edelwhite.swiss/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
