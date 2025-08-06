import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_f-secure.com_e8r', ['https://www.f-secure.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
