````markdown
# 🗓️ Nepali DatePicker

A beautiful and feature-rich Nepali (Bikram Sambat) date picker component for React applications. Supports dual language display (English/Nepali) with full Bikram Sambat calendar functionality.

## 📦 Installation

```bash
npm install bikramsambat-datepicker
```
````

```bash
yarn add bikramsambat-datepicker
```

```bash
pnpm add bikramsambat-datepicker
```

## 🚀 Quick Start

```tsx
import React, { useState } from "react";
import NepaliDatePicker from "bikramsambat-datepicker";

function App() {
  const [selectedDate, setSelectedDate] = useState<string>("");

  return (
    <div>
      <NepaliDatePicker
        value={selectedDate}
        onChange={setSelectedDate}
        placeholder="Select a date"
        locale="ne" // or "en"
      />
    </div>
  );
}

export default App;
```

## 📚 API Reference

### Props

| Prop              | Type                     | Default         | Description                             |
| ----------------- | ------------------------ | --------------- | --------------------------------------- |
| `value`           | `string \| undefined`    | `undefined`     | Selected date in YYYY-MM-DD format (BS) |
| `onChange`        | `(date: string) => void` | `undefined`     | Callback fired when date is selected    |
| `locale`          | `'en' \| 'ne'`           | `'ne'`          | Display language (English or Nepali)    |
| `placeholder`     | `string`                 | `'Pick a date'` | Placeholder text when no date selected  |
| `disabled`        | `boolean`                | `false`         | Disable the date picker                 |
| `disableFuture`   | `boolean`                | `false`         | Disable future dates                    |
| `showTodayButton` | `boolean`                | `false`         | Show "Today" button                     |
| `className`       | `string`                 | `undefined`     | Additional CSS classes                  |

### Date Format

The component uses `YYYY-MM-DD` format for Bikram Sambat dates:

- `2081-05-15` represents 15th Shrawan, 2081 BS

## 🎯 Usage Examples

### Basic Usage

```tsx
import NepaliDatePicker from "bikramsambat-datepicker";

function BasicExample() {
  const [date, setDate] = useState<string>("");

  return (
    <NepaliDatePicker
      value={date}
      onChange={setDate}
      placeholder="तारिख छान्नुहोस्"
    />
  );
}
```

### English Locale

```tsx
function EnglishExample() {
  const [date, setDate] = useState<string>("");

  return (
    <NepaliDatePicker
      value={date}
      onChange={setDate}
      locale="en"
      placeholder="Select date"
    />
  );
}
```

### Disable Future Dates

```tsx
function NoFutureExample() {
  const [date, setDate] = useState<string>("");

  return (
    <NepaliDatePicker
      value={date}
      onChange={setDate}
      disableFuture={true}
      showTodayButton={true}
    />
  );
}
```

### Custom Styling

```tsx
function StyledExample() {
  return (
    <NepaliDatePicker
      className="w-full max-w-sm mx-auto"
      value={date}
      onChange={setDate}
    />
  );
}
```

### Form Integration

```tsx
import { useForm } from "react-hook-form";

function FormExample() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const dateValue = watch("nepaliDate");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <label>Nepali Date</label>
        <NepaliDatePicker
          value={dateValue}
          onChange={(date) => setValue("nepaliDate", date)}
          placeholder="जन्म मिति छान्नुहोस्"
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
```

## 🎨 Styling

The component uses CSS classes that can be customized:

```css
/* Custom styling example */
.nepali-datepicker {
  --background: #ffffff;
  --foreground: #0f172a;
  --primary: #2563eb;
  --primary-foreground: #ffffff;
  --border: #e2e8f0;
  --radius: 0.5rem;
}

/* Saturday styling (red color) */
.nepali-datepicker .saturday {
  color: #ef4444;
}

/* Today highlight */
.nepali-datepicker .today {
  background-color: #f1f5f9;
  font-weight: 600;
}
```

## 🔧 TypeScript Support

Full TypeScript definitions included:

```tsx
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
