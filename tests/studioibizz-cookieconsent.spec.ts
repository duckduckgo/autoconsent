import generateCMPTests from '../playwright/runner';

// variant with a deny button
generateCMPTests('studioibizz-cookieconsent', ['https://www.nettorama.nl/', 'https://www.ggzwnb.nl/'], {});

// variant with only accept and a link to the preferences page
generateCMPTests('studioibizz-cookieconsent', ['https://www.bravis.nl/', 'https://www.solidfloor.com/', 'https://www.keukendepot.nl/'], {});
