import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kingston.gov.uk_sjd', ['https://www.kingston.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
