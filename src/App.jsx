import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Page from './Page.jsx'
import titles from './content/titles.json'
import c_notfound from './content/404.html?raw'
import c_about from './content/about.html?raw'
import c_blog_single from './content/blog-single.html?raw'
import c_blog from './content/blog.html?raw'
import c_contact from './content/contact.html?raw'
import c_faqs from './content/faqs.html?raw'
import c_home_2 from './content/home-2.html?raw'
import c_home_slider from './content/home-slider.html?raw'
import c_home_video from './content/home-video.html?raw'
import c_image_gallery from './content/image-gallery.html?raw'
import c_index from './content/index.html?raw'
import c_pricing from './content/pricing.html?raw'
import c_service_equine_therapy from './content/service-equine-therapy.html?raw'
import c_service_horse_rescue_boarding from './content/service-horse-rescue-boarding.html?raw'
import c_service_leadership from './content/service-leadership.html?raw'
import c_service_pony_parties from './content/service-pony-parties.html?raw'
import c_service_riding_lessons from './content/service-riding-lessons.html?raw'
import c_service_show_jumping_dressage from './content/service-show-jumping-dressage.html?raw'
import c_service_trails_safari from './content/service-trails-safari.html?raw'
import c_services from './content/services.html?raw'
import c_team_single from './content/team-single.html?raw'
import c_team from './content/team.html?raw'
import c_testimonials from './content/testimonials.html?raw'
import c_video_gallery from './content/video-gallery.html?raw'

export default function App() {
  return (
    <Routes>
      <Route path="/404" element={<Page html={c_notfound} title={titles['404.html']} />} />
      <Route path="/404.html" element={<Page html={c_notfound} title={titles['404.html']} />} />
      <Route path="*" element={<Page html={c_notfound} title={titles['404.html']} />} />
      <Route path="/about" element={<Page html={c_about} title={titles['about.html']} />} />
      <Route path="/about.html" element={<Page html={c_about} title={titles['about.html']} />} />
      <Route path="/blog-single" element={<Page html={c_blog_single} title={titles['blog-single.html']} />} />
      <Route path="/blog-single.html" element={<Page html={c_blog_single} title={titles['blog-single.html']} />} />
      <Route path="/blog" element={<Page html={c_blog} title={titles['blog.html']} />} />
      <Route path="/blog.html" element={<Page html={c_blog} title={titles['blog.html']} />} />
      <Route path="/contact" element={<Page html={c_contact} title={titles['contact.html']} />} />
      <Route path="/contact.html" element={<Page html={c_contact} title={titles['contact.html']} />} />
      <Route path="/faqs" element={<Page html={c_faqs} title={titles['faqs.html']} />} />
      <Route path="/faqs.html" element={<Page html={c_faqs} title={titles['faqs.html']} />} />
      <Route path="/home-2" element={<Page html={c_home_2} title={titles['home-2.html']} />} />
      <Route path="/home-2.html" element={<Page html={c_home_2} title={titles['home-2.html']} />} />
      <Route path="/home-slider" element={<Page html={c_home_slider} title={titles['home-slider.html']} />} />
      <Route path="/home-slider.html" element={<Page html={c_home_slider} title={titles['home-slider.html']} />} />
      <Route path="/home-video" element={<Page html={c_home_video} title={titles['home-video.html']} />} />
      <Route path="/home-video.html" element={<Page html={c_home_video} title={titles['home-video.html']} />} />
      <Route path="/image-gallery" element={<Page html={c_image_gallery} title={titles['image-gallery.html']} />} />
      <Route path="/image-gallery.html" element={<Page html={c_image_gallery} title={titles['image-gallery.html']} />} />
      <Route path="/" element={<Page html={c_index} title={titles['index.html']} />} />
      <Route path="/pricing" element={<Page html={c_pricing} title={titles['pricing.html']} />} />
      <Route path="/pricing.html" element={<Page html={c_pricing} title={titles['pricing.html']} />} />
      <Route path="/service-equine-therapy" element={<Page html={c_service_equine_therapy} title={titles['service-equine-therapy.html']} />} />
      <Route path="/service-equine-therapy.html" element={<Page html={c_service_equine_therapy} title={titles['service-equine-therapy.html']} />} />
      <Route path="/service-horse-rescue-boarding" element={<Page html={c_service_horse_rescue_boarding} title={titles['service-horse-rescue-boarding.html']} />} />
      <Route path="/service-horse-rescue-boarding.html" element={<Page html={c_service_horse_rescue_boarding} title={titles['service-horse-rescue-boarding.html']} />} />
      <Route path="/service-leadership" element={<Page html={c_service_leadership} title={titles['service-leadership.html']} />} />
      <Route path="/service-leadership.html" element={<Page html={c_service_leadership} title={titles['service-leadership.html']} />} />
      <Route path="/service-pony-parties" element={<Page html={c_service_pony_parties} title={titles['service-pony-parties.html']} />} />
      <Route path="/service-pony-parties.html" element={<Page html={c_service_pony_parties} title={titles['service-pony-parties.html']} />} />
      <Route path="/service-riding-lessons" element={<Page html={c_service_riding_lessons} title={titles['service-riding-lessons.html']} />} />
      <Route path="/service-riding-lessons.html" element={<Page html={c_service_riding_lessons} title={titles['service-riding-lessons.html']} />} />
      <Route path="/service-show-jumping-dressage" element={<Page html={c_service_show_jumping_dressage} title={titles['service-show-jumping-dressage.html']} />} />
      <Route path="/service-show-jumping-dressage.html" element={<Page html={c_service_show_jumping_dressage} title={titles['service-show-jumping-dressage.html']} />} />
      <Route path="/service-trails-safari" element={<Page html={c_service_trails_safari} title={titles['service-trails-safari.html']} />} />
      <Route path="/service-trails-safari.html" element={<Page html={c_service_trails_safari} title={titles['service-trails-safari.html']} />} />
      <Route path="/services" element={<Page html={c_services} title={titles['services.html']} />} />
      <Route path="/services.html" element={<Page html={c_services} title={titles['services.html']} />} />
      <Route path="/team-single" element={<Page html={c_team_single} title={titles['team-single.html']} />} />
      <Route path="/team-single.html" element={<Page html={c_team_single} title={titles['team-single.html']} />} />
      <Route path="/team" element={<Page html={c_team} title={titles['team.html']} />} />
      <Route path="/team.html" element={<Page html={c_team} title={titles['team.html']} />} />
      <Route path="/testimonials" element={<Page html={c_testimonials} title={titles['testimonials.html']} />} />
      <Route path="/testimonials.html" element={<Page html={c_testimonials} title={titles['testimonials.html']} />} />
      <Route path="/video-gallery" element={<Page html={c_video_gallery} title={titles['video-gallery.html']} />} />
      <Route path="/video-gallery.html" element={<Page html={c_video_gallery} title={titles['video-gallery.html']} />} />
    </Routes>
  )
}
