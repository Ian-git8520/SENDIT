import { motion } from 'framer-motion'


const DeliveryVan = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 50" fill="none" className={className}>
    <rect x="5" y="15" width="45" height="25" rx="3" fill="currentColor" opacity="0.15" />
    <path d="M50 15 L65 15 L75 25 L75 40 L50 40 Z" fill="currentColor" opacity="0.15" />
    <circle cx="20" cy="42" r="6" fill="currentColor" opacity="0.2" />
    <circle cx="60" cy="42" r="6" fill="currentColor" opacity="0.2" />
  </svg>
)