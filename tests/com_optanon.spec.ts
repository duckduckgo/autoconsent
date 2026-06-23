import generateCMPTests from '../playwright/runner';

generateCMPTests('com_optanon', ['https://www.allianzdirect.de/']);

// This legacy Optanon setup disables the parent categories and dismisses the
// popup, but does not reliably answer the post-dismissal self-test message.
generateCMPTests('com_optanon', ['https://www.thenude.com/'], {
    testSelfTest: false,
});
