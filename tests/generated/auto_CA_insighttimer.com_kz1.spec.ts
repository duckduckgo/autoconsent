import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_insighttimer.com_kz1', ['https://insighttimer.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
