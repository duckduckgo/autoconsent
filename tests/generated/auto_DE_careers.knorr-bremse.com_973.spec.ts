import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_careers.knorr-bremse.com_973', ['https://careers.knorr-bremse.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
