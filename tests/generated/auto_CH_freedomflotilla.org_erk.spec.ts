import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_freedomflotilla.org_erk', ['https://freedomflotilla.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
