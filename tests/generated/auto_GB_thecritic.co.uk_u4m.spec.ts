import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thecritic.co.uk_u4m', ['https://thecritic.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
