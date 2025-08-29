# React Navigation Learning Project

A comprehensive React Native application built to explore and demonstrate various navigation patterns using React Navigation v6. This project serves as a practical learning resource for understanding different navigation types and their implementation in React Native.

## 📱 Project Overview

This application showcases a Twitter-like interface with multiple navigation patterns including:

- Stack Navigation
- Tab Navigation
- Drawer Navigation
- Material Top Tab Navigation

## 🚀 Features

- **Multi-level Navigation Structure**: Implements nested navigators for complex navigation flows
- **Dark/Light Theme Support**: Automatic theme switching based on system preferences
- **Tweet Feed Interface**: Interactive feed with tweet details modal presentation
- **Custom Tab Icons**: Beautiful icons using Ionicons library
- **Gesture Support**: Fully integrated with React Native Gesture Handler
- **Cross-platform Compatibility**: Works on iOS, Android, and Web

## 🛠️ Tech Stack

- **React Native** (0.73.6) - Mobile app framework
- **Expo** (~50.0.14) - Development platform
- **React Navigation v6** - Navigation library
  - Bottom Tabs Navigator
  - Drawer Navigator
  - Native Stack Navigator
  - Material Top Tabs Navigator
- **Firebase** (^10.9.0) - Backend services
- **React Native Reanimated** - Smooth animations
- **Expo Vector Icons** - Icon library

## 📁 Project Structure

```
React-Navigation1/
├── App.js                     # Main app component
├── Navigation.js              # Navigation configuration
├── package.json              # Dependencies and scripts
├── assets/                   # Images and icons
│   ├── adaptive-icon.png
│   ├── beto.jpeg
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
├── components/               # Reusable components
│   ├── Tweet.js             # Tweet item component
│   └── TweetContent.js      # Tweet content display
├── data/                    # Mock data
│   └── tweets.js           # Sample tweet data
└── screens/                # Screen components
    ├── drawerScreens/
    │   └── Payments.js     # Drawer screen example
    ├── homeStack/
    │   └── TweetDetailScreen.js # Tweet detail modal
    └── tabScreens/
        ├── Feed.js         # Main feed screen
        ├── Notification.js # Notifications screen
        └── Settings.js     # Settings screen
```

## 🏗️ Navigation Architecture

The app implements a hierarchical navigation structure:

```
NavigationContainer
└── DrawerNavigator
    └── HomeStackNavigator
        └── TabNavigator (Bottom Tabs)
            ├── Feed (Material Top Tabs)
            │   ├── Main
            │   ├── Following
            │   └── 👀
            ├── Notifications
            └── Settings
        └── TweetDetailScreen (Modal)
```

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Prabhat2912/React-Navigation1.git
   cd React-Navigation1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on specific platforms**

   ```bash
   # Android
   npm run android

   # iOS
   npm run ios

   # Web
   npm run web
   ```

## 📱 Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser

## 🎯 Learning Objectives

This project demonstrates:

1. **Navigation Patterns**

   - Implementing nested navigators
   - Passing data between screens
   - Modal presentations
   - Custom navigation headers

2. **User Interface**

   - Creating responsive layouts
   - Implementing custom tab bars
   - Theme switching capabilities
   - Icon integration

3. **State Management**
   - Navigation state handling
   - Screen-to-screen data flow
   - User interaction patterns

## 🔧 Key Components

### Navigation.js

The main navigation configuration file that sets up all navigator types and their relationships.

### Tweet Components

- `Tweet.js` - Handles tweet item interactions and navigation
- `TweetContent.js` - Displays tweet content and styling

### Screen Components

- **Feed**: Main content feed with top tab navigation
- **Notifications**: User notifications interface
- **Settings**: App configuration options
- **TweetDetailScreen**: Detailed view of selected tweets
- **Payments**: Example drawer screen

## 🎨 UI/UX Features

- **Consistent Design Language**: Twitter-inspired interface
- **Smooth Animations**: Powered by React Native Reanimated
- **Intuitive Navigation**: Easy-to-use navigation patterns
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Screen reader compatible

## 🚀 Future Enhancements

Potential improvements and learning extensions:

- Add authentication flow
- Implement Redux for state management
- Add pull-to-refresh functionality
- Integrate real API endpoints
- Add push notifications
- Implement deep linking

## 🤝 Contributing

This is a learning project, but contributions are welcome! Feel free to:

- Report bugs
- Suggest improvements
- Add new navigation patterns
- Enhance UI/UX

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React Navigation team for excellent documentation
- Expo team for the amazing development platform
- React Native community for continuous support

---

**Note**: This project was created as part of learning React Native and React Navigation. It serves as a practical reference for implementing various navigation patterns in mobile applications.
