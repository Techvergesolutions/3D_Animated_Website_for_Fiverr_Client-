import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">
        <div className="footer-social-media-container">
          <div className="social-media-content fade-in-move-on-scroll">
            <div className="fade-in-on-scroll">
              <div>Follow us</div>
            </div>
            <a href="https://instagram.com" target="_blank" className="social-media-link w-inline-block">
              <img src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b596060d25401713e4cacd_instagram.svg" loading="lazy" alt="" className="social-media-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" className="social-media-link w-inline-block">
              <img src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b596060d2540a542e4cace_twitter.svg" loading="lazy" alt="" className="social-media-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="social-media-link w-inline-block">
              <img src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b596060d2540459ce4cacb_linkedin.svg" loading="lazy" alt="" className="social-media-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" className="social-media-link w-inline-block">
              <img src="https://assets.website-files.com/63aee5793ca698452efe7f60/63b596060d254036e8e4cacc_facebook.svg" loading="lazy" alt="" className="social-media-icon" />
            </a>
          </div>
          <div data-w-id="a91eae88-2cd2-a6a2-03b1-a73f4b02afd9" className="made-container fade-in-move-on-scroll">
            <div className="made-by-azwedo">
              <div className="light-grey">
                Made<span className="text-gradient-1"></span> by <a href="https://webflow.com/templates/designers/azwedo" target="_blank" className="external-link">TechVergeSolutions</a>
              </div>
            </div>
            <div className="powered-by">
              <div className="light-grey">
                Powered by <a href="https://webflow.com" target="_blank" className="external-link">TechVergeSolutions</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-flex-container fade-in-move-on-scroll">
          <div className="footer-brand-content">
            <a href="/" data-w-id="a91eae88-2cd2-a6a2-03b1-a73f4b02afe9" aria-current="page" className="footer-logo-link w-inline-block w--current">
              <img src="https://assets.website-files.com/63aee5793ca698452efe7f60/63aef0ca7013f88f948d7443_Black%20-%20Black%20Logotype.svg" alt="" className="footer-image" />
            </a>
            <ul role="list" className="footer-list w-list-unstyled">
              <li className="footer-list-item">
                <a href="/template/style-guide" className="link w-inline-block">
                  <div>Style Guide</div>
                </a>
              </li>
              <li className="footer-list-item">
                <a href="/template/change-log" className="link w-inline-block">
                  <div>Change Log</div>
                </a>
              </li>
              <li className="footer-list-item">
                <a href="/template/licensing" className="link w-inline-block">
                  <div>Licensing</div>
                </a>
              </li>
              <li className="footer-list-item">
                <a href="/template/instructions" className="link w-inline-block">
                  <div>Instructions</div>
                </a>
              </li>
              <li className="footer-list-item">
                <a href="mailto:info@website.com?subject=Webflow%20Template%20Contact" className="link w-inline-block">
                  <div>https://techvergesolutions.com</div>
                </a>
              </li>
            </ul>
          </div>
          <div data-w-id="a91eae88-2cd2-a6a2-03b1-a73f4b02b005" className="footer-copyright">
            <div>Black ©2023</div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
