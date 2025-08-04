import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_freedomflotilla.org_z82', ['https://freedomflotilla.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
