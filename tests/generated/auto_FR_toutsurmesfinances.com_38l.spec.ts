import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_toutsurmesfinances.com_38l', ['https://www.toutsurmesfinances.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
