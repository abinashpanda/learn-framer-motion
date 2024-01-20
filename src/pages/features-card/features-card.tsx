import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { CheckCircleIcon } from 'lucide-react'
import { ElementRef, useRef } from 'react'

type Feature = {
  title: string
  description: string
  features: string[]
  bgColor: string
  featureImage: string
}

const FEATURES: Feature[] = [
  {
    title: 'Host workshops that upsell 20% more',
    description:
      "Host live workshops, webinars, Q&As, and exclusive streams on TagMango's best-in-class video call tool for your audience. With our revolutionary live upsell feature, you can easily sell products during the call without the need for attendees to visit external links",
    features: [
      'Unique upsell feature',
      'Easy payment integration',
      'Realtime sale notifications',
      'Automated certificate issuance',
      'Automatic email and whatsapp reminders',
    ],
    bgColor: '#cfdac6',
    featureImage:
      'https://assets-global.website-files.com/63e9e777ca756dd1bcd0e4d1/63f745c839759cb0db14d436_zoom-card-min.webp',
  },
  {
    title: 'Launch courses that sell while you sleep',
    description:
      "Our learning management system allows you to effortlessly create, manage and sell courses online. Our platform offers a range of features to enhance your learners' experience, including:",

    features: [
      'User-friendly course builder with drag-and-drop functionality',
      'Fully customizable assignments and quizzes',
      'Engaging discussion forums',
      'Automated certificate issuance',
      'Analytics to track learner progress',
    ],
    bgColor: '#b6d7ff',
    featureImage:
      'https://assets-global.website-files.com/63e9e777ca756dd1bcd0e4d1/63f746185d08514d5084aa33_course-visual-min.webp',
  },
  {
    title: 'Build social authority with branded android & iOS apps',
    description:
      'Build your personalised android and iOS apps that go live with your name on the app store and playstore with aesthetics that resonate with your brand exclusively.',
    features: [
      'Establish a strong brand identity with a custom-branded Android and iOS app and website',
      "Fully customizable app and website design to match your brand's unique style and aesthetic",
      'Reach a wider audience by making your brand accessible on both Android and iOS platforms',
    ],
    bgColor: '#c4e8d6',
    featureImage:
      'https://assets-global.website-files.com/63e9e777ca756dd1bcd0e4d1/63f7466e6465490f46cbce3c_wl-min.webp',
  },
  {
    title: 'Reach faster and wider with email and whatsapp campaigns',
    description:
      'Maximize your reach and personalize your interactions with your audience through the channels they prefer. Save time and increase conversions by setting up automated email and whatsapp marketing for your courses and workshops.',
    features: [
      'Fully customisable builders with drag-and-drop functionality',
      'Set automations and workflows',
      'Get a green tick on your whatsapp account',
      'Leverage powerful analytics to track the performance of your campaigns',
    ],
    bgColor: '#d3c9ed',
    featureImage:
      'https://assets-global.website-files.com/63e9e777ca756dd1bcd0e4d1/63f746a3cc77d5373470959b_wp-marketing-min.png',
  },
  {
    title: 'Feed and Community Rooms',
    description:
      'Create a vibrant community around your courses with social media like feed page and community rooms. Your audience will be able to engage with each other, ask questions, and share their experiences, fostering a sense of belonging and increasing student engagement.',
    features: [
      'Enable/disable P2P chats for controlled communication',
      'Conduct challenges, giveaways, and more',
      'Schedule posts to keep the community active',
      'Fully controllable community rooms',
    ],
    featureImage:
      'https://assets-global.website-files.com/63e9e777ca756dd1bcd0e4d1/63f746da01cd2e6a1c28d2ab_feed%26community-min.webp',
    bgColor: '#f8d1cc',
  },
  {
    title: 'Automate certificates for social proofing',
    description:
      "Choose from a variety of certificate templates, fully customise with your colours, logo, and signature, and streamline and automate the process of issuing certificates. With just a few clicks, you'll be able to issue professional-looking certificates to your audience, recognizing their achievements and boosting their motivation.",
    features: [
      'One-click issuance of certificates at scale to a custom list',
      'Automatically detect and send to workshop attendees only',
      'Automatically send on course completion',
    ],
    featureImage:
      'https://assets-global.website-files.com/63e9e777ca756dd1bcd0e4d1/63f74710785cc3be2f4f9df5_certificate-visual-min.webp',
    bgColor: '#f1e781',
  },
  {
    title: 'Landing pages that load fast and sell faster',
    description:
      'Choose from multiple high-conversion templates for your landing page, along with no-code exit-intent popups.',
    features: ['Beautifully designed templates', 'Exit intent pop-ups', 'Countdown/Timer'],
    featureImage:
      'https://assets-global.website-files.com/63e9e777ca756dd1bcd0e4d1/63f747445d0851936d84c441_landing-page-builder-min.webp',
    bgColor: '#cdd7ef',
  },
]

export default function FeaturesCard() {
  const container = useRef<ElementRef<'div'>>(null)

  const cardContainer = useRef<ElementRef<'div'>>(null)

  const { scrollY } = useScroll({
    target: container,
  })

  useMotionValueEvent(scrollY, 'change', (value) => {
    if (!cardContainer.current || !container.current) {
      return
    }

    if (value > 64 && cardContainer.current.style.position !== 'fixed') {
      const bcr = container.current.getBoundingClientRect()
      cardContainer.current.style.top = `${bcr.top}px`
      cardContainer.current.style.left = `${bcr.left}px`
      cardContainer.current.style.width = `${bcr.width}px`
      cardContainer.current.style.position = 'fixed'
    }
    if (value < 100 && cardContainer.current.style.position !== 'relative') {
      cardContainer.current.style.position = 'relative'
      cardContainer.current.style.top = '0px'
      cardContainer.current.style.left = '0px'
    }
  })

  return (
    <>
      <div className="fixed left-0 right-0 top-0 h-16 border-b border-b bg-white" />
      <div className="px-4 py-24">
        <div className="mx-auto mb-24 max-w-screen-md text-center text-6xl font-semibold">
          Exclusive features that help you sell more
        </div>
        <div className="relative mx-auto h-[500vh] max-w-screen-lg" ref={container}>
          <div ref={cardContainer}>
            {FEATURES.map((feature, index) => {
              return <FeatureCard key={index} {...feature} index={index} totalItems={FEATURES.length} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

type FeatureCardProps = {
  title: string
  description: string
  features: string[]
  bgColor: string
  featureImage: string
  index: number
  totalItems: number
}

function FeatureCard({ title, description, features, bgColor, featureImage, index, totalItems }: FeatureCardProps) {
  return (
    <motion.div
      className="absolute left-0 right-0 top-0 rounded-3xl p-10"
      style={{
        backgroundColor: bgColor,
        rotate: (totalItems - 1 - index) * 1,
        zIndex: totalItems - 1 - index,
      }}
    >
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="mb-4 text-4xl font-bold text-zinc-900">{title}</div>
          <div className="mb-4 text-zinc-600">{description}</div>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm font-medium text-zinc-900">
                <CheckCircleIcon className="h-4 w-4" />
                <div>{feature}</div>
              </div>
            ))}
          </div>
        </div>
        <img src={featureImage} />
      </div>
    </motion.div>
  )
}
