# HalfPoint-Mapping 

## Introduction

This mobile app will allow users to input two addresses and calculate the meeting halfway point. It will display directions, ETA, and a list of restaurants and entertainment they could use as a meet-up spot.

## Team

Team members:

- Thomas Latawiec
- Jayden Leuciuc
- Chase Woodfill
- Mikayla McCormack

## Up and running with development

### Expo Go (Non-Development Build - No Compiling Code)

- Make sure you have xcode and a simulator installed. [How to launch a react native app.](https://medium.com/@rihem.larbi/how-to-launch-a-react-native-app-using-xcode-simulator-in-macos-b1f8086869c1)
- Use node 20, check with node -v.
- Make sure you have node installed.q
- Run `yarn install` in root directory.
- Run `yarn start` in root directory.
- App should now start in simulator.

### IOS Build

> This is used when native modules are installed.

- Make sure the above steps are followed
- Run `cd ios && pod install` to install the required IOS dependencies.
- Run `yarn ios` instead of `yarn start` to start a development build.
