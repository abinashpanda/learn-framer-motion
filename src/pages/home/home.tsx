import DemoCard from './components/demo-card'
import { FeatureCardDemo } from '../features-card/demo'

export default function Home() {
  return (
    <div className="p-4">
      <div className="mx-auto grid max-w-screen-lg grid-cols-3 gap-4">
        <DemoCard
          title="Features Card"
          url="/features-card"
          demo={<FeatureCardDemo />}
          description={
            <span>
              Usage of <code className="font-mono">useScroll</code> hook
            </span>
          }
        />
      </div>
    </div>
  )
}
