import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_interencheres.com_hlj', ['https://www.interencheres.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
