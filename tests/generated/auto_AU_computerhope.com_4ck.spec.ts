import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_computerhope.com_4ck', ['https://www.computerhope.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
