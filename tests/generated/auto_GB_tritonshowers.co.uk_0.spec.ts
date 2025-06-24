import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tritonshowers.co.uk_0', ['https://www.tritonshowers.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
