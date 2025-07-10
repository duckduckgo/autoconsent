import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_apartmenttherapy.com_5o0', ['https://www.apartmenttherapy.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
