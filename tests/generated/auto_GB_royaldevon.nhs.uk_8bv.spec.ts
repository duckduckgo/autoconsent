import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_royaldevon.nhs.uk_8bv', ['https://www.royaldevon.nhs.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
