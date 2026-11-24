import generateCMPTests from '../playwright/runner';

// The sites are not available in the UK
generateCMPTests('xgroovy', ['https://xgroovy.com/', 'https://anysex.com/'], {
    skipRegions: ['GB'],
});
