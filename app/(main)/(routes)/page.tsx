import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/components/ModeToggle'

export default function HomePage() {
  return (
    <div>
      <UserButton 
        afterSignOutUrl='/'
      />

      <ModeToggle />
    </div>
  )
}
