import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives-nationales.culture.gouv.fr_w1s', ['https://www.archives-nationales.culture.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
