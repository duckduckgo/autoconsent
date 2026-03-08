import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careers.dobbies.com_qes', ['https://careers.dobbies.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
