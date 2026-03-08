import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bgspring.cupmanager.net_zij', ['https://bgspring.cupmanager.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
