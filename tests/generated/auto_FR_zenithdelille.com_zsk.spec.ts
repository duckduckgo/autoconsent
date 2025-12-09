import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_zenithdelille.com_zsk', ['https://www.zenithdelille.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
