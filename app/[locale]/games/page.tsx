
import GamesTitle from './GamesTitle'
import GamesList from './GamesList'
import GamesDisclaimer from './GamesDisclaimer'
import { createTranslator } from 'next-intl'

const Games = () => {

  return (
    <div className={'pt-16 pb-4'}>
      <div className={'max-w-screen-xl mx-auto space-y-4'}>
        <GamesTitle />
        <GamesList />
        <GamesDisclaimer />
      </div>
    </div>
  )
}

export default Games

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const messages = (await import(`../../../locales/${locale}.json`)).default

  const t = createTranslator({ locale, messages })

  return {
    title: t('metadata.games.title'),
    description: t('metadata.games.description'),
    openGraph: {
      title: t('metadata.games.title'),
      description: t('metadata.games.description'),
    },
  }
}