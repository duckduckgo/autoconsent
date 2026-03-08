import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bulletcentral.com_c9s', ['https://bulletcentral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
