import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_checkonaut.org_2kk', ['https://www.checkonaut.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
