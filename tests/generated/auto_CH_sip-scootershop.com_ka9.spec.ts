import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sip-scootershop.com_ka9', ['https://www.sip-scootershop.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
