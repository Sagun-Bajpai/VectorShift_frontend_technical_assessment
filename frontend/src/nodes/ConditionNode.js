import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Condition"
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'true', style: { top: '33%' } },
        { type: 'source', position: Position.Right, id: 'false', style: { top: '66%' } }
      ]}
    >
      <div>If condition true → True path</div>
      <div>If false → False path</div>
    </BaseNode>
  );
};
