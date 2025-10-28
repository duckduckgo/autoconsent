import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tutos-informatique.com_5t3', ['https://www.tutos-informatique.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
