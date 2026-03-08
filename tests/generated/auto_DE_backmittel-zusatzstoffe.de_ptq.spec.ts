import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_backmittel-zusatzstoffe.de_ptq', ['https://backmittel-zusatzstoffe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
