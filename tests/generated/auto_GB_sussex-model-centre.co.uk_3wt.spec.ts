import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sussex-model-centre.co.uk_3wt', ['https://sussex-model-centre.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
