import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jemepropose.com_xrp', ['https://www.jemepropose.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
