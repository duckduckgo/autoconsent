import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_islesofscilly-travel.co.uk_ook', ['https://www.islesofscilly-travel.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
