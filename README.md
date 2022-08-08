<h2 align='center'>Workflow Visualizer</h2>

<img src="https://github.com/SandeepBalachandran/workflow-visualizer/blob/master/public/demo.gif?raw=true" alt="demo" border="0">

### Demo
[Demo](https://workflow-visualizer.vercel.app/)
### About
* Application is built with React JS
* Flow diagram is built with React-Flow package
* State is managed with Zustand


### Tools used
* [React - 18.2](https://reactjs.org/)
* [react-flow](https://reactflow.dev/)
* [react-tooltip](https://github.com/wwayne/react-tooltip)
* [Zustand](https://github.com/pmndrs/zustand)
* [react-icons](https://react-icons.github.io/react-icons/)
* [tailwindcss](https://tailwindcss.com/)
* [eslint]()
* [Visual studio code]()


### Scope
* A flow diagram will be available in the home page which is  SOP of the  scientific experiment provided with the task description
* All nodes are draggable and removable. All edges those which are associated with the removed nodes will be removed together as well
* New nodes ( Start node , Process node, Decision node and End node for now) can be added from the list of nodes available in the menu
* Newly added nodes can be connected with existing flow chart
* Labels can be edited for all nodes
* Node can be deleted using backspace key

### Node details

| Node Type     | Purpose                       | Handles                      | Notes                                                                                |
|---------------|-------------------------------|------------------------------|--------------------------------------------------------------------------------------|
| Start Node    | Denote start of the workflow  | 2 source handles             | Node can connect to 2 other nodes                                                    |
| Process Node  | Denote steps in the workflow  | 1 source and 1 target handle | Node can receive connection from a node and can be connected to another node as well |
| Decision Node | Denotes Conditions            | 2 source and target handles  | Node can receive 2 connections from other nodes and can be connected 2 other nodes   |
| End Node      | Denote end of the workflow    | 2 target handles             | Node can receive 2 connections from another nodes                                    |
  
r
