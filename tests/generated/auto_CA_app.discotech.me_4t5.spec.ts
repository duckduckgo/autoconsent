import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_app.discotech.me_4t5', ['https://app.discotech.me/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
