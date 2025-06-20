import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_audacityteam.org_0', ['https://www.audacityteam.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
