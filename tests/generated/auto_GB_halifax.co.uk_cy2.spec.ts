import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_halifax.co.uk_cy2', ['https://www.halifax.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
