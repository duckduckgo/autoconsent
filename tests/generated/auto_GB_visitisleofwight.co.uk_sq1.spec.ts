import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_visitisleofwight.co.uk_sq1', ['https://www.visitisleofwight.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
