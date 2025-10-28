import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_personalised.clothing_pkl', ['https://personalised.clothing/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
