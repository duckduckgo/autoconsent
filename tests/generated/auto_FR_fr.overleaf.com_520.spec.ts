import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.overleaf.com_520', ['https://fr.overleaf.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
