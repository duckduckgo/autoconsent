import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_playactivate.com_9ac', ['https://playactivate.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
