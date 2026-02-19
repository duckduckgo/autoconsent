import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sante-espaceparticuliers.atoutmh.com_5cd', ['https://sante-espaceparticuliers.atoutmh.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
