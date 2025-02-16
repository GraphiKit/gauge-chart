# Light Gauge Chart

**Light Gauge Chart** is a lightweight JavaScript library for rendering customizable gauge charts on HTML canvas elements. It enables you to visualize data as a circular gauge with multiple segments, each representing a percentage of the whole.

## 🚀 Installation

Install the package via npm:

```bash
npm install @graphikit/light-gauge-chart
```

## 📖 Usage

To use the `GaugeChart` class, import it into your project and instantiate it with the required parameters.

### 🔧 Parameters

The `GaugeChart` constructor accepts the following parameters:

| Parameter       | Type                         | Description |
|---------------|----------------------------|-------------|
| `selector`     | `string` or `HTMLCanvasElement` | A CSS selector string (e.g., `"#myCanvas"`) or a direct reference to an HTML `<canvas>` element. |
| `percentages`  | `Array<number>` | Defines the segments of the gauge chart as percentages. Example: `[0.15, 0.5, 0.2, 0.15]` represents four segments with 15%, 50%, 20%, and 15% of the total gauge. |
| `color?`       | `string` | (Optional) The color of the gauge segments. |
| `options?`     | `object` | (Optional) An object containing additional configuration options. |

### 🎨 Available Options

| Option               | Type   | Description |
|----------------------|--------|-------------|
| `strokeWidthFactor`  | `number` | Controls the thickness of the gauge segments relative to the size of the canvas. Default: `0.4`. |

### 🖥 Example

#### HTML:
```html
<canvas id="myCanvas" width="400" height="400" style="width: 100%; height: auto;"></canvas>
```

#### JavaScript:
```js
import { GaugeChart } from 'gauge-chart';

const canvas = document.querySelector('#myCanvas');
const percentages = [0.2, 0.3, 0.1, 0.4];
const color = '#FFC300';
const options = {
  strokeWidthFactor: 0.5 // Thicker segments
};

const chart = new GaugeChart(canvas, percentages, color, options);
```

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing
Feel free to contribute by opening issues or submitting pull requests on [GitHub](https://github.com/your-repo).

Happy coding! 🚀

