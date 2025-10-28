import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_itftennis.com_6qu', ['https://www.itftennis.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
