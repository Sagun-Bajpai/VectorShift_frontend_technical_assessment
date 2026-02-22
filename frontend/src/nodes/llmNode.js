// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {

  return (
    <BaseNode
      id={id}
      title="LLM"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: 'system',
          style: { top: '33%' }
        },
        {
          type: 'target',
          position: Position.Left,
          id: 'prompt',
          style: { top: '66%' }
        },
        {
          type: 'source',
          position: Position.Right,
          id: 'response'
        }
      ]}
    >
      <div>This is an LLM.</div>
    </BaseNode>
  );
};
