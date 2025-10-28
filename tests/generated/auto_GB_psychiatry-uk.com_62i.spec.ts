import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_psychiatry-uk.com_62i', ['https://psychiatry-uk.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
