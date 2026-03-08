import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_edindexhousing.co.uk_480', ['https://edindexhousing.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
