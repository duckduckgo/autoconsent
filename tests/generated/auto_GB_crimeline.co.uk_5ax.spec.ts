import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_crimeline.co.uk_5ax', ['https://crimeline.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
