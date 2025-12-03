import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_docs.portainer.io_hn5', ['https://docs.portainer.io/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
