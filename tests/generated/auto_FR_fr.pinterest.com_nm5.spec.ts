import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.pinterest.com_nm5', ['https://fr.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
