import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_motor-doctor.nl_n3s', ['https://www.motor-doctor.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
