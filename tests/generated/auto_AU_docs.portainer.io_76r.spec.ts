import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_docs.portainer.io_76r', ['https://docs.portainer.io/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
