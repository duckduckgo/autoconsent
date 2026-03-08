import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bathcenter.co.uk_4w1', ['https://bathcenter.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
