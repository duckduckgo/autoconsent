import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lionshome.co.uk_0', ['https://www.lionshome.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
