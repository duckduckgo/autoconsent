import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sabre-roads.org.uk_dpt', ['https://www.sabre-roads.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
