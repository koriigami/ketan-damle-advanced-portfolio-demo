import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-ink-3">404 — page not found</p>
      <h1 className="mt-4 font-serif text-6xl leading-none italic tracking-tight md:text-8xl">
        nothing here
      </h1>
      <p className="mt-6 max-w-md text-ink-2">
        The link may have moved, or this page was archived. Head back to the work.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm text-bg transition-transform hover:-translate-y-0.5"
      >
        <ArrowLeft className="size-4" />
        Back home
      </Link>
    </main>
  )
}
