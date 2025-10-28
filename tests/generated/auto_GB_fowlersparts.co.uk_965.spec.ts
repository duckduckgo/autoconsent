import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fowlersparts.co.uk_965', ['https://www.fowlersparts.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
