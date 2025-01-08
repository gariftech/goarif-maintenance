import Link from 'next/link'
import { env } from '~/config/env'
import { capitalizeFirstLetter } from '~/lib/string'

export default function Home() {
  const app_name = capitalizeFirstLetter(env.APP_NAME)
  const wording = app_name.split(' ')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="flex flex-col gap-2 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          {wording[0] && <span className="text-[hsl(280,100%,70%)]">{wording[0]}</span>}
          {wording.slice(1).join(' ') && (
            <span className="text-white">{wording.slice(1).join(' ')}</span>
          )}

          <span className="text-[hsl(280,100%,70%)]">Maintenance</span>
        </h1>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/arifanalytics"
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          >
            <h3 className="text-2xl font-bold">GitHub →</h3>
            <div className="text-lg">{`Find in-depth information about ${app_name}`}</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
