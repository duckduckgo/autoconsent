import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_docs.docker.com_546', ['https://docs.docker.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
