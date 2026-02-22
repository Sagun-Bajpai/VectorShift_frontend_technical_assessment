//BaseNode
import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  children,
  handles = []
}) => {
  return (
    <div style={{
      width: 240,
  minHeight: 120,
  borderRadius: 12,
  padding: 12,
  background: '#ffffff',
  border: '1px solid #e5e7eb',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  fontSize: '14px'
      
    }}>
      
      {/* Dynamic Handles */}
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}

      <div style={{ 
         fontWeight: 600,
         fontSize: '15px',
         marginBottom: 8,
         color: '#111827'
       }}>
        {title}
      </div>

      {children}

    </div>
  );
};
