import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_corporatefinanceinstitute.com_864', ['https://corporatefinanceinstitute.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
