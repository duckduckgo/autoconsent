import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fondation.edf.com_572', ['https://fondation.edf.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
