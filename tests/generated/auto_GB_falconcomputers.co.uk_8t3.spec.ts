import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_falconcomputers.co.uk_8t3', ['https://falconcomputers.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
