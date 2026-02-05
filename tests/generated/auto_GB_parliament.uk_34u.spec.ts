import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_parliament.uk_34u', ['https://www.parliament.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
