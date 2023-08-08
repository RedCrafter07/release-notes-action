# release-notes-action

Welcome to the release notes action!

## What does this do?

This is a GitHub Action you can use in your workflow to generate release notes like GitHub does in the release publish panel. It will fetch the API for the release and return the markdown formatted release notes. This could be used to automate releases or simply generate the release notes for you.

## Getting started

To get started, just add the following to your action workflow:

```yaml
# ...
jobs:
  # ...
  - name: Generate Release Notes
    id: notes
    uses: RedCrafter07/release-notes-action@v1
    with:
      tag-name: ${{ github.event.inputs.tag-name }}
      token: ${{ secrets.GITHUB_TOKEN }}
  - name: Do something
    run: echo ${{ steps.notes.outputs.release-notes }}
```

## Inputs

| Name       | Required | Description                                 | Default |
| ---------- | -------- | ------------------------------------------- | ------- |
| `tag-name` | Yes      | The tag name of the release.                | /       |
| `token`    | Yes      | The GitHub token to use for authentication. | /       |
| `branch`   | No       | The branch to use for the release notes.    | `main`  |

## Outputs

| Name            | Description                        |
| --------------- | ---------------------------------- |
| `release-notes` | The release notes for the release. |
