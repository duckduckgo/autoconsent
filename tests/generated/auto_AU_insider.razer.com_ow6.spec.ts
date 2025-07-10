import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_insider.razer.com_ow6', ['https://insider.razer.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
