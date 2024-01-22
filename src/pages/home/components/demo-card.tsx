import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const MotionLink = motion(Link)

type DemoCardProps = {
  title: React.ReactNode
  description?: React.ReactNode
  demo?: React.ReactNode
  url: string
  className?: string
  style?: React.CSSProperties
}

export default function DemoCard({ title, description, demo, url, className, style }: DemoCardProps) {
  return (
    <MotionLink
      to={url}
      className={cn('overflow-hidden rounded-md border', className)}
      style={style}
      variants={{ initial: {}, hover: {} }}
      initial="initial"
      whileHover="hover"
    >
      {demo}
      <div className="flex items-center gap-2 border-t px-4 py-3">
        <div className="flex-1">
          <div className="text-lg font-medium">{title}</div>
          <div className="text-sm text-muted-foreground">{description}</div>
        </div>
        <motion.div variants={{ initial: { opacity: 0, x: -10 }, hover: { opacity: 1, x: 0 } }}>
          <ChevronRightIcon className="h-5 w-5" />
        </motion.div>
      </div>
    </MotionLink>
  )
}
