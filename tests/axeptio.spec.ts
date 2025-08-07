import generateCMPTests from '../playwright/runner';

generateCMPTests('axeptio', [
    'https://www.welcometothejungle.com/',
    'https://frichti.co/landing?redirectTo=/',
    'https://www.dorcel.com/',
    'https://mistral.ai/news/le-chat-dives-deep',
]);
