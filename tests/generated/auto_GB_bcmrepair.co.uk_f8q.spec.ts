import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bcmrepair.co.uk_f8q', ['https://bcmrepair.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
