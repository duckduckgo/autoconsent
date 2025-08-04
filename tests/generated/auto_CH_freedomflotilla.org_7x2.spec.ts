import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_freedomflotilla.org_7x2', ['https://freedomflotilla.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
