import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_backyardbaseballplay.com_dd7', ['https://backyardbaseballplay.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
