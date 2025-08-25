import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_euro-expos.com_tok', ['https://www.euro-expos.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
