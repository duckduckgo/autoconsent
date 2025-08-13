import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_f-secure.com_el5', ['https://www.f-secure.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
