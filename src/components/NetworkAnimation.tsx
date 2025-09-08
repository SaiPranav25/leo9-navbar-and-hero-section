import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface Node {
  id: number;
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  color: string;
  radius: number;
  angle: number;
}

interface Connection {
  source: number;
  target: number;
}

const NetworkAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const tlRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.strokeStyle = 'rgba(156, 163, 175, 0.3)';
      ctx.lineWidth = 1;
      connectionsRef.current.forEach(connection => {
        const sourceNode = nodesRef.current[connection.source];
        const targetNode = nodesRef.current[connection.target];
        if (sourceNode && targetNode) {
          ctx.beginPath();
          ctx.moveTo(sourceNode.x, sourceNode.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.stroke();
        }
      });
      
      // Draw nodes
      nodesRef.current.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      
      requestAnimationFrame(render);
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initializeNodes();
      startGSAPAnimation();
    };

    const initializeNodes = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const colors = ['#EF4444', '#8B5CF6', '#3B82F6', '#1F2937'];
      
      // Create structured circular pattern like in the image
      const layers = [
        { radius: 80, count: 8 },
        { radius: 140, count: 12 },
        { radius: 200, count: 16 }
      ];

      nodesRef.current = [];
      let nodeId = 0;

      // Center node
      nodesRef.current.push({
        id: nodeId++,
        x: centerX,
        y: centerY,
        originalX: centerX,
        originalY: centerY,
        color: colors[3],
        radius: 4,
        angle: 0
      });

      // Create layered circular structure
      layers.forEach((layer, layerIndex) => {
        for (let i = 0; i < layer.count; i++) {
          const angle = (i / layer.count) * Math.PI * 2;
          const x = centerX + Math.cos(angle) * layer.radius;
          const y = centerY + Math.sin(angle) * layer.radius;
          
          nodesRef.current.push({
            id: nodeId++,
            x,
            y,
            originalX: x,
            originalY: y,
            color: colors[layerIndex % colors.length],
            radius: Math.random() * 2 + 2,
            angle
          });
        }
      });

      // Create connections between nearby nodes
      connectionsRef.current = [];
      nodesRef.current.forEach((node, i) => {
        nodesRef.current.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(otherNode.originalX - node.originalX, 2) + 
              Math.pow(otherNode.originalY - node.originalY, 2)
            );
            
            if (distance < 120 && Math.random() < 0.3) {
              connectionsRef.current.push({ source: i, target: j });
            }
          }
        });
      });
    };

    const startGSAPAnimation = () => {
      // Kill existing timeline
      if (tlRef.current) {
        tlRef.current.kill();
      }

      // Create GSAP timeline for smooth animations
      tlRef.current = gsap.timeline({ repeat: -1 });

      // Animate each node with GSAP
      nodesRef.current.forEach((node, index) => {
        if (index === 0) return; // Keep center node static
        
        // Create floating animation for each node
        tlRef.current!.to(node, {
          x: node.originalX + Math.cos(node.angle) * 20,
          y: node.originalY + Math.sin(node.angle) * 20,
          duration: 3 + Math.random() * 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.1
        });
      }
      )
    };
    render();
    // Initialize canvas and start animation
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default NetworkAnimation;