import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_agupubs.onlinelibrary.wiley.com_mte', ['https://agupubs.onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
