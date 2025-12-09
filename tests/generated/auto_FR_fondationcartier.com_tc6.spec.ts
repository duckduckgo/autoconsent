import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fondationcartier.com_tc6', ['https://www.fondationcartier.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
