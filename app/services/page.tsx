import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
        
        {/* 1. Pandit Booking */}
        <Link href="/services/pandit">
          <Card className="hover:shadow-lg transition cursor-pointer">
            <CardHeader className="flex flex-col items-center">
              <Image
                src="/images/service1.png"
                alt="Pandit Booking"
                width={800}
                height={800}
                className="object-cover rounded-lg mb-2"
              />
              <CardTitle>📿 Pandit Booking</CardTitle>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/services/samagri-booking">
          <Card className="hover:shadow-lg transition cursor-pointer">
            <CardHeader className="flex flex-col items-center">
              <Image
                src="/images/service2.png"
                alt="Samagri Options"
                width={800}
                height={800}
                className="object-cover rounded-lg mb-2"
              />
              <CardTitle>📿 Samagri Options</CardTitle>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/services/bhoj">
          <Card className="hover:shadow-lg transition cursor-pointer">
            <CardHeader className="flex flex-col items-center">
              <Image
                src="/images/service1.png"
                alt="Bharamin Bhoj"
                width={800}
                height={800}
                className="object-cover rounded-lg mb-2"
              />
              <CardTitle>📿Bharamin Bhoj</CardTitle>
            </CardHeader>
          </Card>
        </Link>

        {/* 2. Puja Package */}
        <Link href="/services/puja">
          <Card className="hover:shadow-lg transition cursor-pointer">
            <CardHeader className="flex flex-col items-center">
              <Image
                src="/images/service3.png"
                alt="Puja Package"
                width={800}
                height={800}
                className="object-cover rounded-lg mb-2"
              />
              <CardTitle>🙏 Puja Package</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}