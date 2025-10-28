import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_italien-facile.com_idq', ['https://www.italien-facile.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
