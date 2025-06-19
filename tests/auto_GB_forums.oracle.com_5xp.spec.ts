import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_forums.oracle.com_5xp', ['https://forums.oracle.com/ords/r/apexds/community/home'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
