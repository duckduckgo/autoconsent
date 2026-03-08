import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careers.astrazeneca.com_n15', ['https://careers.astrazeneca.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
