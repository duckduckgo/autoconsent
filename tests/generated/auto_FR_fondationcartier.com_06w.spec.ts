import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fondationcartier.com_06w', ['https://www.fondationcartier.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
