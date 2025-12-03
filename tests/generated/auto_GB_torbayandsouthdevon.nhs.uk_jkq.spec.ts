import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_torbayandsouthdevon.nhs.uk_jkq', ['https://www.torbayandsouthdevon.nhs.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
