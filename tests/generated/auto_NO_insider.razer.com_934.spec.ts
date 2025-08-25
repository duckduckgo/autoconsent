import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_insider.razer.com_934', ['https://insider.razer.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
