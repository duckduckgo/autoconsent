import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_interepargne.natixis.com_wwa', ['https://www.interepargne.natixis.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
