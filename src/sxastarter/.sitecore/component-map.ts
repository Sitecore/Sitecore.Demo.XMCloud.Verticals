// Below are built-in components that are available in the app, it's recommended to keep them as is
import { BYOCWrapper, NextjsContentSdkComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';
// end of built-in components

// Components imported from the app itself
import * as Title from 'src/components/Title';
import * as RowSplitter from 'src/components/RowSplitter';
import * as RichText from 'src/components/RichText';
import * as Promo from 'src/components/Promo';
import * as PartialDesignDynamicPlaceholder from 'src/components/PartialDesignDynamicPlaceholder';
import * as PageContent from 'src/components/PageContent';
import * as Navigation from 'src/components/Navigation';
import * as LinkList from 'src/components/LinkList';
import * as Image from 'src/components/Image';
import * as ContentBlock from 'src/components/ContentBlock';
import * as Container from 'src/components/Container';
import * as ColumnSplitter from 'src/components/ColumnSplitter';
import * as ThemeSwitcher from 'src/components/Utilities/ThemeSwitcher';
import * as LoanCalculator from 'src/components/Utilities/LoanCalculator';
import * as LanguageSwitcher from 'src/components/Utilities/LanguageSwitcher';
import * as ContactForm from 'src/components/Utilities/ContactForm';
import * as ApplicationForm from 'src/components/Utilities/ApplicationForm';
import * as TwoColumnCta from 'src/components/PageContent/TwoColumnCta';
import * as ThreeColumnCta from 'src/components/PageContent/ThreeColumnCta';
import * as Testimonials from 'src/components/PageContent/Testimonials';
import * as StatsCounter from 'src/components/PageContent/StatsCounter';
import * as Quote from 'src/components/PageContent/Quote';
import * as Questions from 'src/components/PageContent/Questions';
import * as PromoCta from 'src/components/PageContent/PromoCta';
import * as ProjectList from 'src/components/PageContent/ProjectList';
import * as ProjectDetails from 'src/components/PageContent/ProjectDetails';
import * as ParallaxBanner from 'src/components/PageContent/ParallaxBanner';
import * as PageBackground from 'src/components/PageContent/PageBackground';
import * as ImageGallery from 'src/components/PageContent/ImageGallery';
import * as HeroBanner from 'src/components/PageContent/HeroBanner';
import * as Hero from 'src/components/PageContent/Hero';
import * as HeadingCta from 'src/components/PageContent/HeadingCta';
import * as FourColumnCta from 'src/components/PageContent/FourColumnCta';
import * as FiveColumnCta from 'src/components/PageContent/FiveColumnCta';
import * as Features from 'src/components/PageContent/Features';
import * as DocumentsList from 'src/components/PageContent/DocumentsList';
import * as CtaBanner from 'src/components/PageContent/CtaBanner';
import * as Comparison from 'src/components/PageContent/Comparison';
import * as Carousel from 'src/components/PageContent/Carousel';
import * as AuthorWidget from 'src/components/PageContent/AuthorWidget';
import * as AuthorList from 'src/components/PageContent/AuthorList';
import * as AuthorDetails from 'src/components/PageContent/AuthorDetails';
import * as ArticleList from 'src/components/PageContent/ArticleList';
import * as ArticleDetails from 'src/components/PageContent/ArticleDetails';
import * as AppPromo from 'src/components/PageContent/AppPromo';
import * as Accordion from 'src/components/PageContent/Accordion';
import * as ParallaxBackgroundImage from 'src/components/NonSitecore/ParallaxBackgroundImage';
import * as IconAccent from 'src/components/NonSitecore/IconAccent';
import * as DottedAccent from 'src/components/NonSitecore/DottedAccent';
import * as CountUp from 'src/components/NonSitecore/CountUp';
import * as Header from 'src/components/Navigation/Header';
import * as Footer from 'src/components/Navigation/Footer';
import * as Eyebrow from 'src/components/Navigation/Eyebrow';
import * as Breadcrumb from 'src/components/Navigation/Breadcrumb';


// Components must be registered within the map to match the string key with component name in Sitecore
export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['Title', Title],
  ['RowSplitter', RowSplitter],
  ['RichText', RichText],
  ['Promo', Promo],
  ['PartialDesignDynamicPlaceholder', PartialDesignDynamicPlaceholder],
  ['PageContent', PageContent],
  ['Navigation', Navigation],
  ['LinkList', LinkList],
  ['Image', Image],
  ['ContentBlock', ContentBlock],
  ['Container', Container],
  ['ColumnSplitter', ColumnSplitter],
  ['ThemeSwitcher', ThemeSwitcher],
  ['LoanCalculator', LoanCalculator],
  ['LanguageSwitcher', LanguageSwitcher],
  ['ContactForm', ContactForm],
  ['ApplicationForm', ApplicationForm],
  ['TwoColumnCta', TwoColumnCta],
  ['ThreeColumnCta', ThreeColumnCta],
  ['Testimonials', Testimonials],
  ['StatsCounter', StatsCounter],
  ['Quote', Quote],
  ['Questions', Questions],
  ['PromoCta', PromoCta],
  ['ProjectList', ProjectList],
  ['ProjectDetails', ProjectDetails],
  ['ParallaxBanner', ParallaxBanner],
  ['PageBackground', PageBackground],
  ['ImageGallery', ImageGallery],
  ['HeroBanner', HeroBanner],
  ['Hero', Hero],
  ['HeadingCta', HeadingCta],
  ['FourColumnCta', FourColumnCta],
  ['FiveColumnCta', FiveColumnCta],
  ['Features', Features],
  ['DocumentsList', DocumentsList],
  ['CtaBanner', CtaBanner],
  ['Comparison', Comparison],
  ['Carousel', Carousel],
  ['AuthorWidget', AuthorWidget],
  ['AuthorList', AuthorList],
  ['AuthorDetails', AuthorDetails],
  ['ArticleList', ArticleList],
  ['ArticleDetails', ArticleDetails],
  ['AppPromo', AppPromo],
  ['Accordion', Accordion],
  ['ParallaxBackgroundImage', ParallaxBackgroundImage],
  ['IconAccent', IconAccent],
  ['DottedAccent', DottedAccent],
  ['CountUp', CountUp],
  ['Header', Header],
  ['Footer', Footer],
  ['Eyebrow', Eyebrow],
  ['Breadcrumb', Breadcrumb],
]);

export default componentMap;
