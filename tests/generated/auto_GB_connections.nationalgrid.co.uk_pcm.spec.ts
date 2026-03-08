import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_connections.nationalgrid.co.uk_pcm', ['https://connections.nationalgrid.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
