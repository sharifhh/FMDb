# FMDb React Native App

This is a project created using `npx react-native init --template react-native-template-typescript`

## Run the app

To start the app you need to clone it and run the following
For iOS:
```
yarn install
npx pod-install
yarn ios
```

For Android:
```
yarn install
yarn android
```

## Used Libraries

1. apisauce: Axios + standardized errors + request/response transforms.
1. react-native-elements: They have a nice UI kit which is easy to use.
1. redux: to store the data in a general store.
1. redux-persist: to persist the redux data in the storage.
1. react-native-mmkv: a much better and faster storage utility instead of AsyncStorage.
1. react-navigation: for navigation.
