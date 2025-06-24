import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vintage-erotica-forum.com_0', ['http://vintage-erotica-forum.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
