import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sportsshoes.com_pgp', ['https://www.sportsshoes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
