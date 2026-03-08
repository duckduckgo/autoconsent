import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_awakenedpilates.janeapp.com_4g1', ['https://awakenedpilates.janeapp.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
