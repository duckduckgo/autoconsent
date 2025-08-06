import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_motor-doctor.co.uk_0', ['https://www.motor-doctor.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
