import generateCMPTests from '../playwright/runner';

generateCMPTests('axeptio', [
    'https://docs.mistral.ai/',
    'https://www.prestashop-project.org/',
    'https://www.spareka.fr/',
    'https://www.narbonneaccessoires.fr/fr-fr/',
]);

// Step-based widget: "Close" rejects, "Accept all" only advances to the next step
generateCMPTests('axeptio', ['https://mistral.ai/pricing', 'https://mistral.ai/news/le-chat-dives-deep'], {
    testOptIn: false,
});

// Widget opens after a configured delay
generateCMPTests('axeptio', ['https://www.memo-de-vie.org/qui-sommes-nous', 'https://www.lyoncapitale.fr/']);

// Newer widget layout (ax-widget-relifted): "Continuer sans accepter" is an unlabelled header button
generateCMPTests('axeptio', ['https://www.savelys.fr/'], {
    onlyRegions: ['FR'],
});
