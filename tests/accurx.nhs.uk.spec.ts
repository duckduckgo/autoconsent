import generateCMPTests from '../playwright/runner';

generateCMPTests('accurx.nhs.uk', ['https://accurx.nhs.uk/'], {
    testSelfTest: true,
});
