import generateCMPTests from '../playwright/runner';

// the EU variant reloads the page after opt-out, so no self-test result is sent
generateCMPTests('realme', ['https://www.realme.com/global/', 'https://www.realme.com/fr/', 'https://www.realme.com/uk/'], {
    testSelfTest: false,
});
