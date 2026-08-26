import generateCMPTests from '../playwright/runner';

generateCMPTests('bankmillennium.pl', ['https://www.bankmillennium.pl/'], {
    testOptIn: false,
});
