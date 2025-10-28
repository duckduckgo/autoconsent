import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bulletinspaie.com_ddg', ['https://bulletinspaie.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
