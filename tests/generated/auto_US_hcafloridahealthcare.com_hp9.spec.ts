import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_hcafloridahealthcare.com_hp9', ['https://www.hcafloridahealthcare.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
