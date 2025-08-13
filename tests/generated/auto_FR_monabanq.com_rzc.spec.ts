import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_monabanq.com_rzc', ['https://www.monabanq.com/fr/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
