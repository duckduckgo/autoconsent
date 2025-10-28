import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_covid19.public-inquiry.uk_155', ['https://covid19.public-inquiry.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
