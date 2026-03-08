import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_business.linkedin.com_qc9', ['https://business.linkedin.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
