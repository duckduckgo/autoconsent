import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_similarweb.com_13b', ['https://www.similarweb.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
