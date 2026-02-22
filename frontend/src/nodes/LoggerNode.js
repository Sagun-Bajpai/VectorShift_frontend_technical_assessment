import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Logger"
      handles={[
        { type: 'target', position: Position.Left, id: 'input' }
      ]}
    >
      <div>Logs incoming data</div>
    </BaseNode>
  );
};
