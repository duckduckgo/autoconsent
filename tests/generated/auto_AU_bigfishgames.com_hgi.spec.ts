import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bigfishgames.com_hgi', ['https://www.bigfishgames.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
