import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_embarkpensions.co.uk_jcj', ['https://embarkpensions.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
