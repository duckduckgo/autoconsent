import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_compressionsockshop.co.uk_o6l', ['https://compressionsockshop.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
