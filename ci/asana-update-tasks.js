const Asana = require('asana');
const { getLink } = require('./release-utils.js');

const ASANA_ACCESS_TOKEN = process.env.ASANA_ACCESS_TOKEN;
const prUrls = {
    android: process.env.ANDROID_PR_URL,
    apple: process.env.APPLE_PR_URL,
    windows: process.env.WINDOWS_PR_URL,
    extension: process.env.EXTENSION_PR_URL,
};
const asanaOutputRaw = process.env.ASANA_OUTPUT;

let asana;

const setupAsana = () => {
    asana = Asana.Client.create({
        defaultHeaders: {
            'Asana-Enable': 'new_project_templates,new_user_task_lists,new_goal_memberships',
        },
    }).useAccessToken(ASANA_ACCESS_TOKEN);
};

const asanaUpdateTasks = async () => {
    let asanaOutput;
    try {
        asanaOutput = JSON.parse(asanaOutputRaw || '');
    } catch (e) {
        throw new Error('Unable to parse Asana output JSON');
    }

    setupAsana();

    const platformEntries = Object.entries(asanaOutput);
    for (const [platformName, platformObj] of platformEntries) {
        if (!platformObj.taskGid) {
            console.error(`Skipping ${platformName} task update - no task GID`);
            continue;
        }

        if (prUrls[platformName]) {
            const { html_notes: notes } = await asana.tasks.getTask(platformObj.taskGid, { opt_fields: 'html_notes' });
            const prLink = getLink(prUrls[platformName], `${platformObj.displayName} PR`);
            const updatedNotes = notes.replace('[[pr_url]]', prLink);
            await asana.tasks.updateTask(platformObj.taskGid, { html_notes: updatedNotes });
        } else {
            console.error(`Skipping ${platformName} PR URL update - no PR URL`);
        }

        // Notify the Apple DRIs that the Apple PR will be updated once the extension PR is merged
        if (platformName === 'apple' && process.env.APPLE_EMBEDDED === 'true') {
            const extensionPrUrl = prUrls.extension;
            let note = `This PR is in DRAFT. The embedded ZIP will be added once the extension PR is merged: ${extensionPrUrl}`;
            if (!extensionPrUrl) {
                note = 'Extension PR URL is not found. CPM DRI, please check the PR and mark it as ready.';
            }
            await asana.stories.createStoryForTask(platformObj.taskGid, { text: note });
        }
    }
};

asanaUpdateTasks().catch((e) => {
    // The Asana API returns errors in e.value.errors. If that's undefined log whatever else we got
    console.error(e.value?.errors || e);
    process.exit(1);
});
