import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_orange-telephone.com_kr5', ['https://orange-telephone.com/fr/antispam'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
