import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ch.prohealth.com_olf', ['https://ch.prohealth.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
