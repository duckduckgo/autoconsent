import generateCMPTests from '../playwright/runner';

generateCMPTests('axeptio', [
    'https://www.welcometothejungle.com/',
    'https://www.dorcel.com/',
    'https://mistral.ai/news/le-chat-dives-deep',
    'https://mistral.ai/pricing',
    'https://lahalledesgourmets.com/pages/angelina',
    'https://www.narbonneaccessoires.fr/fr-fr/',
]);
