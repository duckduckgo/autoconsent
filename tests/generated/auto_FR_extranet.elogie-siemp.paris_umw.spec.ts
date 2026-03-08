import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_extranet.elogie-siemp.paris_umw', ['https://extranet.elogie-siemp.paris/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
