/* eslint-disable camelcase */
const Asana = require('asana');

const ASANA_ACCESS_TOKEN = process.env.ASANA_ACCESS_TOKEN;
const RELEASE_TASK_URL = process.env.RELEASE_TASK_URL || '';
const version = process.env.TAG;

const templateTaskGid = '1206774921409831';
const projectExtractorRegex = /\[\[project_gids=(.*)]]/;

// Parse task GID out of URL
const regex = /^https:\/\/app.asana.com\/(\d+)\/((\d+)\/)?(project\/)?(?<project>\d+)(\/task)?\/(?<task>\d+).*?/;
const match = regex.exec(RELEASE_TASK_URL);
const releaseTaskGid = match?.groups?.task;

/**
 * @typedef {{taskGid: string, taskUrl: string, displayName: string}} platformData
 *
 * @typedef {{
 *   android: platformData,
 *   windows: platformData,
 *   apple: platformData,
 *   extension: platformData
 * }} AsanaOutput
 */

/** @type {AsanaOutput} */
const platforms = {
    android: {
        displayName: 'Android',
        taskGid: '',
        taskUrl: '',
    },
    windows: {
        displayName: 'Windows',
        taskGid: '',
        taskUrl: '',
    },
    apple: {
        displayName: 'Apple',
        taskGid: '',
        taskUrl: '',
    },
    extension: {
        displayName: 'Extension',
        taskGid: '',
        taskUrl: '',
    },
};

/** @type {Record<keyof typeof platforms, boolean>} */
const selectedPlatforms = {
    android: process.env.PLATFORM_ANDROID === 'true',
    apple: process.env.PLATFORM_APPLE === 'true',
    windows: process.env.PLATFORM_WINDOWS === 'true',
    extension: process.env.PLATFORM_EXTENSION === 'true',
};

const setupAsana = () => {
    return Asana.Client.create({
        defaultHeaders: {
            'Asana-Enable': 'new_project_templates,new_user_task_lists,new_goal_memberships',
        },
    }).useAccessToken(ASANA_ACCESS_TOKEN);
};

async function main() {
    const asana = setupAsana();
    const { data: templateSubTasks } = await asana.tasks.getSubtasksForTask(templateTaskGid, {
        opt_fields: 'name,html_notes,permalink_url',
    });

    const filteredSubTasks = templateSubTasks.filter(({ name }) => {
        for (const [key, platformObj] of Object.entries(platforms)) {
            if (name.includes(platformObj.displayName)) {
                return selectedPlatforms[key];
            }
        }
        // If the subtask doesn't match any known platform, include it by default
        return true;
    });
    console.error('Selected platforms:', selectedPlatforms);
    console.error(`Creating ${filteredSubTasks.length} of ${templateSubTasks.length} subtasks`);

    // Creating subtasks...
    const subtasks = await Promise.all(
        filteredSubTasks.map(
            // @ts-ignore
            (subtask) => asana.tasks.createSubtaskForTask(
                releaseTaskGid,
                {
                    name: subtask.name,
                    html_notes: subtask.html_notes,
                    opt_fields: 'name,html_notes,permalink_url',
                }
            )
        )
    );
    console.error('subtasks:', subtasks);

    // Get html_notes from the release task
    const { html_notes: releaseTaskNotes } = await asana.tasks.getTask(releaseTaskGid, { opt_fields: 'html_notes' });

    // Updating subtasks and moving to appropriate projects...
    for (const subtask of subtasks) {
        const { gid, name, html_notes, permalink_url } = subtask.data;

        const platform = Object.keys(platforms).find((key) => name.includes(platforms[key].displayName));
        if (!platform) {
            continue;
        }

        // @ts-ignore
        platforms[platform].taskGid = gid;
        // @ts-ignore
        platforms[platform].taskUrl = permalink_url;

        const newName = name.replace('[[version]]', version);
        const extractedProjects = html_notes.match(projectExtractorRegex)?.[1];

        const subtaskNotes = html_notes.replace(projectExtractorRegex, '').replace('[[notes]]', releaseTaskNotes);

        console.error(`updating task ${gid} with name ${newName} and notes ${subtaskNotes}`);
        await asana.tasks.updateTask(gid, { name: newName, html_notes: subtaskNotes });

        if (extractedProjects) {
            console.error(`adding projects ${extractedProjects} to task ${gid}`);
            for (const projectGidAndSection of extractedProjects.split(',')) {
                const [projectGid, sectionGid] = projectGidAndSection.split(':');
                await asana.tasks.addProjectForTask(gid, { project: projectGid, section: sectionGid });
            }
        }
    }
    const jsonString = JSON.stringify(platforms);
    return { stdout: jsonString };
}

main()
    .then((result) => {
        // this log is for visibility in Github web interface
        console.error('stage result:', result.stdout);
        // The log is needed to read the value from the bash context
        console.log(result.stdout);
    })
    .catch((e) => {
        console.error('Failed to create asana tasks:');
        // The Asana API returns errors in e.value.errors. If that's undefined log whatever else we got
        console.error(e.value?.errors || e);
        process.exit(1);
    });
