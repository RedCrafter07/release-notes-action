import * as actions from '@actions/core';
import * as github from '@actions/github';

async function run() {
	try {
		actions.info('Fetching release notes...');

		const token = actions.getInput('token', { required: true });
		const tagName = actions.getInput('tag-name', { required: true });
		if (!token) throw new Error('Input "token" is required');
		if (!tagName) throw new Error('Input "tag-name" is required');

		const octokit = github.getOctokit(token);

		const { owner, repo } = github.context.repo;

		const releaseNotes = await octokit.request(
			'POST /repos/{owner}/{repo}/releases',
			{
				owner,
				repo,
				tag_name: tagName,
			},
		);

		const notes = releaseNotes.data.body;

		actions.setOutput('release-notes', notes);
	} catch (error) {
		actions.setFailed(error.message);
	}
}

run();
