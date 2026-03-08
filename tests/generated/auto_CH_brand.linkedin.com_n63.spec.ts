import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_brand.linkedin.com_n63', ['https://brand.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
