import React from "react";
import { Arrow } from "./Arrow";
import { Border } from "./Border";
import { Button } from "./Button";
import { Extras } from "./Extras";
import { Heading } from "./Heading";
import { IconBoxSc } from "./IconBoxSc";
import { IconButton } from "./IconButton";
import { IconComponentNode } from "./IconComponentNode";
import { NamecandidateNameArrowScore101 } from "./NamecandidateNameArrowScore101";
import { NamecandidateNameTurnedInNotScore101 } from "./NamecandidateNameTurnedInNotScore101";
import { NamecandidateNameTurnedInNotScore102 } from "./NamecandidateNameTurnedInNotScore102";
import { NamecandidateNameTurnedInNotScore103 } from "./NamecandidateNameTurnedInNotScore103";
import { NamecandidateNameTurnedInNotScore104 } from "./NamecandidateNameTurnedInNotScore104";
import { ShareBar } from "./ShareBar";
import { StickyNav } from "./StickyNav";
// import { SubscribeForm } from "./SubscribeForm";
import { TurnedInNot } from "./TurnedInNot";
import { VideoButton } from "./VideoButton";
// import { WidgetHeadline } from "./WidgetHeadline";
import "./style.css";

export const ServicesDetail = () => {
  return (
    <div className="services-detail">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="desktop-base">
            <IconButton
              className="icon-button-3"
              colorMode="light"
              icon={<Arrow className="arrow-6" />}
              size="default"
              type="arrow"
              variant="default"
            />
          </div>
          <div className="desktop-base">
            <div className="header">
              <div className="holder-3">
                <div className="logo-bar">
                  <img className="default-2" alt="Default" src="default-1.svg" />
                </div>
                <div className="nav">
                  <div className="nav-item">
                    <div className="inner">
                      <div className="frame">
                        <div className="text-wrapper-5">Home</div>
                      </div>
                    </div>
                  </div>
                  <div className="nav-item">
                    <div className="inner-2">
                      <div className="services">About</div>
                    </div>
                  </div>
                  <div className="nav-item">
                    <div className="inner-2">
                      <div className="careers">Service</div>
                    </div>
                  </div>
                  <div className="nav-item">
                    <div className="inner-2">
                      <div className="text-wrapper-6">Contact</div>
                    </div>
                  </div>
                </div>
                <Extras
                  className="extras-instance"
                  colorMode="light"
                  hasCart={false}
                  hasIconGroup={false}
                  type="default"
                  visible={false}
                />
              </div>
              <Border className="border-instance" type="default" />
            </div>
          </div>
          <div className="content-2">
            <div className="page-header">
              <div className="container">
                <div className="wrap">
                  <div className="holder-4">
                    <div className="headline-meta">
                      <div className="UI-UX-strategy-may">Our service</div>
                    </div>
                    <div className="explore-our-new-2">Branding.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project-gallery">
                <div className="first-image">
                  <ShareBar
                    className="share-bar-instance"
                    colorMode="light"
                    layout="default"
                    socialNetworkDivClassName="share-bar-2"
                    socialNetworkDivClassNameOverride="share-bar-3"
                  />
                  <VideoButton
                    animation={false}
                    className="video-button-instance"
                    showText={false}
                    size="large"
                    type="blurred"
                    variant="default"
                  />
                </div>
              </div>
              <div className="project-details">
                <div className="project-details-2">
                  <div className="headline-3">
                    <div className="headline-meta">
                      <div className="UI-UX-strategy-may-2">IZHTECH</div>
                    </div>
                    <p className="p">Your Partner for Crafting Unforgettable Brand Identities</p>
                  </div>
                  <div className="excerpt">
                    <p className="at-izh-tech-we">
                      <span className="span">
                        At Izh-Tech, we firmly believe that a robust brand forms the very heart of a successful
                        business. Our conviction in this truth is what fuels our passion to provide a comprehensive
                        array of{" "}
                      </span>
                      <span className="text-wrapper-7">branding and design</span>
                      <span className="span">
                        {" "}
                        services aimed at not just helping you establish your brand, but nurturing its growth over time.
                      </span>
                    </p>
                  </div>
                  <div className="task">
                    <p className="text-wrapper-8">Our Comprehensive Suite of Branding and Design Services</p>
                    <p className="text-wrapper-9">
                      Our commitment to your brand’s success is reflected in our wide-ranging suite of services. Here’s
                      a closer look at what we offer:
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="container-2">
                <div className="div-4">
                  <div className="column">
                    <IconBoxSc
                      className="design-component-instance-node-2"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<TurnedInNot className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="Logo Creation"
                      text1="Your logo is the face of your brand. Our expert designers are dedicated to crafting a logo that encapsulates your brand&amp;#39;s essence."
                      variant="default"
                      visible={false}
                    />
                    <IconBoxSc
                      className="design-component-instance-node-2"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<IconComponentNode className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="Banner Design"
                      text1="Eye-catching banners for your website or marketing campaigns to capture attention effectively."
                      variant="default"
                      visible={false}
                    />
                    <IconBoxSc
                      className="design-component-instance-node-2"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<IconComponentNode className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="Brand Style Guide"
                      text1="A comprehensive guide that ensures consistency in your brand’s visual identity across all platforms."
                      variant="default"
                      visible={false}
                    />
                    <IconBoxSc
                      className="design-component-instance-node-2"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<IconComponentNode className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="Social Media Graphics"
                      text1="Engaging visuals for your social media profiles to enhance your online presence."
                      variant="default"
                      visible={false}
                    />
                    <IconBoxSc
                      className="design-component-instance-node-2"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<IconComponentNode className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="Illustrations"
                      text1="Unique and captivating illustrations to enhance your brand storytelling."
                      variant="default"
                      visible={false}
                    />
                  </div>
                  <div className="column">
                    <IconBoxSc
                      className="icon-box-SC-4"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<NamecandidateNameTurnedInNotScore101 className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="Business Card Design"
                      text1="A memorable business card is a powerful networking tool. We design cards that leave a lasting impression."
                      variant="default"
                      visible={false}
                    />
                    <IconBoxSc
                      className="design-component-instance-node-2"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<NamecandidateNameTurnedInNotScore102 className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="App Icons"
                      text1="Your app’s icon is often the first thing users see. We design icons that make a strong first impression."
                      variant="default"
                      visible={false}
                    />
                    <IconBoxSc
                      className="design-component-instance-node-2"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<NamecandidateNameTurnedInNotScore102 className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="Color Palette"
                      text1="Selecting a palette that evokes the right emotions and resonates with your target audience."
                      variant="default"
                      visible={false}
                    />
                    <IconBoxSc
                      className="design-component-instance-node-2"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<NamecandidateNameTurnedInNotScore102 className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="Ad Design Templates"
                      text1="Templates for advertisements that maintain your brand’s integrity."
                      variant="default"
                      visible={false}
                    />
                    <IconBoxSc
                      className="design-component-instance-node-2"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<NamecandidateNameTurnedInNotScore102 className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="Slide Deck Presentations"
                      text1="Engaging presentations that leave a lasting impact on your audience."
                      variant="default"
                      visible={false}
                    />
                  </div>
                  <div className="column">
                    <IconBoxSc
                      className="icon-box-SC-4"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<NamecandidateNameTurnedInNotScore103 className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="Letterhead Design"
                      text1="Professionalism starts with your letterhead. We create designs that convey trust and credibility."
                      variant="default"
                      visible={false}
                    />
                    <IconBoxSc
                      className="design-component-instance-node-2"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<NamecandidateNameTurnedInNotScore104 className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="Brand Typography"
                      text1="Crafting the perfect font selection to align with your brand’s voice and personality."
                      variant="default"
                      visible={false}
                    />
                    <IconBoxSc
                      className="design-component-instance-node-2"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<NamecandidateNameTurnedInNotScore104 className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="Miscellaneous Assets"
                      text1="Custom-designed graphics and assets tailored to your specific needs."
                      variant="default"
                      visible={false}
                    />
                    <IconBoxSc
                      className="design-component-instance-node-2"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<NamecandidateNameTurnedInNotScore104 className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="Email Templates"
                      text1={
                        <>
                          Professionally designed email templates to elevate your
                          <br />
                          communication.
                        </>
                      }
                      variant="default"
                      visible={false}
                    />
                    <IconBoxSc
                      className="design-component-instance-node-2"
                      divClassName="icon-box-SC-2"
                      divClassNameOverride="icon-box-SC-3"
                      iconGroupIcon={<NamecandidateNameTurnedInNotScore104 className="turned-in-not-instance" />}
                      iconGroupVariantDefaultTypeClassName="icon-box-SC-instance"
                      iconPosition="top"
                      iconVariant="contained"
                      text="Video Creation and Editing"
                      text1={
                        <>
                          From conceptualization to editing, we create compelling
                          <br />
                          videos to promote your brand.
                        </>
                      }
                      variant="default"
                      visible={false}
                    />
                  </div>
                </div>
              </div>
              <img className="intersect" alt="Intersect" src="intersect.svg" />
              <img className="intersect-2" alt="Intersect" src="image.svg" />
            </div>
            <div className="container-wrapper">
              <div className="container-2">
                <div className="div-4">
                  <div className="column-2">
                    <img className="p-ek-w-so" alt="P ek w so" src="p-5x-4ik-ek-w-so.jpg" />
                  </div>
                  <div className="column-3" />
                  <div className="column-4">
                    <Heading
                      className="design-component-instance-node-2"
                      divClassName="heading-instance"
                      divider={false}
                      dividerPosition="top"
                      subtitle
                      subtitlePosition="top"
                      text="OUR SERVICES"
                      text1="Tailor-Made Solutions for Every Business"
                      variant="minimal"
                    />
                    <div className="div-4">
                      <div className="div-5">
                        <Border className="border-instance" type="darker" />
                        <p className="text-wrapper-10">
                          Whether you’re a burgeoning startup endeavouring to carve out your brand’s presence or a
                          well-established enterprise seeking to invigorate your image, we’re here to provide
                          tailor-made branding solutions tailored to your company’s specific requisites. Our commitment
                          is to work closely with you, ensuring that your brand mirrors your values, aspirations, and
                          vision.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="container-2">
                <div className="div-4">
                  <div className="column-4">
                    <Heading
                      className="design-component-instance-node-2"
                      divClassName="heading-instance"
                      divider={false}
                      dividerPosition="top"
                      subtitle
                      subtitlePosition="top"
                      text="OUR PASSION"
                      text1="Guiding Businesses to Forge Impactful Brands"
                      variant="minimal"
                    />
                    <div className="div-4">
                      <div className="div-5">
                        <Border className="border-instance" type="darker" />
                        <p className="text-wrapper-10">
                          Our fervour lies in guiding businesses to forge impactful, enduring brands. Connect with us to
                          delve into the realm of Izh-Tech’s branding and design services. Discover how we can
                          collaborate with you to construct a formidable brand identity that effortlessly distinguishes
                          itself within your industry.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="column-3" />
                  <div className="column-2">
                    <img className="p-ek-w-so" alt="P ek w so" src="image.jpg" />
                    <StickyNav
                      className="sticky-nav-instance"
                      colorMode="light"
                      navGroupIconButtonIcon={<NamecandidateNameArrowScore101 className="arrow-7" color="#161519" />}
                      override={<Arrow className="arrow-6" />}
                      text="Next service"
                      text1="Web app"
                      variant="default"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="section-2">
              <div className="container-2">
                <div className="row">
                  <div className="div-5">
                    <Heading
                      className="design-component-instance-node-2"
                      curiousAboutClassName="heading-2"
                      divClassName="design-component-instance-node-3"
                      divider={false}
                      dividerPosition="top"
                      subtitle
                      subtitlePosition="top"
                      text="LET’S COLLABORATE"
                      text1={
                        <>
                          Send us an email, <br />
                          to discuss a new project.
                        </>
                      }
                      variant="minimal"
                    />
                  </div>
                  <div className="button-wrapper">
                    <Button
                      className="button-3"
                      color="default"
                      icon={<NamecandidateNameArrowScore101 className="arrow-7" color="white" />}
                      iconAfter
                      iconBefore={false}
                      size="default"
                      text="Contact Us"
                      type="default"
                      variant="default"
                    />
                  </div>
                </div>
                <div className="border-wrapper">
                  <Border className="border-2" type="darker" />
                </div>
                <div className="row-2">
                  <div className="div-5">
                    <p className="we-re-a-team-of">
                      <span className="text-wrapper-11">We&#39;re </span>
                      <span className="text-wrapper-12">a team of creatives</span>
                      <span className="text-wrapper-11">
                        {" "}
                        who are excited about unique ideas and help digital and fin-tech companies{" "}
                      </span>
                      <span className="text-wrapper-12">to create amazing identity</span>
                      <span className="text-wrapper-11">.</span>
                    </p>
                  </div>
                  <div className="column-5" />
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="wrap-wrapper">
                <div className="div-4">
                  <div className="col">
                    <img className="widget" alt="Widget" src="widget.svg" />
                    <div className="fb-ig-tw-be-wrapper">
                      <div className="fb-ig-tw-be">
                        Fb.&nbsp;&nbsp;/&nbsp;&nbsp;Ig.&nbsp;&nbsp;/&nbsp;


                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
</footer>
</div>
</div>
</div>
</div>
);
                    }
                    export default ServicesDetail ;