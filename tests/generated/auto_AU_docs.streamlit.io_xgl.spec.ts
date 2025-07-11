import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_docs.streamlit.io_xgl', ['https://docs.streamlit.io/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
