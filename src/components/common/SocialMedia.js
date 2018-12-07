import React from 'react'
import { TiSocialDribbbleCircular, TiSocialGithubCircular, TiSocialLinkedinCircular, TiMail } from 'react-icons/ti'

import './SocialMedia.css'

const SocialMedia = () => (
  <div className="sm-icon-group grid-4-col">
    <TiSocialLinkedinCircular />
    <TiSocialGithubCircular />
    <TiSocialDribbbleCircular />
    <TiMail />
  </div>
)

export default SocialMedia