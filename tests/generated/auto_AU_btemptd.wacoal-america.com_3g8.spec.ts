import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_btemptd.wacoal-america.com_3g8', ['https://btemptd.wacoal-america.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
