import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_autoteiledirekt.de_tav', ['https://www.autoteiledirekt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
