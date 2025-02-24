'use client'

import Link from 'next/link'
import styles from './Footer.module.css'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('footer')

  const linksData = [
    {
      title: t('products'),
      links: [
        { href: 'https://github.com/MakinoharaShoko/WebGAL', label: 'WebGAL' },
        { href: 'https://github.com/MakinoharaShoko/WebGAL_Terre', label: 'WebGAL Terre' },
      ],
    },
    {
      title: t('development'),
      links: [
        { href: 'https://docs.openwebgal.com/developers', label: t('contribute') },
        { href: 'https://docs.openwebgal.com/tech', label: t('technical') }
      ],
    },
    {
      title: t('community'),
      links: [
        { href: 'https://jq.qq.com/?_wv=1027&k=gYVremLy', label: `${t('qqGroup')}: 709293432` },
        { href: 'https://discord.gg/kPrQkJttJy', label: 'Discord' },
      ],
    },
    {
      title: t('developer'),
      links: [
        { href: 'https://github.com/MakinoharaShoko', label: 'GitHub' },
        { href: 'https://space.bilibili.com/7321105', label: t('bilibili') },
      ],
    },
    {
      title: t('sponsor'),
      links: [
        { href: 'https://docs.openwebgal.com/sponsor/', label: t('sponsor') },
      ],
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          {
            linksData.map(item =>
              <ul key={item.title}>
                <li className={styles['link-title']}>{item.title}</li>
                {
                  item.links.map((link, index) =>
                    <li key={index}>
                      <Link href={link.href} target={'_blank'} className={styles.link}>{link.label}</Link>
                    </li>
                  )
                }
              </ul>
            )
          }
        </div>
      </div>
      <div className={'w-full p-2 text-sm font-light border-t'}>
        <p>Powered by <Link href="https://github.com/MakinoharaShoko/WebGAL" target="_blank">WebGAL</Link> Framework</p>
        <p>Made with ❤ by <Link href="https://github.com/MakinoharaShoko" target="_blank">Mahiru</Link></p>
        <p>
          WebGAL is licensed under the <Link href="https://github.com/MakinoharaShoko/WebGAL/blob/main/LICENSE" target="_blank" >Mozilla Public License 2.0 (MPL-2.0)</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer