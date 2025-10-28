import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jacquielawson.com_08d', ['https://www.jacquielawson.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
