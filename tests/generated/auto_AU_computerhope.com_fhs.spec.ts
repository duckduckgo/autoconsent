import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_computerhope.com_fhs', ['https://www.computerhope.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
