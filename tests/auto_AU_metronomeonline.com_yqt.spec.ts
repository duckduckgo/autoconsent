import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_metronomeonline.com_yqt', ['https://www.metronomeonline.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
