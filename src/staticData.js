import overIcon from './assets/svgs/overview.svg'
import marketIcon from './assets/svgs/research.svg'
import launchIcon from './assets/svgs/launch.svg'
import capitalIcon from './assets/svgs/capital.svg'

export const staticData = {
  sideBarTabs: [
    {
      label: 'Business overview', scrollId: 'overview', icon: overIcon, subMenu: [
        { label: 'Business viability', scrollId: 'business_viability', icon: marketIcon },
        { label: 'Business Overview', scrollId: 'business_overview', icon: marketIcon },
        { label: 'Monetization strategies', scrollId: 'monotization_strategies', icon: marketIcon },
        { label: 'User pain points', scrollId: 'user_pain_points', icon: marketIcon },
        { label: 'Revenue & market opportunities', scrollId: 'market_opportunities', icon: marketIcon },
        { label: 'Potential Risks', scrollId: 'potential_risks', icon: marketIcon },
        { label: 'Why now', scrollId: 'why_now', icon: marketIcon },
        // { label: 'Validate unknown factors', scrollId: 'unknown_factors', icon: marketIcon },
      ]
    },
    {
      label: 'Market Research', scrollId: 'research', icon: marketIcon, subMenu: [
        { label: 'Trends in the market sector', scrollId: 'trends_market', icon: marketIcon },
        { label: 'Comptitive analysis', scrollId: 'competitive_analysis', icon: marketIcon },
        { label: 'Market size and growth potential', scrollId: 'market_size', icon: marketIcon },
        { label: 'Consumer behaviour', scrollId: 'consumer_behavior', icon: marketIcon },
        { label: 'Customer Segmentation', scrollId: 'customer_segmentation', icon: marketIcon },
        { label: 'Regulatory Environment', scrollId: 'regulatory_environment', icon: marketIcon },
        { label: 'Key Consideration', scrollId: 'key_consideration', icon: marketIcon },
      ]
    },
    {
      label: 'Launch and scale', scrollId: 'launch', icon: launchIcon, subMenu: [
        { label: 'MVP Roadmap', scrollId: 'mvp_roadmap', icon: marketIcon },
        { label: 'Hiring roadmap and cost', scrollId: 'hiring_roadmap', icon: marketIcon },
        { label: 'Operational cost', scrollId: 'operational_cost', icon: marketIcon },
        { label: 'Tech stack', scrollId: 'tech_stack', icon: marketIcon },
        { label: 'Code/no code', scrollId: 'code', icon: marketIcon },
        { label: 'Analytics and metrics', scrollId: 'analytics_metrics', icon: marketIcon },
        { label: 'Distribution channels', scrollId: 'distribution_chanels', icon: marketIcon },
        { label: 'Customer retention', scrollId: 'customer_retention', icon: marketIcon },
        { label: 'Website FAQs', scrollId: 'website_faqs', icon: marketIcon },
        { label: 'SEO Terms', scrollId: 'seo_terms', icon: marketIcon },
      ]
    },
    {
      label: 'Raise capital', scrollId: 'capital', icon: capitalIcon, subMenu: [
        { label: 'Elevator Pitch', scrollId: 'elevator_pitch', icon: marketIcon },
        { label: 'Business Overview', scrollId: 'research', icon: marketIcon },
        { label: 'Pitch Deck', scrollId: 'pitch_deck', icon: marketIcon },
        { label: 'Pitch Preperation', scrollId: 'pitch_preperation', icon: marketIcon },
        { label: 'Valuation', scrollId: 'valuation', icon: marketIcon },
        { label: 'Investor outreach', scrollId: 'investor_outreach', icon: marketIcon },
        { label: 'Investor concerns', scrollId: 'investor_concerns', icon: marketIcon },
        { label: 'Business Introduction', scrollId: 'buiness_intro', icon: marketIcon },
      ]
    },
  ]
}