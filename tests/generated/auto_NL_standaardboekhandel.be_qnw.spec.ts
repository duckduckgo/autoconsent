import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_standaardboekhandel.be_qnw', ['https://www.standaardboekhandel.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
