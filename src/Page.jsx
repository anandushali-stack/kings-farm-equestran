import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Page({ html, title }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = title
    window.scrollTo(0, 0)
    // let the DOM paint, then re-run template init (sliders, counters, menus, marquees)
    const t = setTimeout(() => {
      document.dispatchEvent(new Event('kf:pageload'))
      if (window.WOW) new window.WOW({ live: false }).init()
    }, 30)
    return () => clearTimeout(t)
  }, [pathname, title])
  const onClick = (e) => {
    const a = e.target.closest('a')
    if (!a) return
    const href = a.getAttribute('href') || ''
    if (/^(https?:|mailto:|tel:|#)/.test(href)) return
    if (href.endsWith('.html')) {
      e.preventDefault()
      const clean = href.replace(/\.html$/, '')
      navigate(clean === 'index' ? '/' : '/' + clean)
    }
  }
  return <div onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
}
