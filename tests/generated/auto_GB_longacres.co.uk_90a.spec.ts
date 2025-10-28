import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_longacres.co.uk_90a', ['https://www.longacres.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
