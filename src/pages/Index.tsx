
import React, { useEffect } from 'react';
import Header from '../components/Header';
import FeaturedArticle from '../components/FeaturedArticle';
import BlogCard from '../components/BlogCard';

const Index = () => {
  // Function to handle animations on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      if (el instanceof HTMLElement) {
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <FeaturedArticle 
        title="The Evolving Role of Quantity Surveyors in Australia's Construction Industry"
        excerpt="Discover how quantity surveying professionals are adapting to new technologies and methodologies in Australia's dynamic construction landscape."
        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2426&q=80"
        date="May 15, 2023"
        id="article1"
      />
      
      <section id="articles" className="py-20 container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Latest Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard 
            title="The Evolving Role of Quantity Surveyors in Australia's Construction Industry"
            excerpt="Discover how quantity surveying professionals are adapting to new technologies and methodologies in Australia's dynamic construction landscape."
            imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2426&q=80"
            date="May 15, 2023"
            id="article1"
            className="opacity-0 animate-on-scroll"
          />
          <BlogCard 
            title="Cost Management Strategies: How Quantity Surveyors Add Value to Projects"
            excerpt="Explore the strategic approaches quantity surveyors employ to optimize budgets and maximize value throughout the construction lifecycle."
            imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80"
            date="June 22, 2023"
            id="article2"
            className="opacity-0 animate-on-scroll"
          />
          <BlogCard 
            title="Sustainability and Quantity Surveying: Balancing Costs and Environmental Responsibility"
            excerpt="Learn how quantity surveyors in Melbourne are incorporating sustainable practices into their cost assessments and recommendations."
            imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80"
            date="July 8, 2023"
            id="article3"
            className="opacity-0 animate-on-scroll"
          />
        </div>
      </section>
      
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6 mx-auto">
          <article id="article1" className="max-w-3xl mx-auto blog-content">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Evolving Role of Quantity Surveyors in Australia's Construction Industry</h2>
            <p className="text-sm font-medium text-primary/60 mb-8">May 15, 2023</p>
            
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2426&q=80" 
              alt="Modern construction site with digital tablet in foreground" 
              className="w-full h-80 object-cover rounded-xl mb-8"
              loading="lazy"
            />
            
            <p>The construction industry in Australia has undergone significant transformations over the past decade, with technological advancements, changing regulatory environments, and evolving client expectations reshaping project delivery frameworks. At the center of these changes are <a href="https://bidkon.com.au/quantity-surveyors-melbourne/">Quantity Surveyors</a>, professionals whose roles have expanded far beyond traditional cost estimation and bill of quantities preparation.</p>
            
            <p>Today's quantity surveyors in Melbourne and across Australia are embracing new technologies, methodologies, and service offerings to provide enhanced value to clients throughout the construction lifecycle. This evolution reflects broader industry trends toward integrated project delivery, data-driven decision-making, and sustainable construction practices.</p>
            
            <h3>From Cost Consultants to Strategic Advisors</h3>
            
            <p>Historically, quantity surveyors primarily focused on measurement and costing of construction works. While these technical skills remain foundational, modern <a href="https://bidkon.com.au/quantity-surveyors-melbourne/">Quantity Surveyors in Melbourne</a> professionals now position themselves as strategic advisors who contribute to project success across multiple dimensions.</p>
            
            <p>This expanded role encompasses risk management, value engineering, procurement strategy, contractual advice, and dispute resolution. By integrating cost management with broader project objectives, quantity surveyors help clients navigate complex decision-making processes and balance competing priorities of time, cost, quality, and sustainability.</p>
            
            <h3>Digital Transformation and BIM Integration</h3>
            
            <p>The adoption of Building Information Modeling (BIM) represents one of the most significant technological shifts affecting quantity surveying practice. BIM enables the creation of detailed digital representations of built assets, incorporating physical and functional characteristics that support informed decision-making throughout the asset lifecycle.</p>
            
            <p>Forward-thinking quantity surveyors are embracing BIM capabilities to enhance measurement accuracy, improve cost forecasting, and facilitate collaborative working practices. The integration of quantity surveying functions with BIM workflows allows for real-time cost feedback on design changes, automated quantity takeoffs, and improved visualization of cost implications.</p>
            
            <p>Beyond BIM, <a href="https://bidkon.com.au/quantity-surveyors-melbourne/">Quantity Surveyors Melbourne</a> are leveraging a range of digital tools to enhance service delivery, including cloud-based collaboration platforms, automated reporting systems, and data analytics solutions. These technologies not only improve efficiency and accuracy but also enable quantity surveyors to generate valuable insights from project data.</p>
            
            <h3>Life Cycle Costing and Sustainability</h3>
            
            <p>As sustainability considerations become increasingly central to construction projects, quantity surveyors are expanding their focus beyond initial capital costs to encompass whole-life costing approaches. This shift recognizes that decisions made during design and construction phases have significant implications for operational costs, maintenance requirements, and environmental performance throughout an asset's lifetime.</p>
            
            <p>Quantity surveyors with expertise in life cycle costing help clients evaluate long-term financial implications of different design options, material selections, and building systems. This approach supports informed investment decisions that balance immediate budget constraints with long-term value considerations.</p>
            
            <p>Additionally, quantity surveyors are increasingly involved in sustainability certification processes, carbon footprint assessments, and environmental rating schemes. Their cost expertise helps translate sustainability ambitions into financially viable implementation strategies.</p>
            
            <h3>Specialized Knowledge and Sector Expertise</h3>
            
            <p>As construction projects become more complex and technically sophisticated, many quantity surveying practices are developing specialized expertise in particular sectors or project types. This specialization allows quantity surveyors to provide more tailored advice that reflects the unique challenges, opportunities, and benchmarks relevant to specific contexts.</p>
            
            <p>Whether focusing on healthcare facilities, infrastructure projects, residential developments, or industrial construction, sector specialists bring valuable insights regarding cost drivers, procurement options, and risk profiles. This depth of knowledge enhances the quality of cost planning advice and supports more accurate forecasting.</p>
            
            <h3>The Future of Quantity Surveying in Australia</h3>
            
            <p>Looking ahead, the quantity surveying profession in Australia is likely to continue evolving in response to industry trends and client needs. Key development areas include:</p>
            
            <ul>
              <li>Enhanced data analytics capabilities, including predictive modeling and pattern recognition to improve cost forecasting</li>
              <li>Greater integration with project management functions to provide comprehensive delivery solutions</li>
              <li>Expanded focus on social value assessment and community benefit measurement</li>
              <li>Development of specialized expertise in emerging construction methods, including modular construction and advanced manufacturing</li>
              <li>Increased emphasis on post-occupancy evaluation and performance measurement</li>
            </ul>
            
            <p>For clients navigating Australia's complex construction landscape, engaging experienced quantity surveyors with the right blend of technical expertise, industry knowledge, and strategic thinking remains a key factor in achieving successful project outcomes. As the profession continues to adapt and innovate, quantity surveyors will remain essential contributors to the delivery of built assets that meet functional requirements, commercial objectives, and sustainability goals.</p>
          </article>
          
          <div className="border-t border-border/30 my-16 max-w-3xl mx-auto"></div>
          
          <article id="article2" className="max-w-3xl mx-auto blog-content">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cost Management Strategies: How Quantity Surveyors Add Value to Projects</h2>
            <p className="text-sm font-medium text-primary/60 mb-8">June 22, 2023</p>
            
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80" 
              alt="Team of professionals analyzing project costs" 
              className="w-full h-80 object-cover rounded-xl mb-8"
              loading="lazy"
            />
            
            <p>In the increasingly complex and competitive construction industry, effective cost management has become a critical success factor for projects of all sizes. <a href="https://bidkon.com.au/quantity-surveyors-melbourne/">Quantity Surveyors</a> play a pivotal role in this domain, employing sophisticated strategies to optimize expenditure while maintaining project objectives related to quality, functionality, and timeline. This article explores the key approaches quantity surveyors in Melbourne and across Australia use to add tangible value throughout the project lifecycle.</p>
            
            <h3>Early Stage Cost Planning: Setting the Foundation</h3>
            
            <p>Perhaps the most significant opportunity to influence project costs occurs during the initial planning and design phases. Experienced quantity surveyors understand that decisions made at this stage establish the cost framework for the entire project, with diminishing ability to affect expenditure as design development progresses.</p>
            
            <p>Strategic cost planning involves establishing realistic budgets based on client objectives, market conditions, and project constraints. This includes:</p>
            
            <ul>
              <li>Developing detailed elemental cost plans that align with design intent</li>
              <li>Identifying cost-significant items requiring careful management</li>
              <li>Establishing appropriate contingencies based on risk assessment</li>
              <li>Providing cost feedback on design options to support informed decision-making</li>
              <li>Benchmarking proposals against comparable projects to validate assumptions</li>
            </ul>
            
            <p>By engaging <a href="https://bidkon.com.au/quantity-surveyors-melbourne/">Quantity Surveyors in Melbourne</a> from project inception, clients can benefit from cost-informed design development that reduces the likelihood of budget overruns and costly redesign iterations.</p>
            
            <h3>Value Engineering: Optimizing Value-to-Cost Ratios</h3>
            
            <p>Value engineering represents a systematic approach to analyzing function, quality, and cost relationships to achieve optimal value. Rather than simple cost-cutting, this methodology focuses on enhancing value by identifying and eliminating unnecessary expenditure without compromising essential project requirements.</p>
            
            <p>Quantity surveyors facilitate structured value engineering workshops that bring together design teams, contractors, and clients to explore alternative approaches. These collaborative sessions examine:</p>
            
            <ul>
              <li>Material specifications and potential substitutions</li>
              <li>Construction methods and sequencing options</li>
              <li>Design simplifications that maintain functionality</li>
              <li>Standardization opportunities to leverage economies of scale</li>
              <li>Life cycle cost implications of various options</li>
            </ul>
            
            <p>The value engineering process typically generates multiple cost-saving ideas, which are then evaluated based on their impact on project objectives, implementation feasibility, and potential risks. This structured approach ensures that cost optimization efforts enhance rather than compromise overall project value.</p>
            
            <h3>Procurement Strategy: Leveraging Market Dynamics</h3>
            
            <p>The selection of appropriate procurement routes significantly influences project costs, schedules, and risk profiles. <a href="https://bidkon.com.au/quantity-surveyors-melbourne/">Quantity Surveyors Melbourne</a> provide strategic advice on procurement approaches tailored to specific project requirements and market conditions.</p>
            
            <p>Key considerations in procurement strategy development include:</p>
            
            <ul>
              <li>Market capacity and competition levels among potential suppliers</li>
              <li>Project complexity and design completion status</li>
              <li>Client priorities regarding certainty, flexibility, and risk allocation</li>
              <li>Timeline constraints and potential for fast-tracking</li>
              <li>Opportunities for early contractor involvement and collaboration</li>
            </ul>
            
            <p>By developing customized procurement strategies, quantity surveyors help clients navigate market uncertainties and establish contractual frameworks that align commercial incentives with project objectives. This may involve traditional competitive tendering, two-stage approaches, negotiated contracts, or collaborative delivery models depending on specific circumstances.</p>
            
            <h3>Cost Control During Construction: Proactive Management</h3>
            
            <p>Once construction commences, effective cost control becomes essential to maintain budget alignment. Quantity surveyors implement robust systems to track expenditure, manage variations, and forecast final costs with increasing accuracy as works progress.</p>
            
            <p>Proactive cost management during construction includes:</p>
            
            <ul>
              <li>Regular cost reporting and variance analysis</li>
              <li>Rigorous assessment of variation requests and claims</li>
              <li>Cash flow monitoring and forecast refinement</li>
              <li>Value management of proposed design changes</li>
              <li>Documentation of cost impacts from project delays or disruptions</li>
            </ul>
            
            <p>By maintaining comprehensive cost information throughout construction, quantity surveyors provide clients with the transparency and insights needed to make informed decisions when issues arise. This ongoing vigilance helps contain costs within established parameters and provides early warning of potential budget pressures.</p>
            
            <h3>Final Account Settlement: Securing Fair Outcomes</h3>
            
            <p>As projects reach completion, quantity surveyors play a crucial role in final account negotiations, ensuring fair settlements that reflect contractual entitlements and actual work completed. This process requires detailed analysis of payment applications, variations, claims, and potential counterclaims.</p>
            
            <p>Quantity surveyors bring technical expertise and commercial acumen to these negotiations, helping clients avoid overpayment while maintaining constructive relationships with project delivery partners. Thorough documentation and clear audit trails established throughout the project facilitate efficient resolution of financial matters at completion.</p>
            
            <h3>Beyond Traditional Cost Management</h3>
            
            <p>While core cost management functions remain essential, forward-thinking quantity surveyors are expanding their value proposition to encompass broader commercial and strategic considerations. This may include:</p>
            
            <ul>
              <li>Funding and feasibility analysis for development projects</li>
              <li>Tax optimization strategies for capital expenditure</li>
              <li>Insurance valuation and replacement cost assessments</li>
              <li>Expert witness services for dispute resolution</li>
              <li>Portfolio-level cost benchmarking and optimization</li>
            </ul>
            
            <p>By combining technical quantity surveying expertise with commercial acumen and industry knowledge, <a href="https://bidkon.com.au/quantity-surveyors-melbourne/">Quantity Surveyors Melbourne</a> provide comprehensive support that extends beyond traditional cost management boundaries.</p>
            
            <h3>Selecting the Right Quantity Surveying Partner</h3>
            
            <p>Given the significant impact that effective cost management has on project outcomes, selecting the right quantity surveying partner represents an important decision for project owners and developers. Key selection criteria should include:</p>
            
            <ul>
              <li>Relevant experience in similar project types and sectors</li>
              <li>Technical capability and qualification of team members</li>
              <li>Understanding of local market conditions and supplier networks</li>
              <li>Demonstrated commitment to client objectives and collaborative working</li>
              <li>Investment in technologies that enhance service delivery</li>
            </ul>
            
            <p>By engaging well-qualified quantity surveyors with appropriate expertise, clients position their projects for successful cost outcomes that balance immediate budget constraints with long-term value considerations.</p>
          </article>
          
          <div className="border-t border-border/30 my-16 max-w-3xl mx-auto"></div>
          
          <article id="article3" className="max-w-3xl mx-auto blog-content">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainability and Quantity Surveying: Balancing Costs and Environmental Responsibility</h2>
            <p className="text-sm font-medium text-primary/60 mb-8">July 8, 2023</p>
            
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80" 
              alt="Sustainable building with solar panels" 
              className="w-full h-80 object-cover rounded-xl mb-8"
              loading="lazy"
            />
            
            <p>As environmental considerations increasingly influence construction and development decisions, the intersection of sustainability and cost management has become a critical domain for industry professionals. <a href="https://bidkon.com.au/quantity-surveyors-melbourne/">Quantity Surveyors</a> are uniquely positioned at this nexus, helping clients navigate the financial implications of sustainable design choices while supporting the achievement of environmental objectives. This article explores how quantity surveyors in Australia are integrating sustainability considerations into their practice.</p>
            
            <h3>The Business Case for Sustainable Construction</h3>
            
            <p>The perception that sustainable building practices inevitably increase costs has been challenged by growing evidence that thoughtfully designed green buildings can deliver substantial economic benefits alongside environmental advantages. Forward-thinking quantity surveyors help clients understand these potential benefits, which include:</p>
            
            <ul>
              <li>Reduced operational costs through energy and water efficiency</li>
              <li>Enhanced asset value and marketability</li>
              <li>Improved occupant productivity and wellbeing</li>
              <li>Risk mitigation regarding future regulatory changes</li>
              <li>Access to green financing and incentive programs</li>
            </ul>
            
            <p>By quantifying these benefits alongside initial capital costs, <a href="https://bidkon.com.au/quantity-surveyors-melbourne/">Quantity Surveyors in Melbourne</a> provide a more comprehensive financial picture that supports informed decision-making. This holistic approach often reveals that sustainable options offer compelling value propositions when viewed through a wider economic lens.</p>
            
            <h3>Life Cycle Cost Analysis: Beyond Initial Investment</h3>
            
            <p>Traditional cost planning focuses primarily on capital expenditure during construction. However, quantity surveyors with sustainability expertise recognize that initial costs represent just one component of a building's lifetime economic impact. Life cycle cost analysis (LCCA) extends the evaluation timeframe to encompass operational expenses, maintenance requirements, and end-of-life considerations.</p>
            
            <p>This approach involves assessing costs across several categories:</p>
            
            <ul>
              <li>Initial capital investment (construction and installation)</li>
              <li>Operational expenses (energy, water, waste management)</li>
              <li>Maintenance and repair requirements</li>
              <li>Replacement and refurbishment schedules</li>
              <li>Disposal and potential residual value</li>
            </ul>
            
            <p>Quantity surveyors employ sophisticated modeling techniques to project these costs over building lifespans, typically 25-50 years. By applying appropriate discount rates to future expenditures, they calculate net present values that allow meaningful comparison between different design approaches and system specifications.</p>
            
            <p>This analysis often reveals that options with higher initial costs may deliver significant savings over time, particularly for elements with substantial operational impacts such as HVAC systems, facade designs, and renewable energy installations.</p>
            
            <h3>Embodied Carbon Assessment and Cost Implications</h3>
            
            <p>As operational energy efficiency improves through better building standards, attention has shifted toward embodied carbon – the greenhouse gas emissions associated with material extraction, manufacturing, transport, and construction processes. <a href="https://bidkon.com.au/quantity-surveyors-melbourne/">Quantity Surveyors Melbourne</a> are increasingly incorporating embodied carbon assessment into their advisory services.</p>
            
            <p>This emerging practice area involves:</p>
            
            <ul>
              <li>Analyzing material specifications for carbon intensity</li>
              <li>Evaluating alternative materials and construction methods</li>
              <li>Assessing supply chain and transportation impacts</li>
              <li>Identifying options for carbon reduction and sequestration</li>
              <li>Balancing embodied carbon considerations with operational performance</li>
            </ul>
            
            <p>Quantity surveyors help clients understand potential cost implications of low-carbon alternatives, which may include material premiums, construction method adaptations, or certification requirements. They also monitor emerging carbon pricing mechanisms and regulatory developments that could influence future cost structures.</p>
            
            <h3>Certifications and Rating Systems: Navigating Compliance</h3>
            
            <p>Sustainability certifications such as Green Star, NABERS, and LEED have become increasingly important market differentiators in Australia's commercial property sector. Quantity surveyors with expertise in these rating systems provide valuable guidance on cost-effective pathways to certification.</p>
            
            <p>This specialized service includes:</p>
            
            <ul>
              <li>Analyzing certification requirements and point thresholds</li>
              <li>Identifying target credits that align with project priorities</li>
              <li>Costing compliance strategies for different certification levels</li>
              <li>Advising on documentation and verification processes</li>
              <li>Monitoring implementation to ensure certification achievement</li>
            </ul>
            
            <p>By developing strategic approaches to certification, quantity surveyors help clients maximize recognition for sustainability initiatives while managing associated costs effectively. This often involves identifying synergies between different credits and prioritizing measures that deliver multiple benefits.</p>
            
            <h3>Renewable Energy Integration: Financial Analysis</h3>
            
            <p>On-site renewable energy generation, particularly solar photovoltaic systems, represents an increasingly viable option for many Australian projects. Quantity surveyors provide comprehensive financial analysis of renewable energy investments, considering:</p>
            
            <ul>
              <li>System installation and connection costs</li>
              <li>Energy generation projections and consumption offsets</li>
              <li>Available incentives, rebates, and certificate schemes</li>
              <li>Maintenance requirements and system longevity</li>
              <li>Financial metrics including payback periods and IRR</li>
            </ul>
            
            <p>This analysis helps clients determine appropriate system sizing and implementation timing based on project-specific financial parameters. <a href="https://bidkon.com.au/quantity-surveyors-melbourne/">Quantity Surveyors in Melbourne</a> may also evaluate alternative procurement approaches such as power purchase agreements or leasing arrangements that reduce upfront capital requirements.</p>
            
            <h3>Sustainable Procurement: Supply Chain Considerations</h3>
            
            <p>Procurement strategies play a crucial role in achieving sustainability objectives while managing costs effectively. Quantity surveyors help clients develop approaches that consider environmental and social factors alongside financial considerations.</p>
            
            <p>Key elements of sustainable procurement advisory include:</p>
            
            <ul>
              <li>Developing specifications that incorporate sustainability criteria</li>
              <li>Establishing appropriate evaluation frameworks for tender assessment</li>
              <li>Identifying suppliers with strong environmental credentials</li>
              <li>Structuring contracts to incentivize sustainable practices</li>
              <li>Monitoring compliance with sustainability requirements</li>
            </ul>
            
            <p>By integrating sustainability considerations into procurement processes, quantity surveyors help clients extend their environmental commitment throughout the supply chain. This approach often reveals opportunities to achieve sustainability outcomes without significant cost premiums through thoughtful supplier engagement and specification development.</p>
            
            <h3>Future Directions: Advancing Sustainable Cost Management</h3>
            
            <p>The field of sustainable cost management continues to evolve rapidly, with quantity surveyors at the forefront of several emerging trends:</p>
            
            <ul>
              <li>Integration of artificial intelligence and machine learning for optimization of sustainable design options</li>
              <li>Development of circular economy cost models that capture value recovery potential</li>
              <li>Incorporation of climate resilience and adaptation measures into cost planning</li>
              <li>Advancement of social value quantification methodologies</li>
              <li>Evolution of carbon accounting and potential integration with financial metrics</li>
            </ul>
            
            <p>As these practices mature, <a href="https://bidkon.com.au/quantity-surveyors-melbourne/">Quantity Surveyors Melbourne</a> will continue expanding their capabilities to support clients in achieving environmental objectives while managing financial resources effectively. This evolution represents a natural extension of the profession's core purpose: optimizing value in the built environment.</p>
            
            <h3>Conclusion: The Essential Role of Quantity Surveyors in Sustainable Construction</h3>
            
            <p>As Australia's construction industry embraces more ambitious sustainability goals, the role of quantity surveyors in reconciling environmental aspirations with financial realities becomes increasingly vital. Through life cycle costing, embodied carbon assessment, certification guidance, and other specialized services, quantity surveyors help translate sustainability principles into financially viable implementation strategies.</p>
            
            <p>For clients committed to environmental responsibility, engaging quantity surveyors with sustainability expertise represents a valuable investment that supports informed decision-making, cost-effective implementation, and optimal outcomes across environmental, social, and economic dimensions.</p>
          </article>
        </div>
      </section>
      
      <footer className="bg-primary py-12 text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <a href="#" className="text-2xl font-serif font-bold tracking-tight mb-4 inline-block">
              SurveyorInsights
            </a>
            <p className="mt-4 text-primary-foreground/70">
              Providing valuable insights into Australia's quantity surveying industry.
            </p>
            <div className="mt-8 text-sm text-primary-foreground/60">
              © 2023 SurveyorInsights. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
