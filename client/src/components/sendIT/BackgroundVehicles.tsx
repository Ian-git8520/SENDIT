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

const DeliveryCar = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 35" fill="none" className={className}>
    <path d="M8 18 L15 10 L45 10 L52 18 L55 18 L55 25 L5 25 L5 18 Z" fill="currentColor" opacity="0.12" />
    <rect x="18" y="12" width="10" height="8" rx="1" fill="currentColor" opacity="0.08" />
    <rect x="32" y="12" width="10" height="8" rx="1" fill="currentColor" opacity="0.08" />
    <circle cx="15" cy="28" r="5" fill="currentColor" opacity="0.2" />
    <circle cx="45" cy="28" r="5" fill="currentColor" opacity="0.2" />
  </svg>
)


const DeliveryScooter = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 50 40" fill="none" className={className}>
    <path d="M10 28 L18 20 L32 20 L38 15 L42 15 L42 25 L35 28" fill="currentColor" opacity="0.12" />
    <rect x="22" y="12" width="12" height="10" rx="2" fill="currentColor" opacity="0.15" />
    <circle cx="12" cy="30" r="6" fill="currentColor" opacity="0.2" />
    <circle cx="38" cy="30" r="6" fill="currentColor" opacity="0.2" />
  </svg>
)

// Package/Box SVG
const FloatingPackage = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className}>
    <rect x="5" y="10" width="30" height="25" rx="2" fill="currentColor" opacity="0.1" />
    <line x1="5" y1="18" x2="35" y2="18" stroke="currentColor" opacity="0.15" strokeWidth="2" />
    <line x1="20" y1="10" x2="20" y2="35" stroke="currentColor" opacity="0.12" strokeWidth="2" />
    <path d="M15 5 L20 2 L25 5" stroke="currentColor" opacity="0.15" strokeWidth="1.5" fill="none" />
  </svg>
)
