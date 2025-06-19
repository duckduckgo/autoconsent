import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_torbayandsouthdevon.nhs.uk_ute', ['https://www.torbayandsouthdevon.nhs.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
