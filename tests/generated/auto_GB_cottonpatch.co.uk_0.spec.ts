import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cottonpatch.co.uk_0', ['https://www.cottonpatch.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
