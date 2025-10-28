import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_jamiesonvitamins.com_4fh', ['https://www.jamiesonvitamins.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
