# 🎶 Lyrics Display

A **React Native** component that dynamically displays lyrics with smooth animations.

## 🚀 Features

✅ **Auto-scrolls lyrics** sentence by sentence  
✅ **Customizable speed** for controlling the pace  
✅ **Smooth animations** powered by `react-native-reanimated`  
✅ **Fully customizable** via styles

---

## 📦 Installation

### 1️⃣ Install the package:

#### Using npm:

```sh
npm install lyrics-display
```

````

#### Using yarn:

```sh
yarn add lyrics-display
```

### 2️⃣ Install `react-native-reanimated` (if not already installed):

```sh
npm install react-native-reanimated
```

🔹 **For React Native 0.65+**, also enable Reanimated in `babel.config.js`:

```js
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: ["react-native-reanimated/plugin"],
};
```

---

## 🔧 Usage

### **Basic Example**

```tsx
import React from "react";
import { View } from "react-native";
import LyricsDisplay from "lyrics-display";

const lyricsText = `
  Hello, it's me.
  I was wondering if after all these years you'd like to meet.
  To go over everything.
  They say that time's supposed to heal ya, but I ain't done much healing.
`;

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <LyricsDisplay lyrics={lyricsText} />
    </View>
  );
};

export default App;
```

---

## 🎨 Customization

### **Adjusting Speed**

You can control the speed of scrolling by passing the `speed` prop (default: `300`).

```tsx
<LyricsDisplay lyrics={lyricsText} speed={500} />
```

- **Higher values** make the lyrics appear **slower**.
- **Lower values** make them scroll **faster**.

---

### **Custom Styles**

Pass a `style` prop to customize the component’s container.

```tsx
<LyricsDisplay lyrics={lyricsText} style={{ backgroundColor: "black" }} />
```

---

## 📌 Props Reference

| Prop     | Type     | Default      | Description              |
| -------- | -------- | ------------ | ------------------------ |
| `lyrics` | `string` | **Required** | The lyrics to display    |
| `speed`  | `number` | `300`        | Controls scrolling speed |
| `style`  | `object` | `{}`         | Custom styles            |

---

## ⚡ Troubleshooting

### **1️⃣ Animations not working?**

- Ensure `react-native-reanimated` is installed.
- Add `react-native-reanimated/plugin` to `babel.config.js`.

### **2️⃣ Auto-scrolling not working?**

- Check if your lyrics text contains punctuation (`.`, `?`, `!`) for sentence splitting.

---

## 📜 License

This package is **open-source** under the [MIT License](LICENSE).

🚀 **Happy Coding!**

```

---

### **How This README Helps:**
✅ **Clear installation steps** for new users
✅ **Code examples** for easy understanding
✅ **Customization options** for flexibility
✅ **Troubleshooting guide** for common issues

Let me know if you need any tweaks! 🚀
```

```

```
````
