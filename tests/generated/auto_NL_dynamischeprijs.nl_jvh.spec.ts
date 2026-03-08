import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dynamischeprijs.nl_jvh', ['https://dynamischeprijs.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
