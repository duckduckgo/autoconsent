import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_baseball-reference.com_p9p', ['https://www.baseball-reference.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
