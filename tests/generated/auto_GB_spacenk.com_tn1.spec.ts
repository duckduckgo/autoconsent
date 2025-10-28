import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_spacenk.com_tn1', ['https://www.spacenk.com/uk/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
