// textNode.js
import { useState, useEffect, useMemo } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  // 🔎 Detect {{variable}} using regex
  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...text.matchAll(regex)];
    const uniqueVars = [...new Set(matches.map(match => match[1]))];
    setVariables(uniqueVars);
  }, [text]);

  // 🧠 Create dynamic handles
  const dynamicHandles = useMemo(() => {
    return variables.map((variable, index) => ({
      type: 'target',
      position: Position.Left,
      id: variable,
      style: {
        top: `${(index + 1) * (100 / (variables.length + 1))}%`
      }
    }));
  }, [variables]);

  return (
    <BaseNode
      id={id}
      title="Text"
      handles={[
        ...dynamicHandles,
        {
          type: 'source',
          position: Position.Right,
          id: 'output'
        }
      ]}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: '100%',
          minHeight: 50,
          resize: 'none',
          overflow: 'hidden'
        }}
        onInput={(e) => {
          e.target.style.height = 'auto';
          e.target.style.height = e.target.scrollHeight + 'px';
        }}
      />
    </BaseNode>
  );
};
