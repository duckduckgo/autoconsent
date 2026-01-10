import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_forums.studentdoctor.net_ny7', ['https://forums.studentdoctor.net/forums/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
