import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_classroomsecrets.co.uk_8ck', ['https://classroomsecrets.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
