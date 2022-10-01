<div align="center">
<h1>Workflow Visualizer</h1>

### Free and open source customizable workflow visualizer

<img src="https://github.com/SandeepBalachandran/workflow-visualizer/blob/master/public/demo.gif?raw=true" alt="demo" border="0">

[![](https://img.shields.io/github/stars/SandeepBalachandran/workflow-visualizer?style=for-the-badge)](#stars)
[![](https://img.shields.io/github/forks/SandeepBalachandran/workflow-visualizer?style=for-the-badge)](#forks)

👉 &nbsp;&nbsp;[Workflow Visualizer](https://workflow-visualizer.vercel.app/)&nbsp;&nbsp;👈

</div>

### Technologies

- [React - 18.2](https://reactjs.org/)
- [Next JS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Flow](https://reactflow.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Tailwindcss](https://tailwindcss.com/)
- [Styled Components](https://styled-components.com/)
- [Eslint](https://eslint.org/)

### For development

- `git clone https://github.com/SandeepBalachandran/workflow-visualizer.git`
- `npm i`
- `npm run dev`

### Node details

| Node Type     | Purpose                      | Handles                      | Notes                                                                                |
| ------------- | ---------------------------- | ---------------------------- | ------------------------------------------------------------------------------------ |
| Start Node    | Denote start of the workflow | 2 source handles             | Node can connect to 2 other nodes                                                    |
| Process Node  | Denote steps in the workflow | 1 source and 1 target handle | Node can receive connection from a node and can be connected to another node as well |
| Decision Node | Denotes Conditions           | 2 source and target handles  | Node can receive 2 connections from other nodes and can be connected 2 other nodes   |
| End Node      | Denote end of the workflow   | 2 target handles             | Node can receive 2 connections from another nodes                                    |

## Help Improve

Found a bug or an issue with this? [Open a new issue](https://github.com/SandeepBalachandran/workflow-visualizer/issues) here on GitHub.

## Contribute

Please check the [**Contributing Guidelines**](https://github.com/SandeepBalachandran/workflow-visualizer/blob/master/CONTRIBUTING.md) before contributing.

### Please consider staring th repo before you move on . It gives me motivation work on more projects.

![](https://visitor-badge.glitch.me/badge?page_id=workflow-visualizer)
