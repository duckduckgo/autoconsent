import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_personalised.clothing_n8r', ['https://personalised.clothing/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
