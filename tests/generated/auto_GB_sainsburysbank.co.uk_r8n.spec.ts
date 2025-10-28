import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sainsburysbank.co.uk_r8n', ['https://www.sainsburysbank.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
