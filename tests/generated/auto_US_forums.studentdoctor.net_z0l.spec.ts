import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_forums.studentdoctor.net_z0l', ['https://forums.studentdoctor.net/forums/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
