import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_mysextoyguide.com_gg6', ['https://www.mysextoyguide.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
