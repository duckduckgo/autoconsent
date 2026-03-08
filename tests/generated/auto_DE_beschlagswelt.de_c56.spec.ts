import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_beschlagswelt.de_c56', ['https://beschlagswelt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
