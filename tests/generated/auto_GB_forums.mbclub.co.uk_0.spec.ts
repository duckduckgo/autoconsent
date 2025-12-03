import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_forums.mbclub.co.uk_0', ['https://forums.mbclub.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
