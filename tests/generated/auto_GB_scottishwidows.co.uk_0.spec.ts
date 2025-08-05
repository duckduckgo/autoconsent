import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scottishwidows.co.uk_0', ['https://www.scottishwidows.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
