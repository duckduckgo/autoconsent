import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_troisfoisparjour.com_rqm', ['https://www.troisfoisparjour.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
