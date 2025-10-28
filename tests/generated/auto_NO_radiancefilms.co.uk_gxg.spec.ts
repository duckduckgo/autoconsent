import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_radiancefilms.co.uk_gxg', ['https://www.radiancefilms.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
