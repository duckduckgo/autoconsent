import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fioulmoinscher.fr_jch', ['https://www.fioulmoinscher.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
