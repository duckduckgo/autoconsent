import generateCMPTests from '../playwright/runner';

generateCMPTests('roll20', ['https://roll20.net/', 'https://marketplace.roll20.net/', 'https://roll20.net/compendium/dnd5e']);
