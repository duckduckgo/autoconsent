import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_adviser.scottishwidows.co.uk_5a8', ['https://adviser.scottishwidows.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
