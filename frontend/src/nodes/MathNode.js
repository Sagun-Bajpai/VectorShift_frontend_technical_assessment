import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id }) => {
  const [operation, setOperation] = useState('Add');

  return (
    <BaseNode
      id={id}
      title="Math"
      handles={[
        { type: 'target', position: Position.Left, id: 'a', style: { top: '33%' } },
        { type: 'target', position: Position.Left, id: 'b', style: { top: '66%' } },
        { type: 'source', position: Position.Right, id: 'result' }
      ]}
    >
      <label>
        Operation:
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="Add">Add</option>
          <option value="Multiply">Multiply</option>
        </select>
      </label>
    </BaseNode>
  );
};
