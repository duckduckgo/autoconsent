import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bigfishgames.com_6wp', ['https://www.bigfishgames.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
