import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_baumhausbande.com_gy3', ['https://baumhausbande.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
