import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_net-entreprises.fr_f59', ['https://www.net-entreprises.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
