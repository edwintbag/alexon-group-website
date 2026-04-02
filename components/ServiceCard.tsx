import Link from "next/link";
import type { ServiceItem } from "../lib/data";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href="/services" style={{ textDecoration: "none" }}>
      <div className="service-card">
        <div className="service-icon">{service.icon}</div>
        <h3>{service.title}</h3>
        <p>{service.desc}</p>
        <div className="read-more">
          Learn More <span>→</span>
        </div>
      </div>
    </Link>
  );
}
