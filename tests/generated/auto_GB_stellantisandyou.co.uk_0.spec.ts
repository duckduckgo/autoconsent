import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stellantisandyou.co.uk_0', ['https://www.stellantisandyou.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
