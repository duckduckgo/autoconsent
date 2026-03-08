import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ekoshoptillvaro.nl_ao2', ['https://ekoshoptillvaro.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
