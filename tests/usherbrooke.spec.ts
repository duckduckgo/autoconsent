import generateCMPTests from '../playwright/runner';

generateCMPTests('usherbrooke', ['https://www.usherbrooke.ca/'], {
    testOptIn: false,
    testSelfTest: false,
});
