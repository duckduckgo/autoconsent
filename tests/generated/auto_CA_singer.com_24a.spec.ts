import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_singer.com_24a', ['https://www.singer.com/en-ca'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
