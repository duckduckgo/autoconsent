import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_harvester.co.uk_0', ['https://www.harvester.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
