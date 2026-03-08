import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_askermathall.no_fq4', ['https://askermathall.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
