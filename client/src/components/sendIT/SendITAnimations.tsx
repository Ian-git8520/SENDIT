import { motion } from 'framer-motion'


interface RoadPathProps {
  scrollProgress: number
}

export function RoadPath({ scrollProgress }: RoadPathProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <svg className="absolute left-1/2 top-0 h-full w-40 -translate-x-1/2" viewBox="0 0 160 2000" preserveAspectRatio="none">
        <path d="M80 0 L80 2000" stroke="rgba(42, 42, 58, 0.5)" strokeWidth="60" strokeLinecap="round" />
        <path d="M50 0 L50 2000" stroke="rgba(255, 107, 53, 0.3)" strokeWidth="2" strokeDasharray="10 20" />
        <path d="M110 0 L110 2000" stroke="rgba(255, 107, 53, 0.3)" strokeWidth="2" strokeDasharray="10 20" />
        <motion.path d="M80 0 L80 2000" stroke="#fbbf24" strokeWidth="4" strokeDasharray="30 50" strokeLinecap="round" animate={{ strokeDashoffset: [0, -160] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
        <motion.path d="M80 0 L80 2000" stroke="url(#roadGradient)" strokeWidth="6" strokeLinecap="round" style={{ pathLength: scrollProgress }} />
        <defs>
          <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff6b35" stopOpacity="0" /><stop offset="50%" stopColor="#ff6b35" stopOpacity="1" /><stop offset="100%" stopColor="#fbbf24" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
      
      {[0.2, 0.4, 0.6, 0.8].map((milestone, index) => (
        <motion.div key={milestone} className="absolute left-1/2 -translate-x-1/2" style={{ top: `${milestone * 100}%` }}
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: scrollProgress > milestone ? 1 : 0, opacity: scrollProgress > milestone ? 1 : 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="relative">
            <motion.div className="absolute inset-0 rounded-full bg-sendit-orange" animate={{ scale: [1, 2], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} style={{ width: 20, height: 20, left: -10, top: -10 }} />
            <div className="w-5 h-5 rounded-full bg-sendit-orange border-2 border-sendit-yellow shadow-lg glow-orange" />
            <div className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-medium text-muted-foreground ${index % 2 === 0 ? 'left-8' : 'right-8'}`}>
              {['Create Order', 'Track Package', 'In Transit', 'Delivered'][index]}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
