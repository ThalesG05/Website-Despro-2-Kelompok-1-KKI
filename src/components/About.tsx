import AboutCSS from "./About.module.css"

function About() {
  return (
    <div className={`${AboutCSS.content}`}>
        <p style={{fontSize: 25, textAlign: "justify"}}>
        Globally, motorcycles are a major part of traffic, especially in cities and developing areas. They offer convenience and efficiency but also come with significant safety risks, especially in accidents. Helmets greatly reduce head injuries, but many riders don't follow helmet laws consistently. Traditional enforcement methods struggle in high-traffic areas and varied conditions.
        </p>
        <p style={{fontSize: 25, textAlign: "justify"}}>
        Using machine learning like the YOLO algorithm in traffic systems can help. The YOLO algorithm is fast and accurate for real-time monitoring. Deploying advanced tech in traffic systems requires balancing power, cost, and size. The Raspberry Pi is a great option due to its size, cost-effectiveness, and community support. This research aims to create an efficient helmet detection system for real-world traffic.
        </p>
    </div>
  )
}

export default About