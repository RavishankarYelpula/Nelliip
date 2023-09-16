
    function setTitle(){
        const title2 = new Map([
            ["ips1","Innovation Support"],
            ["ips2","IP Protection"],
            ["ips3","Enforcement and Commercialization"],
            ["ips4","IP Portfolio Management"],
            ["ips5","Market Research"],
            ["ips6","Busniess Development"]
            ]);
        const desc = new Map([
              ["ips1", "<li>Quality patent and non-patent prior art search, analysis</li> <li>Explore and identify the emerging technologies and new opportunities</li><li>Understand the existing prior art around the new ideas to pursue further development</li> <li>Landscapes and identification of white space to determine the area to focus and develop <br>long term technology roadmap</li>"],
              ["ips2", "<li>Identification the potential inventions, strategically protect them by high quality patents</li> <li>Patentability analysis to increase the success of rate of patent grant</li> <li>Drat and file quality patent application</li> <li>Effective monitoring and office action to secure early and cost-effective protection</li> <li>Strategic advice on patent filing in different jurisdictions of business interest</li>"],
              ["ips3", "<li>Explore the opportunities for diverse solutions from the protected IP assets of the client</li> <li>Protect the clients from the costly IP litigation with efficient and timely due diligence</li> <li>Validity and invalidity analysis for IP assets under litigation and potential for litigation</li> <li>Explore the licensing, cross licensing and partnership opportunities</li>"],
              ["ips4", "<li>Develop IP policy, processes, strategy for effective management of IP assets to maximize the benefits.</li> <li>Audit and evaluation organization IP assets on regular basis</li> <li>Monitor and manage the legal requirements, maintain healthy and commercially viable IP portfolio</li> <li>Timely advice to top management, business and technology teams on latest trends and legal updates </li>"],
              ["ips5", "<li>We provide comprehensive competitive intelligence reports on the trends and forecast on <br>technology, products, market, and competitor. </li> <li>Forecast the products and services trends and opportunities to stay ahead of competition</li>"],
              ["ips6", "<li>IP Risk assessment for merger, acquisitions, licensing and strategic sell off</li> <li>Technology Scouting</li>"]
            ]);
        var ur=window.location.href.split("#")[1];
        location.reload();
    document.getElementById("servtitle").innerHTML = title2.get(ur);
    console.log("URL: "+ur);
    document.getElementById("servdesc").innerHTML = desc.get(ur);
    }
    

