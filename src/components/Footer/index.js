import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitch, FaYoutube } from 'react-icons/fa'
import{FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink,SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconsLink} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';



const toggleHome = () => {
    scroll.scrollToTop()
}

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About as</FooterLinkTitle>
                            <FooterLink to="/#">How its works</FooterLink>
                            <FooterLink to="/#">Falcon9</FooterLink>
                            <FooterLink to="/#">Careers</FooterLink>
                            <FooterLink to="/#">Investors</FooterLink>
                            <FooterLink to="/#">Terms of service</FooterLink>                      
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLink to="/#">Contact</FooterLink>
                            <FooterLink to="/#">Support</FooterLink>
                            <FooterLink to="/#">Destianations</FooterLink>
                            <FooterLink to="/#">Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/#">Submit Videos</FooterLink>
                            <FooterLink to="/#">Ambassadors</FooterLink>
                            <FooterLink to="/#">Agency</FooterLink>
                            <FooterLink to="/#">Influencer</FooterLink>
                            <FooterLink to="/#">Terms of service</FooterLink>                      
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/#">Instegram</FooterLink>
                            <FooterLink to="/#">Facebook</FooterLink>
                            <FooterLink to="/#">YouTube</FooterLink>
                            <FooterLink to="/#">Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                        dollar
                        </SocialLogo>
                        <WebsiteRights>dollar {new Date().getFullYear()} All right reserved</WebsiteRights>
                            <SocialIcons>
                                <SocialIconsLink href="https://www.instagram.com/spacex/" target="_blank" aria-label="Instegram"><FaInstagram/></SocialIconsLink>
                                <SocialIconsLink href="https://www.youtube.com/spacex" target="_blank" aria-label="YouTube"><FaYoutube/></SocialIconsLink>
                                <SocialIconsLink href="https://twitter.com/elonmusk" target="_blank" aria-label="Twitter"><FaTwitch/></SocialIconsLink>
                                <SocialIconsLink href="https://www.linkedin.com/company/spacex/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconsLink>
                            </SocialIcons>     
                    </SocialMediaWrap>
                </SocialMedia>
        </FooterWrap>
    </FooterContainer>

  )
}

export default Footer