import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_teams.live.com_adl', ['https://teams.live.com/free/?source=RWCNotSignedIn'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
