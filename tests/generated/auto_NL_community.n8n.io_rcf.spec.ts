import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_community.n8n.io_rcf', ['https://community.n8n.io/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
