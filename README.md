# 🗓️ bikramsambat-datepicker

A beautiful, accessible, and feature-rich Nepali (Bikram Sambat) date picker component for React. Supports dual language (English/Nepali), full Bikram Sambat calendar, and easy integration.

## ✨ Features

- 🎯 **CSS Scoped**: Component styles are scoped to prevent conflicts with global CSS
- 🌍 **Dual Language**: Support for both English and Nepali display
- 📅 **Full BS Calendar**: Complete Bikram Sambat calendar implementation
- 🎨 **Customizable**: Easy styling and theming options
- ♿ **Accessible**: Built with accessibility in mind
- 📱 **Responsive**: Works on all screen sizes

## 📦 Installation

```bash
npm install bikramsambat-datepicker
# or
yarn add bikramsambat-datepicker
# or
pnpm add bikramsambat-datepicker
```

## 🚀 Usage

### Basic Example

```tsx
import React, { useState } from "react";
import NepaliDatePicker from "bikramsambat-datepicker";

function App() {
  const [selectedDate, setSelectedDate] = useState<string>("");

  return (
    <NepaliDatePicker
      value={selectedDate}
      onChange={setSelectedDate}
      placeholder="Select a date"
      locale="ne" // or "en"
    />
  );
}
```

## 🛠️ Props

| Prop              | Type                     | Default         | Description                        |
| ----------------- | ------------------------ | --------------- | ---------------------------------- |
| `value`           | `string \| undefined`    | `undefined`     | Selected date in `YYYY-MM-DD` (BS) |
| `onChange`        | `(date: string) => void` | `undefined`     | Callback when date is selected     |
| `locale`          | `'en' \| 'ne'`           | `'ne'`          | Display language                   |
| `placeholder`     | `string`                 | `'Pick a date'` | Placeholder text                   |
| `disabled`        | `boolean`                | `false`         | Disable the date picker            |
| `disableFuture`   | `boolean`                | `false`         | Prevent selecting future dates     |
| `showTodayButton` | `boolean`                | `false`         | Show a "Today" button              |
| `className`       | `string`                 | `undefined`     | Additional CSS classes             |

## 🎯 More Examples

**English Locale:**

```tsx
<NepaliDatePicker
  value={date}
  onChange={setDate}
  locale="en"
  placeholder="Select date"
/>
```

**Disable Future Dates:**

```tsx
<NepaliDatePicker
  value={date}
  onChange={setDate}
  disableFuture
  showTodayButton
/>
```

**Custom Styling:**

```tsx
<NepaliDatePicker
  className="w-full max-w-sm mx-auto"
  value={date}
  onChange={setDate}
/>
```

**Form Integration (react-hook-form):**

```tsx
import { useForm } from "react-hook-form";
function FormExample() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const dateValue = watch("nepaliDate");
  return (
    <form onSubmit={handleSubmit(console.log)}>
      <NepaliDatePicker
        value={dateValue}
        onChange={(date) => setValue("nepaliDate", date)}
        placeholder="जन्म मिति छान्नुहोस्"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 🎨 Styling & CSS Scoping

The component automatically scopes its styles to prevent conflicts with global CSS. All component styles are contained within the `.bikramsambat-datepicker` class.

### Custom Theming

You can override the component's CSS variables:

```css
.bikramsambat-datepicker {
  --background: #ffffff;
  --foreground: #0f172a;
  --primary: #2563eb;
  --primary-foreground: #ffffff;
  --border: #e2e8f0;
  --radius: 0.5rem;
}
```

### Dark Mode

The component automatically supports dark mode when the parent has the `.dark` class:

```css
.dark .bikramsambat-datepicker {
  --background: #0f172a;
  --foreground: #ffffff;
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
}
```

### Special Day Styling

- **Saturday**: `.bikramsambat-datepicker .saturday { color: #ef4444; }`
- **Today**: `.bikramsambat-datepicker .today { background: #f1f5f9; font-weight: 600; }`

## 🔧 TypeScript

Type definitions are included:

```ts
interface NepaliDatePickerProps {
  value?: string;
  onChange?: (date: string) => void;
  locale?: "en" | "ne";
  placeholder?: string;
  disabled?: boolean;
  disableFuture?: boolean;
  showTodayButton?: boolean;
  className?: string;
}
```

## 📝 Notes

- Dates are in Bikram Sambat (`YYYY-MM-DD` format).
- The component is fully controlled: pass `value` and `onChange`.
- Supports both English and Nepali display.
- CSS is automatically scoped to prevent global style conflicts.
- Works with any CSS framework or global styles.

## 🧑‍💻 Contributing

PRs and issues welcome!

## 📄 License

MIT

## 📅 Calendar Data

The component includes complete Bikram Sambat calendar data from 2000 BS to 2099 BS with accurate month lengths and day calculations.

### Supported Years

- **Range**: 2000 BS - 2099 BS
- **Equivalent AD**: ~1943 - ~2042

### Month Names

- **Nepali**: बैशाख, जेठ, असार, सावन, भदौ, असोज, कार्तिक, मंसिर, पौष, माघ, फागुन, चैत
- **English**: Baishakh, Jestha, Ashadh, Shrawan, Bhadra, Ashwin, Kartik, Mangsir, Poush, Magh, Falgun, Chaitra

## 🛠️ Dependencies

### Required Dependencies

```json
{
  "bikram-sambat-js": "^2.0.0",
  "nepali-number": "^1.0.0",
  "lucide-react": "^0.263.1"
}
```

### Peer Dependencies

```json
{
  "react": ">=16.8.0",
  "react-dom": ">=16.8.0"
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Clone the repository

```bash
git clone https://github.com/gaurab-hacked/bikramsambat-datepicker
cd bikramsambat-datepicker
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Run tests

```bash
npm test
```

### Build

```bash
npm run build
```

## 📄 License

MIT © [Gaurab sunar](https://github.com/gaurab-hacked)

## 🐛 Issues & Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/gaurab-hacked/bikramsambat-datepicker/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/gaurab-hacked/bikramsambat-datepicker/discussions)
- 📧 **Email**: gaurabsunar0001@gmail.com

## 🙏 Acknowledgments

- [bikram-sambat-js](https://github.com/opensource-nepal/bikram-sambat-js) for BS/AD conversion
- [nepali-number](https://github.com/leapfrogtechnology/nepali-number) for number localization
- [shadcn/ui](https://ui.shadcn.com/) for UI components
- [Lucide](https://lucide.dev/) for beautiful icons

## 📊 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes.

---

**Made with ❤️ for the Nepali developer community**

```

```
