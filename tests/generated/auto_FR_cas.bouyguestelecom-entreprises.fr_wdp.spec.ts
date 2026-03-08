import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cas.bouyguestelecom-entreprises.fr_wdp', ['https://cas.bouyguestelecom-entreprises.fr/cas/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
