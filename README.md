# TypeScript Application Blueprint

## Prerequesites

You will need the following installed on your computer:

- [Git](https://git-scm.com/)
- [Yarn](https://yarnpkg.com/)

## Installing

- Clone this repository
  - via HTTPS `$ git clone https://github.com/zulaica/typescript-application-blueprint.git` or
  - via SSH `$ git@github.com:zulaica/typescript-application-blueprint.git`
- `$ cd typescript-application-blueprint`
- `$ yarn`

## Scripts

- `$ yarn build` to build a local copy of the application.
- `$ yarn watch` to monitor and build when changes are saved.
- `$ yarn serve` to serve the application locally
  - Visit http://localhost:10001 to view the application once the server is running.

## Contributing

### Git Commit Messages<sup id='anchor1'>[[1]](#footnote1)</sup>

- Commit early, commit often™
- Commits should be concise enough to describe in one line
- Limit commit messages to 80 characters
- Use the present tense (e.g. "Do the thing" not "Did the thing")
- Use the imperative mood (e.g. "Do the thing" not "Does the thing")
- Start the commit message with the appropriate emoji pair (followed by two
  spaces)
- Use actual emoji and not Github's emoji short-codes

| Emoji Pair    | Usage                    | Suggested Text Shortcut |
| ------------- | ------------------------ | ----------------------- |
| Code          |                          |
| 🆕 🛠          | adding new code          | `::codenew`             |
| 🔄 🛠          | refactoring code         | `::codeedit`            |
| 💨 🐛         | fixing a bug             | `::bugfix`              |
| Dependencies  |                          |
| 🆕 📦         | adding a dependency      | `::pkgnew`              |
| ⬆️ 📦         | upgrading a dependency   | `::pkgup`               |
| ⬇️ 📦         | downgrading a dependency | `::pkgdown`             |
| ⏏️ 📦         | remove a dependency      | `::pkgout`              |
| Documentation |                          |
| 🆕 📝         | adding documentation     | `::docsnew`             |
| 🔄 📝         | editing documentation    | `::docsedit`            |
| Image Assets  |                          |
| 🆕 🎨         | adding image assets      | `::artnew`              |
| 🔄 🎨         | updating image assets    | `::artedit`             |
| ⏏️ 🎨         | removing image assets    | `::artout`              |
| Settings      |                          |
| 🆕 ⚙️         | adding settings          | `::prefsnew`            |
| 🔄 ⚙️         | updating settings        | `::prefsedit`           |

## License

TBD

---

<sup id='footnote1'>[1]</sup> Borrowed heavily from [Atom's contribution documentation](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages). [↩️](#anchor1)
