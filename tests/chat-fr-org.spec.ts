import generateCMPTests from '../playwright/runner';

generateCMPTests('chat-fr-org', ['https://www.chat-fr.org/'], {
    skipRegions: ['US'],
});
