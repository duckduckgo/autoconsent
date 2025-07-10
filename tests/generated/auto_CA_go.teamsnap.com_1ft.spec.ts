import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_go.teamsnap.com_1ft', ['https://go.teamsnap.com/login/signin'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
