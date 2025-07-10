import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nextdaypaint.co.uk_tpx', ['https://nextdaypaint.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
