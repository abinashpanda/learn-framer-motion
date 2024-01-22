import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const MotionLink = motion(Link)

type DemoCardProps = {
  title: React.ReactNode
  chapterNumber: number
  description?: React.ReactNode
  demo?: React.ReactNode
  url: string
  className?: string
  style?: React.CSSProperties
}

export default function DemoCard({ title, chapterNumber, description, demo, url, className, style }: DemoCardProps) {
  return (
    <MotionLink
      to={url}
      className={cn('block overflow-hidden rounded-md border', className)}
      style={style}
      variants={{ initial: {}, hover: {} }}
      initial="initial"
      whileHover="hover"
    >
      {demo}
      <div className="flex items-center gap-4 border-t p-2 px-2">
        <motion.div
          className="flex h-10 w-10 items-center justify-center rounded-md border text-2xl leading-none text-muted-foreground"
          variants={{ initial: { scale: 1 }, hover: { scale: 1.2, rotate: 5 } }}
        >
          {chapterNumber}
        </motion.div>
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
