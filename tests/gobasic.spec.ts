import generateCMPTests from '../playwright/runner';

generateCMPTests('gobasic', ['https://www.su.dk/', 'https://www.vallensbaek.dk/', 'https://www.finanstilsynet.dk/']);
