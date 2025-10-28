import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_baseball-reference.com_jzy', ['https://www.baseball-reference.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
