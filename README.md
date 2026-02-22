# VectorShift Frontend Technical Assessment

This project is a pipeline editor built using React and FastAPI as part of the VectorShift Frontend Technical Assessment.

The application allows users to create pipelines using nodes and connections, and submit them to a backend service for analysis.

---

## 🚀 Features

### 1. Node Abstraction

A reusable BaseNode component was created to avoid repeating code across different node types.

This abstraction allows easy creation of new nodes with consistent styling and functionality.

Custom Nodes Created:

- Math Node
- Condition Node
- Delay Node
- API Request Node
- Logger Node

This makes the system scalable and easier to maintain.

---

### 2. Styling

The application includes a clean and consistent UI design.

Features include:

- Styled nodes
- Clean layout
- Consistent colors
- Responsive components

---

### 3. Dynamic Text Node

The Text Node includes advanced functionality:

#### Dynamic Resizing

The Text node automatically adjusts its size as the user types.

This improves visibility of the content.

#### Variable Detection

Users can define variables using double curly brackets:

Example:

```
{{input}}
```

Each variable automatically creates a new input handle on the left side of the node.

---

### 4. Backend Integration

Frontend is connected to a FastAPI backend.

When the user clicks the Submit Pipeline button:

- Nodes are sent to backend
- Edges are sent to backend

Backend calculates:

- Number of nodes
- Number of edges
- Whether the pipeline is a DAG

Example response:

```
{
 num_nodes: 4,
 num_edges: 3,
 is_dag: true
}
```

The frontend displays the result in an alert.

---

## 🛠️ Technologies Used

Frontend:

- React
- ReactFlow
- JavaScript

Backend:

- Python
- FastAPI

---

## 📁 Project Structure

```
frontend/
 ├── src/
 │    ├── nodes/
 │    │    ├── BaseNode.js
 │    │    ├── InputNode.js
 │    │    ├── OutputNode.js
 │    │    ├── TextNode.js
 │    │    ├── LLMNode.js
 │    │    ├── MathNode.js
 │    │    ├── ConditionNode.js
 │    │    ├── DelayNode.js
 │    │    ├── APIRequestNode.js
 │    │    ├── LoggerNode.js
 │
backend/
 ├── main.py
```

---

## ▶️ How to Run Project

### Frontend

Go to frontend folder:

```
cd frontend
```

Install packages:

```
npm install
```

Start frontend:

```
npm start
```

Runs on:

```
http://localhost:3000
```

---

### Backend

Go to backend folder:

```
cd backend
```

Start server:

```
uvicorn main:app --reload
```

Runs on:

```
http://localhost:8000
```

---

## ✅ How to Use

1. Add nodes to canvas
2. Connect nodes
3. Create pipeline
4. Click Submit Pipeline
5. View results

---

## 🎯 Assessment Requirements Completed

✔ Node Abstraction  
✔ Styling  
✔ Text Node Logic  
✔ Backend Integration

---

## 👩‍💻 Author

Sagun Bajpai
