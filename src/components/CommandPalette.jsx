import { useEffect } from 'react'
import { Command } from 'cmdk'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  Palette,
  Home as HomeIcon,
  Briefcase,
  User,
  Mail,
  Music,
  Vibrate,
  MousePointer,
} from 'lucide-react'
import { projects } from '../data/projects'
import { THEMES, useSettings, haptic } from '../store/settings'

export default function CommandPalette({ open, onOpenChange }) {
  const navigate = useNavigate()
  const {
    audioEnabled,
    hapticsEnabled,
    cursorEnabled,
    setAudio,
    setHaptics,
    setCursor,
    setTheme,
  } = useSettings()

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        haptic(10)
        onOpenChange(!open)
      }
      if (e.key === 'Escape') onOpenChange(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onOpenChange])

  const go = (path) => {
    onOpenChange(false)
    navigate(path)
    haptic(10)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[80] grid place-items-start bg-black/50 px-4 pt-[16vh] backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-card shadow-2xl"
          >
            <Command label="Command menu" className="[&_[cmdk-input]]:w-full">
              <div className="border-b border-line px-4">
                <Command.Input
                  placeholder="Type to search — pages, projects, settings…"
                  className="h-14 w-full bg-transparent text-base text-ink outline-none placeholder:text-ink-3"
                />
              </div>
              <Command.List className="max-h-[60vh] overflow-y-auto p-2">
                <Command.Empty className="p-6 text-center text-sm text-ink-3">
                  Nothing found. Try "work", a theme name, or a project title.
                </Command.Empty>

                <Command.Group heading="Navigate" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-ink-3">
                  <Item icon={HomeIcon} label="Home" onSelect={() => go('/')} />
                  <Item icon={Briefcase} label="Work" onSelect={() => go('/work')} />
                  <Item icon={User} label="About" onSelect={() => go('/about')} />
                  <Item icon={Mail} label="Contact" onSelect={() => go('/contact')} />
                </Command.Group>

                <Command.Group heading="Case studies" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-ink-3">
                  {projects.map((p) => (
                    <Item
                      key={p.slug}
                      icon={ArrowUpRight}
                      label={`${p.title} — ${p.tag}`}
                      onSelect={() => go(`/work/${p.slug}`)}
                    />
                  ))}
                </Command.Group>

                <Command.Group heading="Theme" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-ink-3">
                  {THEMES.map((t) => (
                    <Item
                      key={t.id}
                      icon={Palette}
                      label={`Set theme · ${t.name}`}
                      onSelect={() => {
                        setTheme(t.id)
                        haptic(8)
                      }}
                    />
                  ))}
                </Command.Group>

                <Command.Group heading="Sensory" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-ink-3">
                  <Item
                    icon={Music}
                    label={`Ambient sound · ${audioEnabled ? 'on' : 'off'} — toggle`}
                    onSelect={() => setAudio(!audioEnabled)}
                  />
                  <Item
                    icon={Vibrate}
                    label={`Haptics · ${hapticsEnabled ? 'on' : 'off'} — toggle`}
                    onSelect={() => setHaptics(!hapticsEnabled)}
                  />
                  <Item
                    icon={MousePointer}
                    label={`Custom cursor · ${cursorEnabled ? 'on' : 'off'} — toggle`}
                    onSelect={() => setCursor(!cursorEnabled)}
                  />
                </Command.Group>
              </Command.List>
            </Command>
            <div className="flex items-center justify-between border-t border-line bg-bg-2 px-4 py-2 font-mono text-[11px] text-ink-3">
              <span>⌘K to open · ↑ ↓ to move · ↵ to select</span>
              <span>esc to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Item({ icon: Icon, label, onSelect }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-bg-2"
    >
      <Icon className="size-4 text-ink-3" />
      <span className="flex-1">{label}</span>
    </Command.Item>
  )
}
