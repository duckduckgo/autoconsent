import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dunsterhouse.co.uk_0', ['https://dunsterhouse.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
