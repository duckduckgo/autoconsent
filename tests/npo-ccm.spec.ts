import generateCMPTests from '../playwright/runner';

generateCMPTests('npo-ccm', ['https://nos.nl/', 'https://www.powned.tv/'], {
    testSelfTest: false,
});
