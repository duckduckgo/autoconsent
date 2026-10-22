import generateCMPTests from '../playwright/runner';

generateCMPTests('tlc-direct', ['https://www.tlc-direct.co.uk/'], {
    testOptIn: false,
});
