import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_musicdirect.com_jhh', ['https://www.musicdirect.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
