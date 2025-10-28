import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_streetmap.co.uk_qa7', ['https://www.streetmap.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
