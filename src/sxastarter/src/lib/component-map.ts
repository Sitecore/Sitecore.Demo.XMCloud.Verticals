// Below are built-in components that are available in the app, it's recommended to keep them as is
import { BYOCWrapper, NextjsJssComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';
// end of built-in components

// Components imported from the app itself
import * as CdpPageView from 'src/components/CdpPageView';
import * as ColumnSplitter from 'src/components/ColumnSplitter';
import * as Container from 'src/components/Container';
import * as ContentBlock from 'src/components/ContentBlock';
import * as FEAASScripts from 'src/components/FEAASScripts';
import * as Image from 'src/components/Image';
import * as LinkList from 'src/components/LinkList';
import * as Navigation from 'src/components/Navigation';
import * as PageContent from 'src/components/PageContent';
import * as PartialDesignDynamicPlaceholder from 'src/components/PartialDesignDynamicPlaceholder';
import * as Promo from 'src/components/Promo';
import * as RichText from 'src/components/RichText';
import * as RowSplitter from 'src/components/RowSplitter';
import * as SitecoreStyles from 'src/components/SitecoreStyles';
import * as Title from 'src/components/Title';

import * as Breadcrumb from 'src/components/Navigation/Breadcrumb';
import * as Eyebrow from 'src/components/Navigation/Eyebrow';
import * as Footer from 'src/components/Navigation/Footer';
import * as Header from 'src/components/Navigation/Header';

import * as CountUp from 'src/components/NonSitecore/CountUp';
import * as DottedAccent from 'src/components/NonSitecore/DottedAccent';
import * as IconAccent from 'src/components/NonSitecore/IconAccent';
import * as ParallaxBackgroundImage from 'src/components/NonSitecore/ParallaxBackgroundImage';

import * as Accordion from 'src/components/PageContent/Accordion';
import * as AppPromo from 'src/components/PageContent/AppPromo';
import * as ArticleDetails from 'src/components/PageContent/ArticleDetails';
import * as ArticleList from 'src/components/PageContent/ArticleList';
import * as AuthorDetails from 'src/components/PageContent/AuthorDetails';
import * as AuthorList from 'src/components/PageContent/AuthorList';
import * as AuthorWidget from 'src/components/PageContent/AuthorWidget';
import * as Carousel from 'src/components/PageContent/Carousel';
import * as Comparison from 'src/components/PageContent/Comparison';
import * as CtaBanner from 'src/components/PageContent/CtaBanner';
import * as DocumentsList from 'src/components/PageContent/DocumentsList';
import * as Features from 'src/components/PageContent/Features';
import * as FiveColumnCta from 'src/components/PageContent/FiveColumnCta';
import * as FourColumnCta from 'src/components/PageContent/FourColumnCta';
import * as HeadingCta from 'src/components/PageContent/HeadingCta';
import * as Hero from 'src/components/PageContent/Hero';
import * as HeroBanner from 'src/components/PageContent/HeroBanner';
import * as ImageGallery from 'src/components/PageContent/ImageGallery';
import * as PageBackground from 'src/components/PageContent/PageBackground';
import * as ParallaxBanner from 'src/components/PageContent/ParallaxBanner';
import * as ProjectDetails from 'src/components/PageContent/ProjectDetails';
import * as ProjectList from 'src/components/PageContent/ProjectList';
import * as PromoCta from 'src/components/PageContent/PromoCta';
import * as Questions from 'src/components/PageContent/Questions';
import * as Quote from 'src/components/PageContent/Quote';
import * as StatsCounter from 'src/components/PageContent/StatsCounter';
import * as Testimonials from 'src/components/PageContent/Testimonials';
import * as ThreeColumnCta from 'src/components/PageContent/ThreeColumnCta';
import * as TwoColumnCta from 'src/components/PageContent/TwoColumnCta';

import * as ApplicationForm from 'src/components/Utilities/ApplicationForm';
import * as ContactForm from 'src/components/Utilities/ContactForm';
import * as LanguageSwitcher from 'src/components/Utilities/LanguageSwitcher';
import * as LoanCalculator from 'src/components/Utilities/LoanCalculator';
import * as ThemeSwitcher from 'src/components/Utilities/ThemeSwitcher';

// Components must be registered with to match the string key with component name in Sitecore
export const componentMap = new Map<string, NextjsJssComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['CdpPageView', CdpPageView],
  ['ColumnSplitter', ColumnSplitter],
  ['Container', Container],
  ['ContentBlock', ContentBlock],
  ['FEAASScripts', FEAASScripts],
  ['Image', Image],
  ['LinkList', LinkList],
  ['Navigation', Navigation],
  ['PageContent', PageContent],
  ['PartialDesignDynamicPlaceholder', PartialDesignDynamicPlaceholder],
  ['Promo', Promo],
  ['RichText', RichText],
  ['RowSplitter', RowSplitter],
  ['SitecoreStyles', SitecoreStyles],
  ['Title', Title],
  // Navigation components
  ['Breadcrumb', Breadcrumb],
  ['Eyebrow', Eyebrow],
  ['Footer', Footer],
  ['Header', Header],
  // Non-Sitecore components
  ['CountUp', CountUp],
  ['DottedAccent', DottedAccent],
  ['IconAccent', IconAccent],
  ['ParallaxBackgroundImage', ParallaxBackgroundImage],
  // PageContent components
  ['Accordion', Accordion],
  ['AppPromo', AppPromo],
  ['ArticleDetails', ArticleDetails],
  ['ArticleList', ArticleList],
  ['AuthorDetails', AuthorDetails],
  ['AuthorList', AuthorList],
  ['AuthorWidget', AuthorWidget],
  ['Carousel', Carousel],
  ['Comparison', Comparison],
  ['CtaBanner', CtaBanner],
  ['DocumentsList', DocumentsList],
  ['Features', Features],
  ['FiveColumnCta', FiveColumnCta],
  ['FourColumnCta', FourColumnCta],
  ['HeadingCta', HeadingCta],
  ['Hero', Hero],
  ['HeroBanner', HeroBanner],
  ['ImageGallery', ImageGallery],
  ['PageBackground', PageBackground],
  ['ParallaxBanner', ParallaxBanner],
  ['ProjectDetails', ProjectDetails],
  ['ProjectList', ProjectList],
  ['PromoCta', PromoCta],
  ['Questions', Questions],
  ['Quote', Quote],
  ['StatsCounter', StatsCounter],
  ['Testimonials', Testimonials],
  ['ThreeColumnCta', ThreeColumnCta],
  ['TwoColumnCta', TwoColumnCta],
  // Utilities components
  ['ApplicationForm', ApplicationForm],
  ['ContactForm', ContactForm],
  ['LanguageSwitcher', LanguageSwitcher],
  ['LoanCalculator', LoanCalculator],
  ['ThemeSwitcher', ThemeSwitcher],
]);

export default componentMap;
