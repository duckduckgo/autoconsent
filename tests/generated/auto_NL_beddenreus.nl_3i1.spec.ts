import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_beddenreus.nl_3i1', ['https://www.beddenreus.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
