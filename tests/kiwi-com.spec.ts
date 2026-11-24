import generateCMPTests from '../playwright/runner';

// consent cookie is written only after hydration, which can be later than the self-test
generateCMPTests('kiwi.com', ['https://www.kiwi.com/'], {
    testSelfTest: false,
});
