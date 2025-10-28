import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_royalmarsden.nhs.uk_ex0', ['https://www.royalmarsden.nhs.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
