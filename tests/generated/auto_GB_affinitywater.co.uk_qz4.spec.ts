import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_affinitywater.co.uk_qz4', ['https://www.affinitywater.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
