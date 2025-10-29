import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_jacquielawson.com_sk2', ['https://www.jacquielawson.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
