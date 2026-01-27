import { motion } from 'framer-motion'


const DeliveryVan = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 50" fill="none" className={className}>
    <rect x="5" y="15" width="45" height="25" rx="3" fill="currentColor" opacity="0.15" />
    <path d="M50 15 L65 15 L75 25 L75 40 L50 40 Z" fill="currentColor" opacity="0.15" />
    <circle cx="20" cy="42" r="6" fill="currentColor" opacity="0.2" />
    <circle cx="60" cy="42" r="6" fill="currentColor" opacity="0.2" />
  </svg>
)

const DeliveryTruck = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 60" fill="none" className={className}>
    <rect x="5" y="10" width="55" height="35" rx="4" fill="currentColor" opacity="0.12" />
    <path d="M60 20 L80 20 L95 35 L95 45 L60 45 Z" fill="currentColor" opacity="0.15" />
    <rect x="65" y="23" width="20" height="15" rx="2" fill="currentColor" opacity="0.08" />
    <circle cx="22" cy="50" r="8" fill="currentColor" opacity="0.2" />
    <circle cx="48" cy="50" r="8" fill="currentColor" opacity="0.2" />
    <circle cx="82" cy="50" r="8" fill="currentColor" opacity="0.2" />
  </svg>
)