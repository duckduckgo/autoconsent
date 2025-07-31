import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_emberinns.co.uk_0', ['https://www.emberinns.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
