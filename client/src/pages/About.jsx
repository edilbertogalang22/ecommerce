import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Award, Store, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Shop with Confidence",
    description:
      "Shop with confidence at TechShop. Our secure checkout process ensures your privacy and security.",
  },
  {
    icon: Users,
    title: "Support Our Community",
    description:
      "Join our community of tech enthusiasts and support local businesses. Together, we can make a difference.",
  },
  {
    icon: TrendingUp,
    title: "Stay Updated",
    description:
      "Stay up-to-date with the latest tech news and trends. Subscribe to our newsletter for exclusive offers and insights.",
  },
  {
    icon: Award,
    title: "Best Quality",
    description:
      "We pride ourselves on offering top-quality products that meet your needs and exceed your expectations.",
  },
];

const values = [
  {
    title: "Quality First",
    description:
      "We only stock products from trusted brands and verify the authenticity and quality of every item we sell.",
  },
  {
    title: "Customer Focus",
    description:
      "Your satisfaction is our priority. We provide responsive support and hassle-free returns.",
  },
  {
    title: "Innovation",
    description:
      "We stay ahead of the curve, bringing you the latest technology and innovations.",
  },
];

const reasons = [
  {
    title: "Competitive Prices",
    description:
      "Get the best deals on premium technology products without compromising on quality.",
  },
  {
    title: "Secure Shopping",
    description:
      "Shop with confidence knowing your data and transactions are protected.",
  },
  {
    title: "Fast Shipping",
    description:
      "Quick and reliable delivery to get your tech gadgets to you as soon as possible.",
  },
  {
    title: "Expert Support",
    description:
      "Our knowledgeable team is ready to help you make informed decisions.",
  },
];

const About = () => {
  return (
    <div>
      {/* HERO */}
      <section className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About TechShop
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Your trusted destination for the latest technology products.
        </p>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 px-4">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title}>
            <CardHeader>
              <Icon className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle className="text-sm font-medium text-gray-600">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">{description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* STORY */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Our Story
        </h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Founded in 2021, TechShop started with a simple mission: to make
            cutting-edge technology accessible to everyone.
          </p>
          <p>
            We carefully curate our product selection, partnering with trusted
            brands to ensure quality and performance.
          </p>
          <p>
            Our commitment goes beyond selling—we build lasting relationships
            through exceptional service and support.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map(({ title, description }) => (
            <div key={title}>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose TechShop?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map(({ title, description }) => (
              <div key={title} className="flex items-start space-x-3">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {title}
                  </h4>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;