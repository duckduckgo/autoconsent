import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stanleygibbons.com_zwm', ['https://www.stanleygibbons.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
