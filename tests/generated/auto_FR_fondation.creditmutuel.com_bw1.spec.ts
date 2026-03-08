import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fondation.creditmutuel.com_bw1', ['https://fondation.creditmutuel.com/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
