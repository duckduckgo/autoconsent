import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_marseille-cassis.com_ogt', ['https://www.marseille-cassis.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
