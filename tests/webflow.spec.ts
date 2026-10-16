import generateCMPTests from '../playwright/runner';

generateCMPTests('webflow', [
    'https://www.ctgt.ai/research/distillation-censorship-transfer',
    'https://www.dock.io/',
    'https://www.talkabroad.com/',
    'https://www.pocoyo.com/',
    'https://www.storypark.com/',
]);

// informational mode with no deny button in the banner
generateCMPTests('webflow', ['https://www.bankaust.com.au/'], {
    testOptIn: false,
});

generateCMPTests('webflow', ['https://www.ticketspice.com/', 'https://rawgraphs.io/'], {
    testOptIn: false,
    testSelfTest: false,
});
