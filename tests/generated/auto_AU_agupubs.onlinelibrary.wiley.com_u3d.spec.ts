import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_agupubs.onlinelibrary.wiley.com_u3d', ['https://agupubs.onlinelibrary.wiley.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
