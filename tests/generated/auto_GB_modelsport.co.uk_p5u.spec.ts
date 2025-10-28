import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_modelsport.co.uk_p5u', ['https://www.modelsport.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
