import generateCMPTests from '../playwright/runner';

generateCMPTests('homedepot', ['https://www.homedepot.com/'], {
    testOptIn: false,
});
