import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_newunblockedgames.gitlab.io_wpe', ['https://newunblockedgames.gitlab.io/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
