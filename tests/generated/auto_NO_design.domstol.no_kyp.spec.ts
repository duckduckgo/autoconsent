import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_design.domstol.no_kyp', ['https://design.domstol.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
