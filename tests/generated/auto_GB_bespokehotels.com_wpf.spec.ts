import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bespokehotels.com_wpf', ['https://bespokehotels.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
