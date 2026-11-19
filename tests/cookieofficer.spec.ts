import generateCMPTests from '../playwright/runner';

// banner with a "Reject" button on the first layer
generateCMPTests('cookieofficer', ['https://demo.cookieofficer.com/', 'https://placowkijutra.pl/', 'https://pipelinedesigner.pl/']);

// banner without "Reject": opt-out goes through the settings screen and saves with optional categories off
generateCMPTests('cookieofficer', ['https://smartanimal.pl/', 'https://growthmeetup.com/', 'https://adsetterka.pl/']);
