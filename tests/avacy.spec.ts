import generateCMPTests from '../playwright/runner';

// Newer banner markup with a "continue without accepting" button
generateCMPTests('avacy', ['https://www.raiplay.it/', 'https://www.rainews.it/']);

// Legacy OIL-based markup, with and without a "reject all" button
generateCMPTests('avacy', ['https://www.hotelluna.it/', 'https://www.expert.ai/', 'https://www.carpisa.it/it-it']);
