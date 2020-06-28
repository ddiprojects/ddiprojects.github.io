import React from 'react'
import About from '../../components/About'
import MenuMobileOverlay from '../../components/MenuMobileOverlay'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AboutUs() {
    return (
        <>
        <div className="body_wrap">
            <div className="page_wrap">
                <a className="impacto_patronus_skip_link skip_to_content_link" href="#content_skip_link_anchor" tabIndex={1}>Skip to content</a>
                <a className="impacto_patronus_skip_link skip_to_footer_link" href="#footer_skip_link_anchor" tabIndex={1}>Skip
  to footer</a>
                <Navbar />
                <MenuMobileOverlay />
                <About/>
                <a id="footer_skip_link_anchor" className="impacto_patronus_skip_link_anchor" href="#" />
                <Footer />
            </div>{/* /.page_wrap */}
        </div>

    </>
    )
}