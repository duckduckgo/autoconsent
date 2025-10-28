import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_servicecitoyen.ch_cft', ['https://www.servicecitoyen.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
