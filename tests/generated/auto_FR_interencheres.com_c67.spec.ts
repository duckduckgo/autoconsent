import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_interencheres.com_c67', ['https://www.interencheres.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
