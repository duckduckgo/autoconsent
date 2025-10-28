import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_samskipnaden.no_zm1', ['https://samskipnaden.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
