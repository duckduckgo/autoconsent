import generateCMPTests from '../playwright/runner';

generateCMPTests('anthropic', [
    'https://claude.ai/login',
    'https://console.anthropic.com/login/',
    'https://claude.com/',
    'https://www.anthropic.com/',
]);
