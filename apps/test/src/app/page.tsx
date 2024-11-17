import { Button } from '@repo/ui/components/ui/button'
import { cn } from '@repo/ui/lib/utils'

export default function Page(): JSX.Element {
  return (
    <>
      <Button variant="destructive" className="px-14">
        Hello world
      </Button>
      <Button variant="outline" className={cn('px-24')}>
        Hello world
      </Button>
    </>
  )
}
