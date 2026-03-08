import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_badbirdiegolf.com_vkk', ['https://badbirdiegolf.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
