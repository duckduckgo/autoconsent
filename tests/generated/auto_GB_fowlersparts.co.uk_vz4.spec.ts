import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fowlersparts.co.uk_vz4', ['https://www.fowlersparts.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
