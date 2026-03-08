import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_docs.zeta-producer.com_9bc', ['https://docs.zeta-producer.com/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
