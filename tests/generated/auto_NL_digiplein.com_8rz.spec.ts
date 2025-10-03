import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_digiplein.com_8rz', ['https://www.digiplein.com/aanmelden?result=false'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
