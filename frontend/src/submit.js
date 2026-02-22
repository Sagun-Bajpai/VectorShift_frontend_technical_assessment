// submit.js

import { useStore } from './store';

export const SubmitButton = () => {

    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nodes,
                    edges
                }),
            });

            const result = await response.json();

            alert(
                `Number of Nodes: ${result.num_nodes}\n` +
                `Number of Edges: ${result.num_edges}\n` +
                `Is DAG: ${result.is_dag ? 'Yes' : 'No'}`
            );

        } catch (error) {
            console.error(error);
            alert('Error connecting to backend');
        }
    };

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button
                onClick={handleSubmit}
                style={{
                    padding: '10px 18px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#2563eb',
                    color: 'white',
                    cursor: 'pointer'
                }}
            >
                Submit Pipeline
            </button>
        </div>
    );
};
