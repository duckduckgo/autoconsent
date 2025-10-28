import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_agupubs.onlinelibrary.wiley.com_0o4', ['https://agupubs.onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
