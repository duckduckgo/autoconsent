import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_benefitsandwork.co.uk_0', ['https://www.benefitsandwork.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
