import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_transactual.org.uk_0', ['http://transactual.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
