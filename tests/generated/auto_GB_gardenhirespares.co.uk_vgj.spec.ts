import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gardenhirespares.co.uk_vgj', ['https://www.gardenhirespares.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
