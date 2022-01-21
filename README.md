# Stripped, simple, React Native Bare template.

## About
Using [react-native-template-typescript][1] as the starting point, I've removed files that are useless for many and added minor changes. I've wanted to make this as bare as possible, adding some of my influence but not enough that it'd be a pain to change them.

❗❗ Read the instructions at the bottom! This is not a complete template!

### Included + added
- TypeScript
- ESLint
- babel-plugin-module-resolver (when importing, instead of `../../..`, it's now `src/...`)
- `@babel/preset-typescript`

### Uninstalled packages
- jest
- react-test-renderer
- babel-jest
- `@react-native-community/eslint-config`
- `@types/react-test-renderer`
- `@types/jest`

### File/Folder removals, renames and additions
- Removed: `/__tests__/`, `/android/`, `/ios/`, `/.buckconfig`, `/.editorconfig`, `/.prettierrc.js`, `/.gitattributes`, `/.watchmanconfig`, `/yarn.lock`.
- Changed: `/.eslintrc.js/` -> `/.eslintrc`.
- Added: `/.eslintignore`, `/src/` and its sub-folders.

### File changes.
- `/.eslintrc`: Added personal preferences and removed `extends`. I suggest taking a look at this prior to development.
- `/package.json`: Removed 'test' script, removed `resolutions` and `jest` keys.
- `/tsconfig.json`: Replaced with my own `tsconfig` file. I suggest taking a look at this prior to development.
- `/babel.config.js`: Added [jsx transform][2] (no need to import 'React' every file 🙏🙏🙏), module resolver previously mentioned and `@babel/preset-typescript`.

### How to use the template
1. Clone this repo. I will reference this template moving forward as `Template`.
2. Remove all `.keep` files. Needed to make them to show file `/src/` file structure.
3. Create another project with the desired name using the command: `npx react-native init PROJECT_NAME_HERE --template react-native-template-typescript`. I will reference this project moving forward was `TempProject`.
4. Copy `TempProject`'s `/android/` and `/ios/` folders -> `Template`.
5. Copy `TempProject`'s `/app.json` -> `Template`.
6. Replace `Template`'s `name` value in `/package.json` with `TempProject`'s.
7. Command `yarn` or `yarn install`.
8. Command `yarn upgrade`.
9. Restart IDE.

### 🎉 DONE!

<hr />

If script `ubuild` doesn't work, `/android/app/src/main/assets` directory might not exist, causing the problem.

[1]: https://github.com/react-native-community/react-native-template-typescript
[2]: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html