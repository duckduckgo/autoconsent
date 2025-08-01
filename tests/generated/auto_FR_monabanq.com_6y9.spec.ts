import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_monabanq.com_6y9', ['https://www.monabanq.com/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
