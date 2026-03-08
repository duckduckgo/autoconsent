import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_essentia-mobilia.com_xs3', ['https://essentia-mobilia.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
