import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fermob-gartenmoebel-mohrenhaus.de_2s1', ['https://fermob-gartenmoebel-mohrenhaus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
