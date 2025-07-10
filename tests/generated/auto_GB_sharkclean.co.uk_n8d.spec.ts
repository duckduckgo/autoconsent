import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sharkclean.co.uk_n8d', ['https://sharkclean.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
