import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_audacityteam.org_uon', ['https://www.audacityteam.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
