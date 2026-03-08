import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_evntcentral.com_opz', ['https://evntcentral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
