import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_findagrave.com_vul', ['https://www.findagrave.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
