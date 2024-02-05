# quiz

Welcome to the Quiz App repository! This project is built using React Native and aims to provide a seamless experience for creating and taking quizzes on mobile devices.

## Scripts

Here's a detailed explanation of each script defined in the `package.json` file:

### `pods`

- This script is used to install iOS dependencies using CocoaPods.
- It first installs Ruby dependencies using `bundle install`.
- Then it installs iOS dependencies using `bundle exec pod install --project-directory=ios/ --repo-update`.

### `android`

- This script is used to run the React Native app on an Android device or emulator.
- It runs the command `react-native run-android`.

### `ios`

- This script is used to run the React Native app on an iOS simulator or device.
- It runs the command `react-native run-ios`.

### `format`

- This script is used to format code using Prettier.
- It runs the command `prettier --write .`.

### `lint`

- This script is used to lint code using ESLint.
- It runs the command `eslint .`.

### `tsc`

- This script is used to type-check TypeScript files without emitting JavaScript files.
- It runs the command `tsc --noEmit`.

### `kill-port`

- This script is used to kill the process running on port 8081.
- It uses `lsof` to find the process ID and then kills it using `xargs kill`.

### `watchman-reset`

- This script is used to reset Watchman's state.
- It runs the command `watchman watch-del-all`.

### `adb-reverse`

- This script is used to reverse port forwarding for Android development.
- It runs the command `adb reverse tcp:8081 tcp:8081`.

### `start:packager`

- This script is used to start the Metro bundler.
- It runs the command `react-native start --reset-cache`.

### `start`

- This script is used to start the development environment.
- It first kills the port using `kill-port`, resets Watchman using `watchman-reset`, and reverses ADB using `adb-reverse`.
- Then it starts the Metro bundler using `start:packager`.

### `test`

- This script is used to run tests using Jest.
- It runs the command `jest`.

### `storybook:generate`

- This script is used to generate stories for Storybook.
- It runs the command `sb-rn-get-stories`.

### `storybook:watch`

- This script is used to watch for changes in Storybook stories.
- It runs the command `sb-rn-watcher`.

## Dependencies and DevDependencies

The project has various dependencies and devDependencies listed in the `package.json` file. These include libraries for navigation (`@react-navigation/native`), state management (`zustand`), and testing (`jest`). Please refer to the `package.json` file for the complete list.

## TODOs

For a list of upcoming features and improvements, please check [TODOs.md](docs/TODOs.md).

## Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow the guidelines in the [CONTRIBUTING.md](docs/CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For any questions or issues regarding the Quiz App, please open an issue on GitHub. We're here to help!
