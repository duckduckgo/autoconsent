import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gardenhirespares.co.uk_gb5', ['https://www.gardenhirespares.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
