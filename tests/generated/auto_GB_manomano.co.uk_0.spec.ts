import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_manomano.co.uk_0', ['https://www.manomano.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
