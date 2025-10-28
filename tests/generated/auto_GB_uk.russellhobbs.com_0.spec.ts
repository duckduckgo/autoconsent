import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uk.russellhobbs.com_0', ['https://uk.russellhobbs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
